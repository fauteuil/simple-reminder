import React, { useCallback, useEffect, useRef } from "react";
import {
  useRecoilCallback,
  useRecoilState,
  useRecoilValue,
  useResetRecoilState
} from "recoil";

import {
  reminderListState,
  selectedReminderIdState,
  selectedReminderState
} from "../components/reminder-list/state";
import { useRouter } from "./useRouter";

export function useRequiredActions() {
  const [selectedReminderList, setSelectedReminderList] = useRecoilState(
    reminderListState
  );

  const [selectedReminderId, setSelectedReminderId] = useRecoilState(
    selectedReminderIdState
  );

  const selectedReminder = useRecoilValue(selectedReminderState);

  const { routerParams } = useRouter();

  // Set the selected reminder id by URL value.
  useEffect(() => {
    const { itemId: reminderId = "" } = routerParams;
    setSelectedReminderId(reminderId);
  }, [routerParams, setSelectedReminderId]);

  return {
    selectedReminderId,
    selectedReminder,
    selectedReminderList
  };
}
