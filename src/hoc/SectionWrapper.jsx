import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { ThemeContext } from "../context/themeContext";
import { useContext } from "react";

const StarWrapper = (Component, idName, bg) =>
  function HOC() {
    const { theme } = useContext(ThemeContext);
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} ${theme === "dark"? bg :""}  max-w-7xl mx-auto relative z-0 sm:overflow-hidden`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
