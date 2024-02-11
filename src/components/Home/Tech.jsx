import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { socials, technologies } from "../../constants";
import { navIn, fadeIn } from "../../utils/motion";
import { styles } from "../../styles";

const TechCard = ({ index, icon, name }) => {
  // console.log("technology",technology)
  return (
    <Tilt>
      <motion.div
        variants={fadeIn("right", "spring", 0.2 * index, 0.45)}
        className="w-28 h-[8.5rem] text-center text-[#fff] border-2 border-[#915eff] rounded-lg p-[20px]"
      >
        <div className="flex flex-col justify-center items-center">
          <img src={icon} alt={`technology${name}`} />
          <p>{name}</p>
        </div>
      </motion.div>
    </Tilt>
  );
};
const Tech = () => {
  return (
    <>
      <h1 className={styles.sectionHeadText}>Tools And Tecnologies</h1>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <TechCard key={technology.name} index={index} {...technology} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
