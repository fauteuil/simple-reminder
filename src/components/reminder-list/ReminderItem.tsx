import { useReminder } from "../../hooks/useReminder";
import { Reminder, Reminders } from "./types";
import { ReminderItemContainer } from "./ReminderList.styles";

export function ReminderItem({ description, id, title, onClick }: Reminder) {
  const { reminderList, selectedReminder, selectedReminderId } = useReminder();

  return (
    <ReminderItemContainer
      key={id}
      onClick={onClick}
      selected={selectedReminderId === id}
    >
      <div>{id}</div>
      <div>{title}</div>
      <div>{description}</div>
    </ReminderItemContainer>
  );
}
