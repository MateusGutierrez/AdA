'use client';

import Image from 'next/image';
import logo from '../public/logo.png';
import ThemeButton from '@/components/themeButton';

const Header: React.FC = () => {
  return (
    <header className="flex w-full bg-popover text-foreground items-center border-b-solid border-b-[1px] border-b-border">
      <div className="flex justify-between w-[90%] items-center m-[auto] p-2">
        <div className="flex gap-4 items-center">
          <Image src={logo} width={50} height={50} alt="logo" className="p-2" />
        </div>
        <ThemeButton />
      </div>
    </header>
  );
};
export default Header;
