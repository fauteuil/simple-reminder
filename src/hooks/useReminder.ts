import React, { useCallback, useEffect, useRef } from 'react';
import {
  useRecoilCallback,
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
} from 'recoil';

import {
  reminderListState,
  selectedReminderIdState,
  selectedReminderState,
} from '../components/reminder-list/state';
import { orangeTimerState } from '../components/timer/state';
import { NoOpFunction } from '../types';
import { useRouter } from './useRouter';

export function useReminder() {
  const [reminderList, setReminderList] = useRecoilState(reminderListState);
  const resetTimer = useResetRecoilState(orangeTimerState);

  const [selectedReminderId, setSelectedReminderId] = useRecoilState(
    selectedReminderIdState
  );

  const selectedReminder = useRecoilValue(selectedReminderState);

  const { navigate, routerParams } = useRouter();

  // Set the selected reminder id by URL value.
  useEffect(() => {
    const { itemId: reminderId = '' } = routerParams;
    if (selectedReminderId !== reminderId) {
      setSelectedReminderId(reminderId);
      console.log('setting itemId', reminderId);
    }
  }, [routerParams, setSelectedReminderId]);

  function selectNextReminder() {
    // resetTimer();
    const selectedIndex = reminderList.items.findIndex(
      ({ id }) => id === selectedReminderId
    );
    console.log('currentIndex', selectedIndex);
    const nextSelectedIndex =
      selectedIndex + 1 > reminderList.items.length ? 0 : selectedIndex + 1;
    const nextSelectedItem = reminderList.items[nextSelectedIndex];
    const newSelectedId = nextSelectedItem
      ? nextSelectedItem.id
      : reminderList.items[0].id;
    console.log("time's up! \nnewSelectedId", newSelectedId);

    if (newSelectedId !== selectedReminderId) {
      navigate(`/reminders/${newSelectedId}`);
    }
    // setSelectedReminderId(newSelectedId);
  }

  return {
    reminderList,
    selectedReminderId,
    selectedReminder,
    selectNextReminder,
    setReminderList,
    setSelectedReminderId,
  };
}
