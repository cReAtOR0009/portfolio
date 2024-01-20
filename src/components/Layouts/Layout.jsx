import React from "react";
import Nav from "../Navbar";
import Contact from "../Contact";
import { StarsCanvas } from "../canvas";
import { Outlet } from "react-router-dom";
// import StarsCanvas from '../components'

const Layouts = () => {
  return (
    <div>
      <Nav />
      <div className="outlet">
        <StarsCanvas />
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
