import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

import cancel from "../images/cancel.svg";

const MobileNav = ({ onToggle }) => {
  return (
    <Fragment>
      <div className="z-50 fixed md:hidden">
        <Image
          onClick={onToggle}
          src={cancel}
          alt="cancel-svg"
          width={40}
          height={40}
          className="fixed right-[2rem] top-[1.5rem] z-50 cursor-pointer"
        />
        <div className="fixed top-0 bottom-0 right-0 left-[30%] bg-[#0000007F] backdrop-blur-[2rem] flex flex-col gap-[2.5rem] md:font-[300] uppercase tracking-wider text-[0.95rem] py-[10rem] px-[2rem] text-white">
          <Link className="flex gap-[0.5rem] cursor-pointer" href={"/"}>
            <span className="font-bold">00</span> Home
          </Link>
          <Link className="flex gap-[0.5rem] cursor-pointer" href={"/about"}>
            <span className="font-bold">01</span> About
          </Link>
          <Link className="flex gap-[0.5rem] cursor-pointer" href={"/services"}>
            <span className="font-bold">02</span> Services
          </Link>
          <Link className="flex gap-[0.5rem] cursor-pointer" href={"/contact"}>
            <span className="font-bold">03</span> Contact
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default MobileNav;
