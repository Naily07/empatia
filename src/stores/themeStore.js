import { create } from "zustand";
import {persist} from "zustand/middleware";

export const useThemeStore = create(
  persist(
    (set) => ({
      mode: "light",
      toggleMode: () =>
        set((state) => ({
          mode: state.mode === "light" ? "dark" : "light",
        })),
    }),
    {
      name: "theme-mode", // nom dans localStorage
    }
  )
);
