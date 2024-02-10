import { create } from "zustand";

interface TimerState {
  userSetTime: number;
  setUserSetTime: (userSetTime: number) => void;
  minutes: number;
  seconds: number;
  isCountingDown: boolean;
  setMinutes: (minutes: number) => void;
  setSeconds: (second: number) => void;
  setIsCountingDown: (isCountingDown: boolean) => void;
}

export const useTimerStore = create<TimerState>((set) => ({
  userSetTime: 15,
  setUserSetTime: (userSetTime: number) => set({ userSetTime }),
  minutes: 15,
  seconds: 0,
  setMinutes: (minutes: number) => set({ minutes }),
  setSeconds: (seconds: number) => set({ seconds }),
  isCountingDown: false,
  setIsCountingDown: (isCountingDown: boolean) => set({ isCountingDown }),
}));
