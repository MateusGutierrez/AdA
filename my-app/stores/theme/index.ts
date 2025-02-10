import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface ThemeStore {
  isDark: boolean;
  toggleTheme: () => void;
}

export const themeStore = create<ThemeStore>()(
  persist(
    set => ({
      isDark: false,
      toggleTheme: () =>
        set(state => ({
          isDark: !state.isDark
        }))
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);
