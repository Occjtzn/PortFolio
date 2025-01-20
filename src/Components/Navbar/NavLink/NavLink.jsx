import { Link } from 'react-scroll';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const NavLink = () => {
  const links = [
    { name: 'A propos', to: 'About', type: 'scroll' },
    { name: 'Mes Projets', to: 'Projects', type: 'scroll' },
    { name: 'Skills', to: 'Skills', type: 'scroll' },
    { name: 'Contact', to: 'Contact', type: 'scroll' },
    { name: 'CV', to: '/cv', type: 'route', special: true },
  ];

  return (
    <ul className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 m-0 p-0 list-none">
      {links.map((link) => (
        <li key={link.name} className="relative group">
          {link.type === 'scroll' ? (
            <Link
              to={link.to}
              smooth
              duration={500}
              spy
              className="relative px-4 py-2 text-xs sm:text-sm md:text-base lg:text-lg text-textDark uppercase font-medium font-firaCode tracking-wide cursor-pointer transition-all duration-300 group-hover:text-highlight"
            >
              {link.name}
              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-bgDark group-hover:bg-highlight transition-all duration-300"></span>
            </Link>
          ) : (
            <RouterNavLink
              to={link.to}
              className="relative px-4 py-2 text-xs sm:text-sm md:text-base lg:text-lg uppercase font-medium font-firaCode tracking-wide cursor-pointer text-white bg-highlight rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            >
              {link.name}
              <span className="absolute inset-0 bg-white opacity-0 rounded-lg transition-opacity duration-300 group-hover:opacity-10"></span>
            </RouterNavLink>
          )}
        </li>
      ))}
    </ul>
  );
};
