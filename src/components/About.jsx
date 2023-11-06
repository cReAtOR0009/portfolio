import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc/index";
import { fadeIn, textVariant,infinitescrollx } from "../utils/motion";


const ServiceCard =({index, title, icon}) => {
  return (
      <Tilt className="xs:w-[300px] w-[300px] h-full bg-[transparent] border-2 border-[#915eff]  p-[15px] rounded-lg">
        <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className=" w-[300px] bg-[#915eff] border-2 p-[20px] rounded-lg"
        >
          <div
          options={ {
            max:4,
            scale:1,
            speed:250
          }}
          className="bg-tertiary border-2 border-[#915eff] rounded-lg py-5 px-12 min-h-[280px] w-[300px] flex justify-evenly items-center flex-col"
          >
             <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
            <img src={icon} alt={title} 
              className="w-16 h-16 object-contain"
            />
           
          </div>

        </motion.div>

      </Tilt>
    )
}

const About = () => {
  return (
    <div style={{boxShadow:"-1px -45px 55px 120px rgba(0,17,36,1)"}}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        
As a highly skilled web developer, I am proficient in HTML, CSS, and JavaScript, and I have extensive experience with popular front-end frameworks and Libraries such as React, Three.js, Framer Motion, React-Router, Redux, Tailwind, React-Bootstrap, recharts, and also frameworks and Libraries for Node.js, Google Firebase Inclusive--I'm very open to Learn more. I'm a quick learner and enjoy collaborating with clients and other developers to develop effective and scalable solutions that address real-world challenges. Let's team up and make magic happen!, I promise I won't suggest adding any unicorns or glitter, unless that's what you're into. But seriously, with my skills and your ideas, we're bound to make the Best of magic in Web Development!
      </motion.p>
      <div className="mt-20 h-[auto] py-2 sm-overflow-hidden sm-w-[100vw]" style={{ background:"", overflow:"hidden"}}>

      <motion.div
      variants={window.innerWidth>=640?infinitescrollx(0, window.innerWidth,0,10):fadeIn("right","",.5,2)}
      // style={{width:"100%", background:"red"}}
      animate={"animate"}
      className=' flex gap-[150px] max-h-[100%] h-[100%] sm-overflow-x-flow sm:w-[100vw] w-[100%]'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))
        }
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))
        }
        {/* {console.log(window.innerWidth)}  */}
      </motion.div>
      </div>
    </div>
  );
};
// export default About
export default SectionWrapper(About, "about");
