import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { navIn, textVariant } from "../utils/motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
const Navbar = () => {
  const [active, setActive] = useState("Contact");
  const [Toggle, setToggle] = useState(false);

  return (
    <motion.nav
      className={`${styles.paddingX} w-screen flex items-center py-5 fixed top-0 z-20 border-b-4 bg-[#5b4785]`}
      initial={{ y: -250 }}
      animate={{ y: -10 }}
      transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 120 }}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("Contact");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className=" text-white text-[18px] font-bold cursor-pointer flex lg:flex-col">
            _Creator's &nbsp;
            <span className="sm:block hidden"> | #WebManiac</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link, index) => {
            return (
              <motion.li
                key={link.id}
                className={`${
                  active === link.title
                    ? "text-white bg-[#915eff] rounded p-[10px]"
                    : "text-secondary"
                } hover:-text-white hover:bg-[#915eff] hover:rounded hover:text-center hover:py-[10px] text-[18px] ${
                  link.title === "Contact"
                    ? "text-[#050816]  rounded-full bg-[#915eff] text-[25px] px-[10px] text-center"
                    : ""
                } font-medium cursor-pointer text-center transition-all`}
                variants={navIn(
                  "right",
                  "spring",
                  link.title === "Contact" ? 1 * index : 1 * index,
                  link.title === "Contact" ? 1.5 : 2
                )}
                initial={link.title === "Contact" ? "hidden2" : "hidden"}
                animate={link.title === "Contact" ? "show2" : "show"}
                onClick={() => {
                  setActive(link.title);
                }}
              >
                <a href={`/#${link.id}`}>{link.title}</a>
              </motion.li>
            );
          })}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={Toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!Toggle)}
          />
          <div
            className={`${
              !Toggle ? "hidden" : "flex"
            } h-[100vh] w-[70vw] justify-center items-start py-6 absolute top-20 right-0  min-w-[140px] z-10 rounded-xl  bg-[#5b4785] transition-none `}
          >
            <ul className="list-none h-[80%] flex flex-col justify-between gap-[20px]">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title
                        ? "text-white bg-[#915eff] rounded p-[10px]"
                        : "text-secondary"
                    } hover:-text-white hover:bg-[#915eff] hover:rounded hover:text-center hover:py-[10px] text-[18px] ${
                      link.title === "Contact"
                        ? "text-[#050816]  rounded-full bg-[#915eff] text-[25px] px-[10px] text-center"
                        : ""
                    } font-medium cursor-pointer text-center transition-all`}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(!Toggle);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
