import { motion } from 'framer-motion';

export const HeaderTitle = () => (
  <div className="absolute bottom-10 sm:bottom-20 sm:right-20 text-bgLight space-y-6 p-4 font-body">
    <motion.h1
      className="text-4xl sm:text-5xl lg:text-6xl uppercase tracking-wide text-white bg-black/40 backdrop-blur-md shadow-lg px-4 py-2 rounded-lg"
      initial={{ opacity: 0, y: -50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
    >
      Thibault Courrieu
    </motion.h1>

    <div className="flex items-center">
      <motion.h2
        className="text-2xl sm:text-3xl lg:text-4xl uppercase tracking-widest overflow-hidden whitespace-nowrap font-code text-highlight"
        initial={{ width: 0 }}
        animate={{ width: '70%' }}
        transition={{ duration: 3, ease: 'easeOut', delay: 2.5 }}
        style={{
          display: 'inline-block',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        }}
      >
        Développeur Web
      </motion.h2>

      <motion.div
        className="text-3xl sm:text-4xl text-highlight"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 1.2,
          delay: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        |
      </motion.div>
    </div>

    <motion.p
      className="text-base sm:text-lg lg:text-2xl italic text-bgMedium"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: 'easeOut', delay: 5 }}
    >
      Allier design et performance pour transformer vos idées en réalité.
    </motion.p>
  </div>
);
