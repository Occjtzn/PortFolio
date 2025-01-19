import { motion } from 'framer-motion';
import { NavLink } from './NavLink/NavLink';
import { NavLogo } from './NavLogo/NavLogo';

export const NavBar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 5.5 }}
      className="fixed top-0 left-0 w-full z-[1000] bg-bgLight/80 backdrop-blur-md shadow-lg"
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 h-16 sm:h-20">
        <div className="flex items-center">
          <NavLogo />
        </div>
        <div className="hidden md:flex flex-1 justify-center space-x-6 sm:space-x-8 lg:space-x-12">
          <NavLink />
        </div>
        <div className="md:hidden flex items-center">
          <button
            aria-label="Open menu"
            className="text-textDark p-2 rounded-md hover:bg-highlight/20 transition-colors duration-300"
          >
            ☰
          </button>
        </div>
      </div>
    </motion.nav>
  );
};
