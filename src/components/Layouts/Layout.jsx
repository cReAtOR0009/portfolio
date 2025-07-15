import React, { useContext } from "react";
import Nav from "../Navbar";
import Contact from "../Contact";
import { StarsCanvas } from "../canvas";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";
// import StarsCanvas from '../components'

const Layouts = () => {
  const {theme} = useContext(ThemeContext)
  const usedTheme = theme == "dark" ? "bg-primary_100" : "bg-white"
  return (
    <div className={`${usedTheme}`}>
       <Nav />
      <div className="relative">
        <Outlet />
      {/* <div className='relative z-0'>
      <StarsCanvas /> */}
      <Contact />
      </div>
    </div>
  );
};

export default Layouts;
