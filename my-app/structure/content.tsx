'use client';

import { Bounce, ToastContainer } from 'react-toastify';
import { useStore } from 'zustand';
import { themeStore } from '@/stores/theme';

interface Props {
  children: React.ReactNode;
}

const Content: React.FC<Props> = ({ children }) => {
  const { isDark } = useStore(themeStore);
  const toastTheme = isDark ? 'dark' : 'light';
  return (
    <div className="min-h-[90vh] w-[90%] m-[auto] bg-background text-foreground pb-[60px]">
      {children}
      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        theme={toastTheme}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Bounce}
      />
    </div>
  );
};

export default Content;
