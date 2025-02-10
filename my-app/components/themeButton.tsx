'use client';

import { useCallback, useEffect } from 'react';
import clsx from 'clsx';
import { themeStore } from '@/stores/theme';
import { FaRegMoon } from 'react-icons/fa';
import { MdOutlineLightMode } from 'react-icons/md';

const ThemeButton: React.FC = () => {
  const { isDark, toggleTheme } = themeStore();
  const onClick = useCallback(() => {
    toggleTheme();
  }, [toggleTheme]);
  useEffect(() => {
    document.body.className = clsx({ dark: isDark });
  }, [isDark]);
  return (
    <button
      onClick={onClick}
      className="h-[20px] w-[20px] bg-transparent text-primary pointer"
    >
      {isDark ? <MdOutlineLightMode /> : <FaRegMoon />}
    </button>
  );
};
export default ThemeButton;
