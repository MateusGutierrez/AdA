'use client';

import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="flex w-full bg-popover text-foreground p-2 border-t-solid border-t-[1px] border-t-border items-center">
      <div className="flex-col justify-center m-[auto] items-center py-6">
        <div className="flex-col justify-center">
          <p className="text-center">mateusgutierrez9@gmail.com</p>
          <p className="text-center">(48) 98875-6690</p>
        </div>
        <div className="flex gap-2 justify-center">
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
