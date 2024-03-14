import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { ComputersCanvas } from "../canvas";
import { illustration, illustration1, illustration2 } from "../../assets";
const Hero = () => {
  const [name, setName] = useState(["_", "C", "r", "e", "a", "t", "o", "r"]);
  const [displayLetters, setDisplayLetters] = useState("");
  const [leterCounter, setLetterCounter] = useState(0);

  const updateName = () => {
    // console.log("leterCounter :", leterCounter);
    setDisplayLetters(`${displayLetters}` + `${name[leterCounter]}`);
    // console.log("letters, ", displayLetters);
    setLetterCounter(leterCounter + 1);
    // console.log(displayLetters);
    // console.log("displayLetters:", displayLetters.length);
    if (displayLetters.length == 8) {
      setLetterCounter(0);
      setDisplayLetters("");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      updateName();
    }, 700);

    return () => {
      clearInterval();
    };
  }, [displayLetters]);
  return (
    <section className="relative w-full mx-auto">
      <div className="flex flex-col justify-between">
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40  violet-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} transition`}>
              Hi, I'm{" "}
              <span className="text-[#915eff] decoration-[underline] transition">
                {" "}
                {displayLetters} &nbsp;|
              </span>{" "}
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              a skilled and experienced web developer and Graphics designer ,
              <br className="sm:block hidden" />
              with passion for creating innovative and dynamic websites and web
              Applications with latest and indemand tools in the tech industry
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40  violet-gradient" />
          </div>
        </div>
        <div className=" md:block mt-[364px] flex flex-col justify-center items-center m-auto">
          {/* <ComputersCanvas /> */}
          <img src={illustration1} alt="creator" />
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="h-0 w-0 border-x-8 border-x-transparent border-t-[30px] border-t-violet-600"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
