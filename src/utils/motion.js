export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: [0, 1],
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  const xHidden = direction === "left" ? 200 : direction === "right" ? -200 : 0;
  const yHidden = direction === "up" ? 100 : direction === "down" ? -100 : 0;
  return {
    hidden: {
      x: xHidden,
      y: yHidden,
      opacity: 0,
    },
    show: {
      x: [0, 50, -25, 0],
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const navIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    hidden2: {
      x: direction === "left" ? 200 : direction === "right" ? 30 : 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
    show2: {
      opacity: 1,
      x: [0],
      // y: 0,
      textShadow: "0px 0px 8px rgb(255, 255, 255)",
      boxShadow: "0px 0px 8px #fff",
      // boxShadow: "rgba(255, 255, 255, 1) 10px 18px 50px 10px",
      transition: {
        type: type,
        delay: delay,
        repeat: Infinity,
        duration: duration,
        ease: "easeInOut",
        yoyo: Infinity,
      },
    },
  };
};

export const infinitescrollx = (y, width, delay, duration) => {
  return {
    animate: {
      x: [-1500, y - width],
      transition: {
        x: {
          delay: delay,
          ease: "linear",
          repeat: Infinity,
          duration: duration,
          repeatType: "loop",
        },
      },
    },
  };
};

// export const

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
