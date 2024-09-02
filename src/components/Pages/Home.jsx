import { useState, useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import {
  About,
  Hero,
  Tech,
  Experience,
  Projects,
  Feedbacks,
} from "../Home/index";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <div
        className={`relative z-0 ${
          theme == "dark" ? "bg-primary_100" : "bg-white"
        }`}
      >
        {/* <div className="bg-hero-patter bg-cover bg-no-repeat bg-center"> */}
          <Hero />
        {/* </div> */}
        <About />
        <Experience />
        <Tech />
        <Projects />
        <Feedbacks />
      </div>
    </div>
  );
};

export default Home;
