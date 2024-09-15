import React, { useContext } from "react";
import Nav from "../Navbar";
import Contact from "../Contact";
import { StarsCanvas } from "../canvas";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";
// import StarsCanvas from '../components'

const Layouts = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`${
      theme == "dark" ? "bg-primary_100" : "bg-white"
    }`}>
      <Nav />
      <div className="">
        {/* <StarsCanvas /> */}
        <Outlet />
      </div>
      <div className='relative z-0'>
      <StarsCanvas />
      <Contact />
      </div>
    </div>
  );
};

export default Layouts;
