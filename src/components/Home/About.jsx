import { useState, useEffect, useContext } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { services } from "../../constants";
import { SectionWrapper } from "../../hoc/index";
import { fadeIn, textVariant, infinitescrollx } from "../../utils/motion";
import { ThemeContext } from "../../context/themeContext";

const ServiceCard = ({ index, title, icon }) => {
  // const [animationVariants, setAnimationVariants] = useState({ type: '', props: {} });

  // useEffect(() => {
  //   const updateAnimationVariants = () => {
  //     const windowWidth = window.innerWidth;

  //     if (windowWidth >= 640) {
  //       setAnimationVariants(infinitescrollx(0, windowWidth, 0, 10));
  //     } else {
  //       setAnimationVariants(infinitescrollx(0, windowWidth, 0, 10));
  //     }
  //   };

  //   // Initial setup
  //   updateAnimationVariants();

  //   // Update animation variants on window resize
  //   window.addEventListener('resize', updateAnimationVariants);

  //   // Cleanup on component unmount
  //   return () => {
  //     window.removeEventListener('resize', updateAnimationVariants);
  //   };
  // }, []);

  return (
    <Tilt className="xs:w-[300px] w-[200px] h-full bg-[transparent] border-2 border-[#915eff] p-2 sm:p-[15px] rounded-lg">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="sm:w-[200px] w-[100px] bg-primary border-2 p-4  sm:p-[20px] rounded-lg"
      >
        <div
          options={{
            max: 4,
            scale: 1,
            speed: 250,
          }}
          className="bg-tertiary border-2 border-[#915eff] rounded-lg p-2 sm:py-5 sm:px-[35px] h-full min-h-[180px]- sm:w-[220px] w-[100px] -mr-20- flex justify-evenly items-center flex-col"
        >
          <h3 className="text-white text-sm sm:text-[20px] font-bold text-center">
            {title}
          </h3>
          <img src={icon} alt={title} className="w-6 sm:w-16 h-6 sm:h-16 object-contain" />
        </div>
      </motion.div>
    </Tilt>
  );
};


const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2
           className={`${styles.sectionHeadText} ${
            theme == "dark" ? "text-white" : "text-secondary2"
          }`}
        >
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`mt-4 ${
          theme == "dark" ? "text-white" : "text-secondary2"
        } text-[17px] max-w-3xl leading-[30px]`}
      >
        As a highly skilled fullstack web developer, I am proficient in HTML, CSS, and
        JavaScript, and I have extensive experience with popular front-end
        frameworks and Libraries such as React, Redux, Three.js, Framer Motion,
        React-Router, Material UI, Tailwind, React-Bootstrap, recharts, and also
        frameworks and Libraries for Node.js, Google Firebase Inclusive--I'm
        very open to Learn more. I'm a quick learner and enjoy collaborating
        with clients and other developers to develop effective and scalable
        solutions that address real-world challenges. I am Currently Extending
        my knowledge and experience to the blockchain industry using solidity.
        with my skills and your ideas, we're bound to make the Best of magic in
        redefining your web Projects!
      </motion.p>
      <div
        className="mt-20 h-[auto] py-2 sm-overflow-hidden sm-w-[70vw]"
        style={{ background: "", overflow: "hidden" }}
      >
        <motion.div
          variants={infinitescrollx(200, 10, 0.5, 20)}
          // style={{width:"100%", background:"red"}}
          animate={"animate"}
          className=" flex items-stretch gap-12 sm:gap-[100px] max-h-[100%]- h-[100%] sm:mobileScrolling sm:w-[80vw] w-[100%]"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
          {/* {console.log(window.innerWidth)}  */}
        </motion.div>
      </div>
    </div>
  );
};
// export default About
export default SectionWrapper(About, "about", "bg-darktext-");
