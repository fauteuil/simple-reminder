import { useRecoilValue } from "recoil";
import { reminderListState } from "./state";
import { Reminder, Reminders } from "./types";

export function ReminderList() {
  const reminderList = useRecoilValue(reminderListState);

  function renderItem({ description, id, title }: Reminder) {
    return (
      <div key={id}>
        <div>{id}</div>
        <div>{title}</div>
        <div>{description}</div>
      </div>
    );
  }

  function renderList({ items }: Reminders) {
    return items.map((item) => renderItem(item));
  }

  return <>{renderList(reminderList)}</>;
}
