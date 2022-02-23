import { atom } from "recoil";

export const orangeTimerState = atom<number>({
  key: "orangeTimerState",
  default: 10
});
