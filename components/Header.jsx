import Image from "next/image";
import logo from "../images/logo.svg";
import menu from "../images/menu.svg";
import arrow from "../images/arrow.svg";

import Link from "next/link";

const Header = () => {
  return (
    <header className=" fixed w-full border-b-[2px] h-[5rem] md:h-[6rem] shadow-heade-shadow bg-white">
      <div className="flex justify-between items-center h-full px-6 md:px-[5rem]">
        <div>
          <Image
            className="translate-x-[-3rem]"
            src={logo}
            alt="Felsunny Logo"
            width={270}
            height={270}
          />
        </div>
        <div>
          <div className="hidden md:flex gap-[2.5rem] items-center font-[300] uppercase tracking-wider">
            <Link className="link-with-underline" href={"/"}>
              Home
              <div className="absolute duration-200 bottom-[-8px]"></div>
            </Link>
            <Link className="link-with-underline" href={"/"}>
              About
            </Link>
            <Link className="link-with-underline" href={"/"}>
              Services
            </Link>
            <Link href={"/"}>
              <div className="bg-black text-white py-3 px-6 flex gap-3 rounded-full cursor-pointer">
                Contact
                <Image
                  className="bg-white rounded-full p-[2px]"
                  src={arrow}
                  width={23}
                  height={20}
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <Image src={menu} alt="Menu" width={35} height={35} />
        </div>
      </div>
    </header>
  );
};

export default Header;
