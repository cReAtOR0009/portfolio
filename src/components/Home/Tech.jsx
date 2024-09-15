import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { socials, technologies } from "../../constants";
import { navIn, fadeIn } from "../../utils/motion";
import { styles } from "../../styles";
import { ThemeContext } from "../../context/themeContext";

const TechCard = ({ index, icon, name }) => {
  // console.log("technology",technology)
  const {theme} = useContext(ThemeContext)
  return (
    <Tilt>
      <motion.div
        variants={fadeIn("right", "spring", 0.2 * index, 0.45)}
        className="w-[80px] h-[7.5rem] sm:w-28 sm:h-[9rem] text-center text-[#fff] border-2 border-primary rounded-lg p-[5px] sm:p-[20px]"
      >
        <div className="flex flex-col justify-center items-center">
          <img src={icon} alt={`technology${name}`} />
          <p  className={`mt-4 ${
          theme == "dark" ? "text-white" : "text-secondary2"
        } text-[17px] max-w-3xl leading-[15px]`}>{name}</p>
        </div>
      </motion.div>
    </Tilt>
  );
};
const Tech = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <h1
        className={`${styles.sectionHeadText} ${
          theme == "dark" ? "text-white" : "text-secondary2"
        }`}
      >
        Tools And Tecnologies
      </h1>
      <div className="flex flex-row flex-wrap gap-5 sm:gap-10">
        {technologies.map((technology, index) => (
          <TechCard key={technology.name} index={index} {...technology} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
