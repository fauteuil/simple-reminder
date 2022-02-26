import { useReminder } from "../../hooks/useReminder";
import { Reminder, Reminders } from "./types";
import { ReminderItem } from "./ReminderItem";
import {
  ReminderListContainer,
  ReminderItemContainer
} from "./ReminderList.styles";
import { useCallback } from "react";
import { useRouter } from "../../hooks/useRouter";

export function ReminderList() {
  const {
    reminderList,
    selectedReminder,
    selectedReminderId,
    setSelectedReminderId
  } = useReminder();

  const { navigate } = useRouter();

  const handleReminderClick = useCallback(
    (id) => () => {
      navigate(`/reminders/${id}`);
    },
    [setSelectedReminderId]
  );

  function renderItem({ description, id, title }: Reminder) {
    return (
      <ReminderItem
        description={description}
        id={id}
        key={id}
        onClick={handleReminderClick(id)}
        title={title}
      />
    );
  }

  function renderList({ items }: Reminders) {
    return items.map((item) => renderItem(item));
  }

  return (
    <ReminderListContainer>{renderList(reminderList)}</ReminderListContainer>
  );
}
