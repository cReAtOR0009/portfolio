import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
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
          <p className=" text-white text-[18px] min-w-[180px] font-bold cursor-pointer flex sm:flex-col">
            _Creator's &nbsp;
            <span className="sm:block hidden"> | #WebManiac</span>
          </p>
        </Link>
        <ul className="list-none hidden lg:flex justify-between items-center flex-row lg:gap-10">
          {navLinks.map((link, index) => {
            return (
              <motion.li
                key={link.id}
                className={link.id == "contact" ? "py-[10px rounded-full " : ""}
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
                <HashLink
                  to={`/#${link.id}`}
                  className={`${
                    active === link.title
                      ? "text-white border-b-4 border-b-[#915eff] bg-[#915eff rounded px-[10px] pb-[5px]"
                      : "text-secondary border-b-transparent border-b-2"
                  } hover:-text-white hover:border-b-[#915eff] text-[18px] ${
                    link.title === "Contact"
                      ? "text-white   bg-[#915eff] rounded-full text-[25px] px-[10px] text-center"
                      : ""
                  } font-medium cursor-pointer text-center transition-all`}
                >
                  {link.title}
                </HashLink>
              </motion.li>
            );
          })}
        </ul>
        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={Toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!Toggle)}
          />

          <ul
            className={`${
              !Toggle ? "hidden" : "flex"
            } flex-col justify-between h-[50vh] w-[40vw]  items-center py-6 px-4 absolute top-20 right-0  z-10 rounded-xl  bg-[#5b4785] transition-none `}
          >
            {navLinks.map((link, index) => {
              return (
                <motion.li
                  key={link.id}
                  className={
                    `self-center content-start text-left ${link.id == "contact" ? " rounded-full text-white" : ""}`
                  }
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
                    setToggle(!Toggle);
                  }}
                >
                  <HashLink
                    to={`/#${link.id}`}
                    className={`${
                      active === link.title
                        ? "text-white border-b-4 border-b-[#915eff] bg-[#915eff rounded px-[10px] pb-[5px]"
                        : "text-secondary border-b-transparent border-b-2"
                    } hover:-text-white hover:border-b-[#915eff] text-[18px] ${
                      link.title === "Contact"
                        ? "text-white   bg-[#915eff] rounded-full text-[25px] px-[10px] "
                        : ""
                    } font-medium cursor-pointer text-center transition-all`}
                  >
                    {link.title}
                  </HashLink>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
