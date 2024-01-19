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
        <Outlet />
      </div>
      {/* <StarsCanvas /> */}
      <Contact />
    </div>
  );
};

export default Layouts;
