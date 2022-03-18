export const fadeIn = {
  show: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  hidden: {
    opacity: 0,
  },
  hiddenUp: {
    opacity: 0,
    y: -100,
  },
  lateShow: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.4,
    },
  },
  slideDownLate: {
    opacity: 1,
    y: [-100, 20, 0],
    transition: {
      duration: 0.7,
      delay: 0.5,
    },
  },
};
