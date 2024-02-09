import { create } from "zustand";

interface TimerState {
  minutes: number;
  seconds: number;
  isCountingDown: boolean;
  setMinutes: (minutes: number) => void;
  setSeconds: (second: number) => void;
  setIsCountingDown: (isCountingDown: boolean) => void;
}

export const useTimerStore = create<TimerState>((set) => ({
  minutes: 15,
  seconds: 0,
  setMinutes: (minutes: number) => set({ minutes }),
  setSeconds: (seconds: number) => set({ seconds }),
  isCountingDown: false,
  setIsCountingDown: (isCountingDown: boolean) => set({ isCountingDown }),
}));
