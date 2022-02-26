import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import styled from 'styled-components';
import { DateTimeUnits } from '../../config/defaults';
import { useReminder } from '../../hooks/useReminder';

import { orangeTimerState } from './state';
import { OrangeCircle } from './Timer.styles';
import { TimerProps } from './types';
const { Hour, Minute, Second } = DateTimeUnits;

export function OrangeTimer(props: TimerProps) {
  // console.log('mounting');
  const { fullTime = 10, handleTimerEnd } = props;
  const [timeLeft, setTimeLeft] = useRecoilState(orangeTimerState);
  const [currentTime, setCurrentTime] = useState(fullTime);
  // const [timerRunning, setTimerRunning] = useState<boolean>(true);
  const timerRef = useRef<number>();
  const { selectedReminderId } = useReminder();

  const clearTimer = () => {
    // setTimerRunning(false);
    clearInterval(timerRef.current);
    timerRef.current = 0;
    console.log('cleared: timerRef.current', timerRef?.current);
  };

  function startTimer() {
    // setCurrentTime(Math.max(0, currentTime - Second));
    // setTimerRunning(true);
    setCurrentTime(Math.max(0, currentTime - 1));
    // setTimerOn(true);
    // console.log("timer.current", timer.current);
  }

  function resetTimer() {
    // setTimerRunning(true);
    // setCurrentTime(Math.max(0, currentTime - Second));
    setCurrentTime(fullTime);
    // setTimerOn(true);
    // console.log("timer.current", timer.current);
  }

  const handleComplete = (handler?: any): any => {
    if (handler && typeof handler === 'function') {
      handler();
    }
    console.log("Time's Up!");
    // setTimerRunning(false);
  };

  // useEffect(() => {
  //   timerRef.current = window.setInterval(() => {
  //     // setTimeLeft((prevTimeLeft) => {
  //     setCurrentTime((prevTimeLeft) => {
  //       if (prevTimeLeft > 0) {
  //         return prevTimeLeft - 1;
  //       }
  //       else {
  //         if (handleTimerEnd) {
  //           console.log('timer.ended');
  //           handleTimerEnd();
  //         }
  //         clearInterval(timerRef.current);
  //         return prevTimeLeft;
  //       }
  //     });
  //   }, 1000);
  //   return () => clearTimer();
  //   // }, [setTimeLeft]);
  // }, [setCurrentTime]);

  useEffect(() => {
    const currentReminderId = selectedReminderId;
    resetTimer();
  }, [selectedReminderId]);

  useEffect(() => {
    // if (timerRunning) {
    const timerIntervalID = window.setInterval(() => {
      // setCurrentTime(Math.max(0, currentTime - Second));
      const newTime = Math.max(0, currentTime - 1);
      if (currentTime <= 0) {
        clearTimer();
        setCurrentTime(fullTime);
        handleComplete(handleTimerEnd);
        return;
      } else {
        setCurrentTime(newTime);
      }
    }, Second);
    // Update the timer ID value each interval
    timerRef.current = timerIntervalID;
    return () => {
      // setTimerRunning(false);
      clearTimer();
    };
    // }
  }, [currentTime, handleTimerEnd]);

  const timerRunning = currentTime < fullTime;
  console.log(`currentTime`, currentTime);
  console.log(`fullTime`, fullTime);

  return (
    <>
      <OrangeCircle
        title='Click to reset the timer!'
        // onClick={useResetRecoilState(orangeTimerState)}
        onClick={() => resetTimer()}
      >
        {/* {timeLeft || "(restart)"} */}
        {currentTime || "time's up"}
      </OrangeCircle>
      <div
        style={{ cursor: 'pointer' }}
        onClick={() => {
          timerRunning ? clearTimer() : startTimer();
        }}
      >
        {timerRunning ? 'pause' : 'start'}
      </div>
    </>
  );
}
