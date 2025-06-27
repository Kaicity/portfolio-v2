import { motion } from 'motion/react';

const Card = ({ text, image, styles, containerRef }) => {
  return image && !text ? (
    <motion.img
      style={styles}
      src={image}
      alt="card-img"
      className="absolute w-15 cursor-grab"
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
    />
  ) : (
    <motion.div
      className="absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 bg-storm w-[12rem] cursor-grab"
      style={styles}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
    >
      {text}
    </motion.div>
  );
};

export default Card;
