import { motion } from 'framer-motion';
import ImageHeader from '/assets/Images/App-Dev.webp';

export const HeaderPicture = () => (
  <div className="w-full h-screen overflow-hidden relative">
    <motion.img
      className="absolute top-0 left-0 w-full h-full object-cover"
      src={ImageHeader}
      alt="Image de header"
      initial={{ scale: 1, y: 0 }}
      animate={{
        scale: [1, 1.05, 1.1],
        y: [0, -20, 0],
      }}
      transition={{
        duration: 6,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'mirror',
      }}
    />
  </div>
);
