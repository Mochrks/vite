import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, navVariants } from "../utils/motion.js";

import { close, menu, btnWallet } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="w-full flex py-6 justify-between items-center navbar"
    >
      <motion.p
        variants={fadeIn("up", "tween", 0.5, 0.9)}
        initial="hidden"
        animate="show"
        className="font-poppins font-semibold ss:text-[21px] text-[22px] text-white ss:leading-[100.8px] leading-[35px] z-[999]"
      >
        Mochrks
      </motion.p>

      {/* menu nav */}
      <ul className="list-none sm:flex  hidden justify-center items-center ml-20  flex-1  z-[5]">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className=" flex-row-reverse justify-end items-center  z-[5]">
        <img
          src={btnWallet}
          alt="btnWallet"
          className="sm:ml-10 ml-5 object-contain relative cursor-pointer"
        />
      </div>

      {/* toogle menu bar */}
      <div className="sm:hidden flex flex-1 justify-end items-center  z-[5]">
        {/* image bar menu */}
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        {/*toogle menu bar in mobile */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-blue-gradient absolute top-20 right-0 mx-4 my-2 min-w-[160px] rounded-xl sidebar z-[5]`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[20px] ${
                  active === nav.title ? "text-black" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-10" : "mb-6"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
