"use client";

import Image from "next/image";

import down from "../images/down.svg";
import arrow from "../images/arrowWhite.svg";

const Contact = () => {
  return (
    <main className="pt-[8rem] pb-[15rem] bg-[#dfe8ec]">
      <p className="text-center tracking-wider uppercase text-[0.9rem] pb-[1rem]">
        contact
      </p>
      <h1 className="text-[1.7rem] text-center mx-auto w-[20rem] font-semibold">
        Love to hear from you, Get in touch 👋
      </h1>
      <form className="pt-[1.5rem]">
        <div className="flex flex-col gap-[1rem] ">
          <div className="flex flex-col gap-[1rem] items-center">
            <div className="flex flex-col gap-[0.4rem]">
              <p className="font-[500] tracking-wider">Your Name</p>
              <input
                placeholder="e.g. John Doe"
                type="text"
                name="name"
                autoComplete="off"
                className="inputs"
              />
            </div>
            <div className="flex flex-col gap-[0.4rem]">
              <p className="font-[500] tracking-wider">Your Email</p>
              <input
                placeholder="e.g. johndoe@gmail.com"
                type="text"
                name="email"
                autoComplete="off"
                className="inputs"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative flex flex-col gap-[0.4rem]">
              <Image
                src={down}
                width={15}
                height={15}
                alt="downSvg"
                className="absolute right-[1.5rem] translate-y-[2.7rem]"
              />

              <p className="font-[500] tracking-wider">Select Service</p>
              <select
                id="dropdown"
                name="services"
                className="select bg-white text-[0.95rem] font-[500] text-[#656161]"
              >
                <option value="sales">Sales & Distribution</option>
                <option value="supplies">Government Supplies</option>
                <option value="construction">Construction</option>
                <option value="property">Property Sales</option>
                <option value="devices">Gadgets & Devices</option>
                <option value="consultancy">Consultancy Services</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-col gap-[0.4rem]">
              <p className="font-[500] tracking-wider">Message</p>
              <textarea
                name="message"
                cols="30"
                rows="10"
                autoComplete="off"
                placeholder="Let us know what your project is about"
                className="outline-none border-[1px] focus:border-black h-[11rem] w-[21rem] rounded-none appearance-none resize-none px-4 py-3 text-[0.95rem] "
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-black text-white w-[21rem] p-[0.65rem] mt-[1rem] tracking-widest">
            SEND
            {/* <span className="absolute top-1/4 left-[60%]">
              <Image src={arrow} width={20} height={20} alt="arrowSvg" />
            </span> */}
          </button>
        </div>
      </form>
    </main>
  );
};

export default Contact;
