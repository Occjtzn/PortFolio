import { Link } from 'react-scroll';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const NavLink = () => {
  const links = [
    { name: 'A propos', to: 'About', type: 'scroll' },
    { name: 'Mes Projets', to: 'Projects', type: 'scroll' },
    { name: 'Skills', to: 'Skills', type: 'scroll' },
    { name: 'Contact', to: 'Contact', type: 'scroll' },
    { name: 'CV', to: '/cv', type: 'route', special: true }, // Lien spécial pour le CV
  ];

  return (
    <ul className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12 m-0 p-0 list-none">
      {links.map((link) =>
        link.type === 'scroll' ? (
          <li key={link.name} className="relative group">
            <Link
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              className="relative px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-textDark uppercase font-medium sm:text-base md:text-lg lg:text-xl font-firaCode tracking-wide cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] group-hover:text-highlight"
            >
              {link.name}
              <span className="absolute inset-x-0 bottom-0 h-[3px] bg-bgDar group-hover:bg-highlight transition-all duration-500"></span>
            </Link>
          </li>
        ) : (
          <li key={link.name} className="relative group">
            <RouterNavLink
              to={link.to}
              className="relative px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 uppercase font-medium sm:text-base md:text-lg lg:text-xl font-firaCode tracking-wide cursor-pointer text-white bg-highlight rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            >
              {link.name}
              <span className="absolute inset-0 bg-white opacity-0 rounded-lg transition-opacity duration-300 group-hover:opacity-10"></span>
            </RouterNavLink>
          </li>
        )
      )}
    </ul>
  );
};
