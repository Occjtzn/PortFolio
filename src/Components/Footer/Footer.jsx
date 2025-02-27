import { IoLogoLinkedin, IoLogoGithub, IoIosMail } from 'react-icons/io';

export const Footer = () => {
  const links = [
    {
      href: 'https://www.linkedin.com/in/thibaultcourrieu/',
      icon: <IoLogoLinkedin />,
      label: 'LinkedIn',
    },
    {
      href: 'https://github.com/Occjtzn',
      icon: <IoLogoGithub />,
      label: 'GitHub',
    },
    {
      href: 'mailto:thibault.courrieu@outlook.fr',
      icon: <IoIosMail />,
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-bgLight text-textDark py-6 flex flex-col items-center">
      <div className="flex gap-6 mb-4">
        {links.map(({ href, icon, label }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-textDarker hover:text-highlight text-2xl"
            aria-label={label}
          >
            {icon}
          </a>
        ))}
      </div>
      <p className="text-sm text-textDark font-body">
        © {new Date().getFullYear()} Thibault COURRIEU, Tous droits réservés.
      </p>
    </footer>
  );
};
