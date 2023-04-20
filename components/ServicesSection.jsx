"use client";

import { Fragment } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import dis from "../images/dis.webp";
import construction from "../images/construction.jpeg";
import gs from "../images/gs.jpeg";
import consult from "../images/con.jpg";
import ps from "../images/ps.jpg";
import devices from "../images/devices.jpg";

import arrow from "../images/arrowWhite.svg";

const services = [
  {
    id: "s1",
    title: " ---- Sales & Distribution ----",
    image: dis,
    desc: "Boost Your Sales and Expand Your Reach with Our Efficient Distribution Solutions.",
  },
  {
    id: "s2",
    title: " ---- Government Supplies ----",
    image: gs,
    desc: "Delivering quality products and services to meet the needs of our nation's leaders.",
  },
  {
    id: "s3",
    title: " ---- Construction ----",
    image: construction,
    desc: "Building your vision with quality craftsmanship and attention to detail.",
  },
  {
    id: "s4",
    title: " ---- Property Sales ----",
    image: ps,
    desc: "Find your dream home with our comprehensive property listings and personalized service.",
  },
  {
    id: "s5",
    title: " ---- Gadgets & Devices ----",
    image: devices,
    desc: " Elevate your digital experience with our top-of-the-line devices and gadgets.",
  },
  {
    id: "s6",
    title: " ---- Consultancy Services ----",
    image: consult,
    desc: " Unlocking your company's potential with expert guidance and innovative solutions.",
  },
];

const ServicesSection = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <Fragment>
      <div className=" translate-y-[-5rem] pt-[5rem] pb-[7rem]">
        <motion.p
          ref={ref1}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={variants}
          className="text-center lg:pt-[10rem] pt-[5rem] uppercase tracking-widest"
        >
          ~services~
        </motion.p>
        <motion.h1
          ref={ref2}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          variants={variants}
          className="text-center text-[1.5rem] px-[4rem] font-bold mt-[1rem] lg:text-[2rem] lg:w-[30rem] lg:mx-auto lg:pb-[2rem] xl:text-[2.5rem] xl:w-[35rem]"
        >
          What you can expect from us
        </motion.h1>

        <motion.div
          ref={ref3}
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.2 }}
          className="flex flex-col md:flex-row md:justify-center md:flex-wrap gap-[2rem] lg:gap-[3rem] xl:gap-[4rem] items-center mt-[1.2rem] "
        >
          {services.map((service) => (
            <motion.div
              variants={variants}
              key={service.id}
              className="relative p-2 lg:p-0 rounded-[1rem]"
            >
              <h1 className=" z-10 font-[500] text-[1.1rem] p-2 bg[#1e1e1e] rounded-md lg:text-[1.2rem] lg:font-[400]">
                {service.title}
              </h1>

              <div className="relative group cursor-pointer">
                <p className="absolute p-2 bg-[#1e1e1e] text-white rounded-md bottom-0 group-hover:bottom-[1rem] left-1/2 transform -translate-x-1/2 w-[90%] text-[0.91rem] z-40 duration-200 opacity-0 group-hover:opacity-100 xl:text-[1.1rem]">
                  {service.desc}
                </p>
                <div className="absolute group-hover:opacity-[0.75] bg-[#223434] opacity-0 inset-0 z-30 rounded-[1rem] duration-200 "></div>
                <p className="z-40 flex uppercase absolute left-1/2 transform -translate-x-1/2 top-[40%] text-[1.2rem] tracking-wider text-white opacity-0 group-hover:opacity-100 duration-200">
                  see more{" "}
                  <span className="">
                    <Image
                      alt="arrow"
                      src={arrow}
                      width={20}
                      height={20}
                      className="translate-y-1 "
                    />
                  </span>
                </p>

                <Image
                  alt={service.title}
                  src={service.image}
                  width={300}
                  height={300}
                  className="relative h-[17rem] lg:h-[20rem] lg:w-[25rem] xl:h-[23rem] xl:w-[28rem] rounded-[1rem] duration-200 shadow-input-shadow"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Fragment>
  );
};

export default ServicesSection;
