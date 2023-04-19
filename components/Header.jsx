"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import logo from "../images/logo.svg";
import menu from "../images/menu.svg";
import arrow from "../images/arrow.svg";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Header = () => {
  const pathname = usePathname();
  const [isNav, setIsNav] = useState(false);
  const openNav = () => {
    setIsNav(true);
  };
  const closeNav = () => {
    setIsNav(false);
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };
  return (
    <Fragment>
      <header className="fixed w-full border-b-[0.5px] border-[#9a979c] h-[5rem] md:h-[6rem] shadowheader-shadow bg-[#dfe8ec] z-20">
        <div className="flex justify-between items-center h-full px-6 md:px-[5rem]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={linkVariants}
          >
            <Link href={"/"}>
              <Image
                className="translate-x-[-3rem]"
                src={logo}
                alt="Felsunny Logo"
                width={270}
                height={270}
                priority
              />
            </Link>
          </motion.div>
          <div>
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.2 }}
              className="hidden md:flex md:flex-row gap-[2.5rem] md:items-center md:font-[300] uppercase tracking-wider text-[0.95rem]"
            >
              <motion.div variants={linkVariants} className="listnone">
                <Link
                  className={`link-with-underline ${
                    pathname === "/" ? "active-link" : ""
                  }`}
                  href={"/"}
                >
                  Home
                </Link>
              </motion.div>
              <motion.div variants={linkVariants}>
                <Link
                  className={`link-with-underline ${
                    pathname === "/about" ? "active-link" : ""
                  }`}
                  href={"/about"}
                >
                  About
                </Link>
              </motion.div>

              <motion.div variants={linkVariants}>
                <Link
                  className={`link-with-underline ${
                    pathname === "/services" ? "active-link" : ""
                  }`}
                  href={"/services"}
                >
                  Services
                </Link>
              </motion.div>

              <motion.div variants={linkVariants}>
                <Link href={"/contact"}>
                  <div className="bg-black text-white py-3 w-[9rem] flex gap-3 items-center justify-center rounded-full cursor-pointer group">
                    Contact
                    <Image
                      alt="arrow"
                      className={` ${
                        pathname === "/contact" ? "rotate-[135deg]" : ""
                      } bg-white rounded-full p-[4px] group-hover:rotate-45 duration-300`}
                      src={arrow}
                      width={23}
                      height={20}
                    />
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={linkVariants}
            onClick={openNav}
            className="md:hidden flex items-center"
          >
            <Image src={menu} alt="Menu" width={35} height={35} />
          </motion.div>
        </div>
      </header>
      {isNav && <MobileNav onClose={closeNav} />}
    </Fragment>
  );
};

export default Header;
