import { useRecoilValue } from "recoil";
import { LayoutWrapper } from "../../components/layout";
import { ReminderList } from "../../components/reminder-list";
import { OrangeTimer } from "../../components/timer";
import { activityTimerState } from "../../components/timer/state";
import { Timer } from "../../components/timer/Timer";
import { DateTimeUnits } from "../../config/defaults";
import { useReminder } from "../../hooks/useReminder";

export function Dashboard() {
  const now = new Date().getTime();
  // Get the elapsed time stored in app state (Recoil) for consistent rendering across views.
  const elapsedTime = now - useRecoilValue(activityTimerState);
  const nextActivityLength = 0.5 * DateTimeUnits.Hour - elapsedTime;
  const { selectNextReminder } = useReminder();
  return (
    <LayoutWrapper>
      <h1>Recoil Simple Reminders</h1>
      <div>Click the Orange timer to reset!</div>
      <OrangeTimer fullTime={10} handleTimerEnd={selectNextReminder} />
      {/* <Timer
        fullTime={nextActivityLength}
        handleComplete={selectNextReminder}
      /> */}
      <ReminderList />
    </LayoutWrapper>
  );
}