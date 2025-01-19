import { motion } from 'framer-motion';

export const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1.5,
        delay: 6.5,
      }}
      className="w-16 h-28 rounded-full border-4 border-bgLight flex justify-center items-start p-3 mx-auto"
    >
      <motion.div
        animate={{
          y: [0, 50],
          opacity: [1, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'loop',
        }}
        className="w-3 h-5 rounded-full bg-highlight"
      />
    </motion.div>
  );
};
