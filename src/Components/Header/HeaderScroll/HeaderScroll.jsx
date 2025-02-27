import { motion } from 'framer-motion';

export const ScrollIndicator = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5, delay: 6 }}
    className="w-10 h-16 md:w-12 md:h-20 lg:w-16 lg:h-28 rounded-full border-4 border-bgLight flex justify-center items-start p-2 md:p-3 mx-auto"
  >
    <motion.div
      animate={{
        y: [0, 40, 0],
        opacity: [1, 0.5, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 2.5,
        ease: 'easeInOut',
        repeat: Infinity,
      }}
      className="w-2 h-4 md:w-3 md:h-5 rounded-full bg-highlight"
    />
  </motion.div>
);
