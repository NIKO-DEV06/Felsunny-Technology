"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import businessSvg from "../images/business.svg";

const HomeSection = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };
  const itemsVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const letters = Array.from("Streamline your business with our services");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.035, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,

      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 25,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  return (
    <div className="">
      <motion.div
        ref={ref1}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        variants={heroVariants}
        className="lg:flex w-full gap-[10rem] xl:gap-[18rem]"
      >
        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className="uppercase text-[1.8rem] md:text-[2.5rem] lg:text-[2.5rem] xl:text-[3.5rem] leading-[3.5rem]  md:leading-[4rem] lg:leading-[5rem] xl:leading-[7rem] pt-[10rem] font-[800] md:font-[700] md:text-center text-left px-6 lg:text-left lg:w-[60%] lg:translate-y-[-2rem]"
        >
          {letters.map((letter, index) => (
            <motion.span variants={child} key={index}>
              {/* {letter === " " ? "\u00A0" : letter} */}
              {letter}
            </motion.span>
          ))}
        </motion.h1>
        <motion.div
          animate={{ y: [-10, 10] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Image
            src={businessSvg}
            alt="Home page SVG"
            width={250}
            height={250}
            className="mx-auto lg:mx-0 mt-[1rem] lg:scale-[1.5] lg:translate-y-[95%] lg:translate-x-[-5rem]"
            priority
          />
        </motion.div>
      </motion.div>
      <motion.div
        ref={ref2}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        variants={heroVariants}
        className="mt-[2rem] text-black bg-white mx-[1.5rem] lg:mt-[5rem] rounded-[1rem]"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
          className="pb-[5rem] md:text-[1.2rem] xl:px-[8rem] lg:px-[5rem]"
        >
          <motion.p
            variants={itemsVariants}
            className=" ml-5 pt-[3rem] lg:text-[0.9rem] font-semibold lg:font-normal"
          >
            ------- WHAT WE DO
          </motion.p>
          <motion.p
            variants={itemsVariants}
            className="pt-[1.5rem] px-5 lg:text-[1.5rem] xl:text-[1.8rem]"
          >
            We provide business solutions, including sales and distribution,
            government supplies, construction, consultancy services, and
            property sales. Contact us today to learn more.
          </motion.p>
          <motion.div
            variants={itemsVariants}
            className="text-white bg-black mx-auto text-center w-[8.5rem] py-3 rounded-md mt-[2rem] cursor-pointer lg:mx-0 lg:ml-[1.2rem] hover:bg-[#b3bdc2] hover:text-black duration-200 md:text-[0.95rem]"
          >
            <Link href={"/about"}>LEARN MORE</Link>
          </motion.div>
          <motion.div />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomeSection;
