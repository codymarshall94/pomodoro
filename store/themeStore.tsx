import { create } from "zustand";

interface Theme {
  name: string;
  videoId: string;
}

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: { name: "", videoId: "" },
  setTheme: (theme: Theme) => set({ theme }),
}));
