import React from 'react';
import { IoLogoLinkedin, IoLogoGithub, IoIosMail } from 'react-icons/io';

export const Footer = () => {
  return (
    <footer className="bg-bgLight text-textDark py-6 flex flex-col items-center">
      <div className="flex gap-6 mb-4">
        <a
          href="https://www.linkedin.com/in/thibaultcourrieu/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-textDarker hover:text-highlight text-2xl"
          aria-label="LinkedIn"
        >
          <IoLogoLinkedin />
        </a>
        <a
          href="https://github.com/Occjtzn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-textDarker hover:text-highlight text-2xl"
          aria-label="GitHub"
        >
          <IoLogoGithub />
        </a>
        <a
          href="mailto:thibault.courrieu@outlook.fr"
          className="text-textDarker hover:text-highlight text-2xl"
          aria-label="Email"
        >
          <IoIosMail />
        </a>
      </div>
      <p className="text-sm text-textDark font-body">
        © 2025 Thibault COURRIEU, Tous droits réservés.
      </p>
    </footer>
  );
};
