import { Duration } from "luxon";
import React, { FC, ComponentType, useEffect, useRef, useState } from "react";
import { DateTimeFormats, DateTimeUnits } from "../../config/defaults";

const { Hour, Minute, Second } = DateTimeUnits;

const formatTime = (
  milliseconds: number,
  format: string = milliseconds > Hour
    ? DateTimeFormats.Hours
    : DateTimeFormats.Minutes
): string => Duration.fromObject({ milliseconds }).toFormat(format);

export interface ITimerProps {
  component?: ComponentType<any> | "span";
  fullTime?: number;
  handleComplete?: any;
  handlePause?: any;
  handleCancel?: any;
  handleReset?: any;
}

const handleTimerEnd = (handler?: any): any => {
  if (handler && typeof handler === "function") {
    handler();
  }
  console.log("Time's Up!");
};

/**
 *
 * Defaults:
 * 30 minute timer
 * Displayed by default wrapped inside a `<span/>` element.
 * which stops and calls an optional completeHandler callback.
 */
export const Timer: FC<ITimerProps> = ({
  // fullTime = Minute * 30,
  fullTime = Minute * 1,
  component,
  handleComplete
}) => {
  const [currentTime, setCurrentTime] = useState(fullTime);
  // const [timerOn, setTimerOn] = useState(true);

  // useRef establishes a timer which persists across renders.
  const timerRef = useRef<number>();

  const clearTimer = () => {
    clearInterval(timerRef.current);
    // setTimerOn(false);
    // console.log("timer.current", timer.current);
  };

  function startTimer() {
    setCurrentTime(Math.max(0, currentTime - Second));
    // setTimerOn(true);
    // console.log("timer.current", timer.current);
  }

  useEffect(() => {
    const timerIntervalID = window.setInterval(() => {
      setCurrentTime(Math.max(0, currentTime - Second));
      if (currentTime <= 0) {
        clearTimer();
        handleTimerEnd(handleComplete);
        return;
      }
    }, Second);
    // Update the timer ID value each interval
    timerRef.current = timerIntervalID;
    return () => clearTimer();
  }, [currentTime, handleComplete]);

  const DisplayComponent = component || "span";

  return (
    <>
      <div onClick={clearTimer}>pause</div>
      <div onClick={startTimer}>start</div>
      <DisplayComponent>{formatTime(currentTime)}</DisplayComponent>
    </>
  );
};
