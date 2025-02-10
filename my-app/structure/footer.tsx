'use client';

import { Label } from '@/components/ui/label';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="flex w-full bg-popover text-foreground p-2 border-t-solid border-t-[1px] border-t-border items-center">
      <div className="flex-col justify-center m-[auto] items-center py-6">
        <div className="flex flex-col justify-center gap-2 mb-2">
          <Label className="text-center">mateusgutierrez9@gmail.com</Label>
          <Label className="text-center">(48) 98875-6690</Label>
        </div>
        <div className="flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/mateus-gutierrez-a991aa1b9/"
            target="blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/MateusGutierrez" target="blank">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
