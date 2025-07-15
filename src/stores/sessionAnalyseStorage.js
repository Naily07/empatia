import { persist } from "zustand/middleware";
import { create } from "zustand";

export const useSessionAnalyseStorage = create(
  persist(
    (set) => ({
      session: "",
      emotionAnalyses: [],
      setSessionAnalyse: (session) =>
        set(() => ({
          session: session !== null ? session : null,
        })),
      setEmotionAnalyse: (emotion) =>
        set(() => ({
          emotionAnalyses: emotion  || [] ,
        })),
    }),
    {
      name: "session-analyse",
    }
  )
);
