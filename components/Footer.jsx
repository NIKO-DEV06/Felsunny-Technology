"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logo from "../images/logoWhite.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import facebook from "../images/facebook.svg";
import linkedin from "../images/linkedin.svg";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="bg-[#1c1b1d] text-white pb-[2rem]">
      <aside
        className={`text-black bg-white mx-[1rem] md:mx-[5rem] lg:mx-[9rem] xl:mx-[10rem] lg:py-[3rem] rounded-[1rem] -translate-y-[40%] ${
          pathname === "/contact" ? "hidden" : ""
        }`}
      >
        <div className="pb-[2rem] lg:flex lg:justify-center lg:gap-[5rem]">
          <div className="text-center">
            <h1 className="font-bold text-[1.5rem] mx-[1rem] pt-[3rem] pb-[1rem] lg:w-[25rem] lg:text-left lg:text-[1.7rem]">
              Empowering Your Business with Innovative Solutions
            </h1>
            <p className="mx-[1rem] mt-[1rem] lg:mt-0 md:mx-auto md:w-[30rem] lg:text-left lg:w-[25rem]">
              Transform your business with our expertise. Contact us today and
              let us help you achieve your goals.
            </p>
          </div>
          <Link href={"/contact"}>
            <div className="text-white bg-black mx-auto text-center w-[8.5rem] py-3 rounded-md mt-[2rem] cursor-pointer lg:mx-0 lg:ml-[1.2rem] hover:bg-[#b3bdc2] hover:text-black duration-200 md:text-[0.95rem] mb-[1rem] lg:mb-[10rem] lg:translate-y-[5rem] lg:items-center lg:scale-[1.1]">
              GET IN TOUCH
            </div>
          </Link>
        </div>
      </aside>
      <div
        className={`${
          pathname === "/contact"
            ? "translate-y-[-2.5rem] lg:translate-y-[-2.5rem] pt-[3rem] lg:pt-[7rem]"
            : "translate-y-[-8rem] md:translate-y-[-5rem]"
        }  lg:flex lg:flex-col lg:items-center`}
      >
        <div className="lg:flex lg:gap-[23rem] xl:gap-[32rem]">
          <Image
            className="h-[5rem] w-[17rem] object-left object-cover mx-auto lg:translate-x-[-3rem] lg:scale-[1.2]"
            src={logo}
            alt="Felsunny Logo"
            width={270}
            height={270}
            priority
          />
          <hr className="lg:hidden border-[#6b686e] w-[85%] mx-auto py-[1rem] mt-[1rem]" />
          <div className="flex flex-col lg:flex-row gap-[1.2rem] lg:gap-[1.5rem] items-center font-[400] uppercase tracking-widest text-[0.95rem]">
            <Link className="hover:opacity-50 duration-300" href={"/about"}>
              About
            </Link>
            <Link className="hover:opacity-50 duration-300" href={"/services"}>
              Services
            </Link>
            <Link className="hover:opacity-50 duration-300" href={"/contact"}>
              Contact
            </Link>
          </div>
        </div>
        <hr className="lg:border-[#6b686e] lg:w-[82%] lg:mx-auto lg:py-[1rem] lg:mt-[1rem] hidden lg:flex" />
        <div className="lg:flex lg:gap-[23rem] xl:gap-[32rem]">
          <div className="py-[2rem] mx-auto flex flex-col gap-[1rem] items-center lg:items-start text-[0.95rem] opacity-60">
            <p className="font-[600] text-[1.1rem]">
              Contact Us (Central Office)
            </p>
            <p>Phone: +234 8035 6168 05</p>
            <p>Mail: felixsunday@yahoo.com</p>
          </div>
          <div className="lg:translate-y-[3rem]">
            <div className="flex justify-center lg:justify-end gap-[1.5rem]">
              <Link href={"https://mobile.twitter.com/felsunny"}>
                <Image
                  alt="twitter"
                  src={twitter}
                  width={25}
                  height={25}
                  className="hover:opacity-60 duration-300 hover:scale-[1.2]"
                />
              </Link>
              <Link href={"/"}>
                <Image
                  alt="linkedin"
                  src={linkedin}
                  width={25}
                  height={25}
                  className="hover:opacity-60 duration-300 hover:scale-[1.2]"
                />
              </Link>
              <Link href={"/"}>
                <Image
                  alt="facebook"
                  src={facebook}
                  width={25}
                  height={25}
                  className="hover:opacity-60 duration-300 hover:scale-[1.2]"
                />
              </Link>
              <Link href={"/"}>
                <Image
                  alt="instagram"
                  src={instagram}
                  width={25}
                  height={25}
                  className="hover:opacity-60 duration-300 hover:scale-[1.2]"
                />
              </Link>
            </div>
            <p className="text-center translate-y-[2rem] text-[0.9rem]">
              © 2023 Felsunny Technology. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
