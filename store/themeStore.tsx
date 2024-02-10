import { Theme } from "@/types/theme";
import { create } from "zustand";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: { name: "", videoId: "" },
  setTheme: (theme: Theme) => set({ theme }),
}));
