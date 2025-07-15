// "use client";

import { useContext } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { services } from "../../constants";
import { SectionWrapper } from "../../hoc/index";
import { fadeIn, textVariant } from "../../utils/motion";
import { ThemeContext } from "../../context/themeContext";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="w-[200px] sm:w-[300px] h-full bg-transparent border-2 border-[#915eff] p-2 sm:p-[15px] rounded-lg">
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="bg-primary border-2 p-4 sm:p-[20px] rounded-lg"
    >
      <div
        className="bg-tertiary border-2 border-[#915eff] rounded-lg p-2 sm:py-5 sm:px-[35px] h-full min-h-[130px] flex justify-evenly items-center flex-col"
      >
        <h3 className="text-white text-sm sm:text-[20px] font-bold text-center">
          {title}
        </h3>
        <img src={icon} alt={title} className="w-6 sm:w-16 h-6 sm:h-16 object-contain" />
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} ${theme === "dark" ? "text-white" : "text-secondary2"}`}>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`mt-4 ${theme === "dark" ? "text-white" : "text-secondary2"} text-[17px] max-w-3xl leading-[30px]`}
      >
        As a highly skilled fullstack web developer, I specialize in HTML, CSS, JavaScript, and frameworks like React, Redux, and Three.js. I build responsive, dynamic, and scalable web experiences — now extending into blockchain with Solidity. Let’s build something magical!
      </motion.p>

      {/* Infinite Scroll Section */}
      <div className="mt-20 overflow-hidden py-2">
        <motion.div
          className="flex gap-10 sm:gap-[100px] w-max animate-slide-loop"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 20,
          }}
        >
          {[...services, ...services].map((service, index) => (
            <ServiceCard key={`${service.title}-${index}`} index={index} {...service} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about", "bg-darktext-");
