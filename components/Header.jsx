"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import logo from "../images/logo.svg";
import menu from "../images/menu.svg";
import arrow from "../images/arrow.svg";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isNav, setIsNav] = useState(false);
  const openNav = () => {
    setIsNav(true);
  };
  const closeNav = () => {
    setIsNav(false);
  };
  return (
    <Fragment>
      <header className="fixed w-full border-b[2px] h-[5rem] md:h-[6rem] shadow-header-shadow bg-[#dfe8ec] z-20">
        <div className="flex justify-between items-center h-full px-6 md:px-[5rem]">
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
          <div>
            <div className="hidden md:flex md:flex-row gap-[2.5rem] md:items-center md:font-[300] uppercase tracking-wider text-[0.95rem]">
              <Link className="link-with-underline" href={"/"}>
                Home
              </Link>
              <Link className="link-with-underline" href={"/about"}>
                About
              </Link>
              <Link className="link-with-underline" href={"/services"}>
                Services
              </Link>
              <Link href={"/contact"}>
                <div className="bg-black text-white py-3 px-6 flex gap-3 rounded-full cursor-pointer group">
                  Contact
                  <Image
                    alt="arrow"
                    className="bg-white rounded-full p-[4px] group-hover:rotate-45 duration-300"
                    src={arrow}
                    width={23}
                    height={20}
                  />
                </div>
              </Link>
            </div>
          </div>
          <div onClick={openNav} className="md:hidden flex items-center">
            <Image src={menu} alt="Menu" width={35} height={35} />
          </div>
        </div>
      </header>
      {isNav && <MobileNav onClose={closeNav} />}
    </Fragment>
  );
};

export default Header;
