import { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from './NavLink/NavLink';
import { NavLogo } from './NavLogo/NavLogo';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="relative lg:fixed top-0 left-0 w-full z-[1000] bg-bgLight/80 backdrop-blur-md shadow-lg"
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 h-16 sm:h-20 md:h-24">
        <div className="flex items-center flex-none">
          <NavLogo />
        </div>
        <div className="hidden md:flex flex-1 justify-center space-x-6 sm:space-x-8 lg:space-x-12">
          <NavLink />
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className={`relative w-10 h-10 flex items-center justify-center focus:outline-none ${
              isOpen ? 'text-highlight' : 'text-textDark'
            }`}
          >
            <motion.span
              className="block w-8 h-[2px] bg-current absolute transform"
              initial={false}
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 6 : -6,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
            <motion.span
              className="block w-8 h-[2px] bg-current absolute transform"
              initial={false}
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? 6 : 6,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
          maxHeight: isOpen ? 300 : 0,
        }}
        transition={{
          duration: 0.6,
          ease: [0.25, 1, 0.5, 1],
        }}
        className="overflow-hidden bg-bgLight flex flex-col items-center space-y-4 py-4 shadow-md md:hidden"
      >
        {isOpen && <NavLink />}
      </motion.div>
    </motion.nav>
  );
};
