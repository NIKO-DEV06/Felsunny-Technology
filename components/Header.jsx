"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../images/logo.svg";
import menu from "../images/menu.svg";
import arrow from "../images/arrow.svg";
import cancel from "../images/cancel.svg";

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const navVariants = {
    hidden: {
      x: "100%",
    },
    visible: {
      x: "0%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        type: "spring",
        damping: 25,
        stiffness: 400,
      },
    },
    exit: {
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };
  return (
    <Fragment>
      <motion.header
        initial="hidden"
        animate="visible"
        variants={linkVariants}
        className="fixed w-full border-b-[0.5px] border-[#9a979c] h-[5rem] md:h-[6rem] shadowheader-shadow bg-[#dfe8ec] z-20"
      >
        <div className="flex justify-between items-center h-full px-6 md:px-[5rem]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={linkVariants}
          >
            <Link href={"/"}>
              <Image
                className="translate-x-[-3rem] h-[5rem] md:h-[6rem] object-cover"
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
              <motion.div variants={linkVariants}>
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
      </motion.header>
      <AnimatePresence initial={true} mode="wait">
        {isNav && (
          <Fragment>
            <motion.div
              key={Math.random()}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={navVariants}
              className="fixed md:hidden top-0 bottom-0 right-0 z-50 left-[30%] bg-[#0000007F] backdrop-blur-[2rem] flex flex-col gap-[2.5rem] md:font-[300] uppercase tracking-wider text-[0.95rem] py-[10rem] px-[2rem] text-white"
            >
              <Image
                onClick={closeNav}
                src={cancel}
                alt="cancel-svg"
                width={40}
                height={40}
                className="fixed right-[1.5rem] top-[1.5rem] z-50 z cursor-pointer"
              />
              <Link
                onClick={closeNav}
                className="flex gap-[0.5rem] cursor-pointer"
                href={"/"}
              >
                <span className="font-bold">00</span> Home
              </Link>
              <Link
                onClick={closeNav}
                className="flex gap-[0.5rem] cursor-pointer"
                href={"/about"}
              >
                <span className="font-bold">01</span> About
              </Link>
              <Link
                onClick={closeNav}
                className="flex gap-[0.5rem] cursor-pointer"
                href={"/services"}
              >
                <span className="font-bold">02</span> Services
              </Link>
              <Link
                onClick={closeNav}
                className="flex gap-[0.5rem] cursor-pointer"
                href={"/contact"}
              >
                <span className="font-bold">03</span> Contact
              </Link>
            </motion.div>
            <motion.div
              key="backdrop"
              className="fixed md:hidden bg-black inset-0 z-[49] opacity-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={closeNav}
            ></motion.div>
          </Fragment>
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export default Header;
