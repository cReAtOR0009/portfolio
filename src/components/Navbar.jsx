import React, { useState, useEffect, useContext } from "react";
import { BiSolidMoon, BiMoon } from "react-icons/bi";
import { FiMenu, FiX } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { navIn, textVariant } from "../utils/motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { ThemeContext } from "../context/themeContext";
const Navbar = () => {
  const [active, setActive] = useState("");
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
          className="flex items-center justify-center gap-2"
          onClick={() => {
            setActive("Contact");
            window.scrollTo(0, 0);
          }}
        >
          {/* <img src={logo} alt="logo" className="w-9 h-9 object-contain" /> */}
          <h3 className={`${styles.logo} whitespace-nowrap text-primary`}>
            {" "}
            &lt;Creator/&gt;
          </h3>
          <p
            className={` ${
              theme === "dark" ? "text-white" : "text-primary"
            } sm:flex hidden text-[18px] min-w-[180px] font-bold cursor-pointer sm:flex-col`}
          >
            {/* &lt;Creator/&gt; */}
            &nbsp;
            {/* <span className="sm:block hidden"> | #WebManiac</span> */}
          </p>
        </Link>
        <ul className="list-none hidden lg:flex items-center gap-6">
          {navLinks.map((link, index) => {
            const isContact = link.id === "contact";
            const isActive = active === link.title;

            return (
              <motion.li
                key={link.id}
                className={`transition-all duration-300 cursor-pointer
          ${
            isActive
              ? "border-b-4 border-b-primary pr-2 rounded"
              : "border-b-4 border-transparent"
          }
          ${isContact ? "py-2- rounded-full" : ""}
        `}
                variants={navIn("right", "spring", index, isContact ? 1.5 : 2)}
                initial={isContact ? "hidden2" : "hidden"}
                animate={isContact ? "show2" : "show"}
                onClick={() => setActive(link.title)}
              >
                <HashLink
                  to={isContact ? `#${link.id}` : `/#${link.id}`}
                  className={`whitespace-nowrap text-[18px] font-medium text-center transition-all
            ${
              isContact
                ? "text-white bg-primary rounded-full px-4 py-1 text-[20px]"
                : theme === "dark"
                ? "text-white hover:text-primary"
                : "text-primary"
            }
          `}
                >
                  {link.title}
                </HashLink>
              </motion.li>
            );
          })}

          {/* Theme toggle icon */}
          <li className="ml-4 cursor-pointer">
            <BiSolidMoon
              size={24}
              color={theme === "dark" ? "#ffffff" : "#000000"}
              onClick={toggleTheme}
              title="Toggle Theme"
            />
          </li>
        </ul>

        <div className="lg:hidden flex flex-1 justify-end items-center">
          {Toggle ? (
            <FiX
              className="w-[28px] h-[28px] cursor-pointer text-primary"
              onClick={() => setToggle(!Toggle)}
            />
          ) : (
            <FiMenu
              className="w-[28px] h-[28px] cursor-pointer text-primary"
              onClick={() => setToggle(!Toggle)}
            />
          )}

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
                  className={`${
                    theme === "dark" ? "text-white" : "text-primary"
                  }  ${
                    active === link.title
                      ? "border-b-4 border-b-primary  rounded "
                      : "border-b-transparent border-b-0"
                  } self-start sm:self-center ${
                    link.id === "contact" ? "rounded-full px-4  bg-primary" : ""
                  }`}
                  variants={navIn(
                    "right",
                    "spring",
                    index,
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
                      theme === "dark"
                        ? "text-white hover:text-primary"
                        : "text-primary"
                    }  hover:border-b-primary hover:border-b-4 text-[18px] ${
                      link.title === "Contact" ? "text-white" : ""
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
