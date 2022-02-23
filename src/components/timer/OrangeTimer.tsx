import React, { useEffect, useRef } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import styled from "styled-components";

import { orangeTimerState } from "./state";

const OrangeCircle = styled.div`
  border: 1rem solid orange;
  border-radius: 5rem;
  padding-top: 2rem;
  height: 3rem;
  width: 5rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    border-color: orangered;
    background-color: lightyellow;
  }
  &:active {
    border-color: red;
    background-color: lightsalmon;
  }
`;

export function OrangeTimer(props: TimerProps) {
  const [timeLeft, setTimeLeft] = useRecoilState(orangeTimerState);
  const timerRef = useRef<number>();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft > 0) {
          return prevTimeLeft - 1;
        }
        return prevTimeLeft;
      });
    }, 1000);
    return () => {
      clearInterval(timerRef.current);
    };
  }, [setTimeLeft]);

  return (
    <OrangeCircle
      title="Click to reset the time!"
      onClick={useResetRecoilState(orangeTimerState)}
    >
      {timeLeft || "(restart)"}
    </OrangeCircle>
  );
}
