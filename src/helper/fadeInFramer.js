export const fadeInFramer = (direction = 'up', delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: 'easeOut' },
  },
});

export const slideInLeft = (delay = 0) => ({
  hidden: {
    opacity: 0,
    x: -100, // Trượt từ bên trái (x âm)
  },
  show: {
    opacity: 1,
    x: 0, // Đưa về vị trí ban đầu
    transition: { delay, duration: 0.6, ease: 'easeOut' },
  },
});

export const slideInRight = (delay = 0) => ({
  hidden: {
    opacity: 0,
    x: 100, // Trượt từ bên trái (x âm)
  },
  show: {
    opacity: 1,
    x: 0, // Đưa về vị trí ban đầu
    transition: { delay, duration: 0.6, ease: 'easeOut' },
  },
});

export const bounce = (delay = 0) => ({
  hidden: {
    opacity: 0,
    y: 50, // Bắt đầu từ dưới
  },
  show: {
    opacity: 1,
    y: [0, -15, 0], // Hiệu ứng nảy: từ vị trí ban đầu lên rồi trở lại
    transition: {
      delay,
      duration: 0.8,
      ease: 'easeOut',
      type: 'spring', // Hiệu ứng lò xo cho chuyển động mượt
      stiffness: 200, // Độ cứng của lò xo (tùy chỉnh nếu cần)
    },
  },
});
