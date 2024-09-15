import React, { useState, useEffect, useContext } from "react";
import { BiSolidMoon, BiMoon } from "react-icons/bi";
import { HashLink } from "react-router-hash-link";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { navIn, textVariant } from "../utils/motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { ThemeContext } from "../context/themeContext";
const Navbar = () => {
  const [active, setActive] = useState("Contact");
  const [Toggle, setToggle] = useState(false);
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <motion.nav
      className={`${
        styles.paddingX
      } w-screen flex items-center py-5 fixed top-0 z-20 border-b-4 ${
        theme == "dark" ? "bg-primary_200" : "glassBg"
      }`}
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
          <p
            className={` ${
              theme === "dark" ? "text-white" : "text-primary"
            } text-[18px] min-w-[180px] font-bold cursor-pointer flex sm:flex-col`}
          >
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
                  to={link.id !== "contact" ? `/#${link.id}` : `#${link.id}`}
                  className={` ${
                    theme === "dark" ? "text-white" : "text-primary"
                  } ${
                    active === link.title
                      ? " border-b-4 border-b-primary bg-[#915eff rounded px-[10px] pb-[5px]"
                      : "border-b-transparent border-b-2"
                  } hover:-text-white hover:border-b-primary text-[18px] ${
                    link.title === "Contact"
                      ? "text-white   bg-primary rounded-full text-[25px] px-[10px] text-center"
                      : ""
                  } font-medium cursor-pointer text-center transition-all`}
                >
                  {link.title}
                </HashLink>
              </motion.li>
            );
          })}
          <BiSolidMoon
            fontSize="2em"
            color={theme == "dark" ? "#ffffff" : `#000000`}
            onClick={toggleTheme}
          />
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
            } flex-col justify-between h-[50vh] w-[40vw]  items-center py-6 px-4 absolute top-20 right-0  z-10 rounded-xl  ${
              theme === "dark" ? "bg-primary_200" : "glassBg2"
            } transition-none `}
          >
            {navLinks.map((link, index) => {
              return (
                <motion.li
                  key={link.id}
                  className={` ${
                    theme === "dark" ? "text-white" : "text-primary"
                  } self-start sm:self-center  ${
                    link.id == "contact" ? " rounded-full" : ""
                  }`}
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
                    className={` ${
                    theme === "dark" ? "text-white" : "text-primary"
                  } ${
                      active === link.title
                        ? " border-b-4 border-b-primary bg-[#915eff rounded  pb-[5px]"
                        : " border-b-transparent border-b-2"
                    } hover:-text-white hover:border-b-primary text-[18px] ${
                      link.title === "Contact"
                        ? "text-white   bg-primary rounded-full text-[25px] px-[10px] "
                        : ""
                    } font-medium cursor-pointer text-left transition-all`}
                  >
                    {link.title}
                  </HashLink>
                </motion.li>
              );
            })}
            <BiSolidMoon
              fontSize="2em"
              color={theme == "dark" ? "#ffffff" : `#000000`}
              onClick={toggleTheme}
            />
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
