import { motion } from 'framer-motion';
import ImageHeader from '/assets/Images/App-Dev.webp';

export const HeaderPicture = () => (
  <div className="w-full h-screen overflow-hidden relative">
    <motion.img
      className="absolute inset-0 w-full h-full object-cover"
      src={ImageHeader}
      alt="Image de header"
      initial={{ scale: 1, y: 0 }}
      animate={{
        scale: [1, 1.03, 1.06, 1.03, 1],
        y: [0, -10, 0, 10, 0],
      }}
      transition={{
        duration: 8,
        ease: 'easeInOut',
        repeat: Infinity,
      }}
    />
  </div>
);
