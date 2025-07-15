import { persist } from 'zustand/middleware';
import { create } from 'zustand';

export const useSessionAnalyseStorage = create(
  persist(
    (set) => ({
      session: '',
      emotionAnalyses: null,
      setSessionAnalyse: (session) =>
        set(() => ({
          session: session !== null ? session : null,
        })),
      setEmotionAnalyse: (emotion) =>
        set(() => ({
          emotionAnalyses: Array.isArray(emotion) ? emotion : [],
        })),
    }),
    {
      name: 'session-analyse',
    }
  )
);
