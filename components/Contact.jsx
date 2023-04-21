"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import down from "../images/down.svg";
import send from "../images/send.svg";

const Contact = () => {
  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
  };
  return (
    <main className="pt-[7.5rem] pb-[7rem] bg-[#dfe8ec]">
      <form
        onSubmit={submitFormHandler}
        className="pt-[1.5rem] flex flex-col items-center justify-start"
      >
        <div className="flex flex-col gap-[1rem] lg:gap-[1.5rem]">
          <div className="flex flex-col items-center md:items-start">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={variants}
              className="text-[1.7rem] lg:text-[2.3rem] lg:w-[25rem] text-center md:text-left md:mx-0 mx-auto w-[20rem] font-semibold md:font-[500] mb-[1rem]"
            >
              Love to hear from you, Get in touch{" "}
              <span className="animate-pulse">👋</span>
            </motion.h1>
          </div>

          <div className="flex flex-col md:flex-row gap-[1rem] items-start">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              className="flex flex-col gap-[0.4rem]"
            >
              <p className="font-[500] tracking-wider lg:text-[1.1rem]">
                Your Name
              </p>
              <input
                placeholder="e.g. John Doe"
                type="text"
                name="name"
                autoComplete="off"
                className="inputs"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              className="flex flex-col gap-[0.4rem]"
            >
              <p className="font-[500] tracking-wider lg:text-[1.1rem]">
                Your Email
              </p>
              <input
                placeholder="e.g. johndoe@gmail.com"
                type="text"
                name="email"
                autoComplete="off"
                className="inputs"
              />
            </motion.div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              className="relative flex flex-col gap-[0.4rem]"
            >
              <Image
                src={down}
                width={15}
                height={15}
                alt="downSvg"
                className="absolute right-[1.5rem] translate-y-[2.7rem] lg:translate-y-[3rem]"
              />
              <p className="font-[500] tracking-wider lg:text-[1.1rem]">
                Select Service
              </p>
              <select
                id="dropdown"
                name="services"
                className="select cursor-pointer bg-white text-[0.95rem] lg:text-[1rem] font-[500] text-[#656161]"
              >
                <option value="sales">Sales & Distribution</option>
                <option value="supplies">Government Supplies</option>
                <option value="construction">Construction</option>
                <option value="property">Property Sales</option>
                <option value="devices">Gadgets & Devices</option>
                <option value="consultancy">Consultancy Services</option>
              </select>
            </motion.div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              className="flex flex-col gap-[0.4rem]"
            >
              <p className="font-[500] tracking-wider lg:text-[1.1rem]">
                Message
              </p>
              <textarea
                name="message"
                cols="30"
                rows="10"
                autoComplete="off"
                placeholder="Let us know what your project is about"
                className="outline-none border-[1px] focus:border-black h-[11rem] w-[21rem] md:w-[43rem] lg:w-[55rem] rounded-none appearance-none resize-none px-4 py-3 text-[0.95rem] lg:text-[1rem] "
              />
            </motion.div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0 }}
              variants={variants}
              className="group flex justify-center items-center gap-[0.5rem] bg-black text-white w-[21rem] lg:w-[27rem] p-[0.65rem] mt-[1rem] tracking-widest md:hover:bg-[#b3bdc2] md:hover:text-black duration-200 "
            >
              SEND
              <Image
                src={send}
                width={20}
                height={20}
                alt="arrowSvg"
                className=" group-hover:invert"
              />
            </motion.button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Contact;
