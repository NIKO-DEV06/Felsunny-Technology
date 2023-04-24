"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import services from "../images/services.jpg";
import right from "../images/right.svg";

const Services = () => {
  const servicesOffered = [
    { title: "Sales & Ditribution", url: "/services/sales" },
    { title: "Government Supplies", url: "/services/supplies" },
    { title: "Construction & Interior", url: "/services/construction" },
    { title: "Property Sales", url: "/services/property" },
    { title: "Gadgets & Devices", url: "/services/devices" },
    { title: "Consultancy Services", url: "/services/consultancy" },
  ];

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const servicesVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <main className="pt-[4rem] md:pt-[9rem] pb-[13rem] bg-[#dfe8ec]">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        className="md:flex md:flex-row-reverse md:justify-between gap-[2rem]"
      >
        <div className="md:grid place-items-center">
          <Image
            src={services}
            alt="services"
            width={300}
            heght={300}
            className="mx-auto w-full md:w-auto h-[15rem] md:translate-x-[-5rem] lg:translate-x-[-7rem] xl:translate-x-[-10rem] lg:scale-[1.2] xl:scale-[1.4]"
            priority
          />
        </div>
        <div className="mx-[1rem] md:mx-[5rem] md:mr-[5rem] md:flx md:justiy-between md:gap-2rem] md:mt[3rem] md:w-[40%]">
          <div className="">
            <p className="uppercase mt-[2rem] mb-[0.5rem] tracking-wide text-[1.1rem] md:text-[1.4rem]">
              our service
            </p>
            <h1 className="font-bold text-[2rem] md:text-[2.5rem] lg:text-[3rem] md:tracking-wide tracking-wider lg:tracking-wider">
              What Services <br />
              {"We're"} Offering
            </h1>
          </div>
          <div className="md:grid md:place-items-center">
            <p className="mt-[0.5rem] md:text-[1.1rem] lg:text-[1.4rem] md:leading-[2rem]">
              We provide business solutions, including sales and distribution,
              government supplies, construction, consultancy services, and
              property sales. Contact us today to learn more.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.3 }}
      >
        {servicesOffered.map(({ title, url }) => (
          <motion.div
            variants={servicesVariants}
            key={title}
            className="flex flex-col gap-[0.7rem] mt-[1.5rem] md:mt-[3.5rem] group"
          >
            <Link href={url}>
              <div className="flex justify-between mx-[1.5rem] md:mx-[5.5rem] cursor-pointer">
                <p className="text-[1.55rem] md:text-[2.2rem] md:font-[500] opacity-60 group-hover:opacity-100 group-hover:scale-[1.1] md:group-hover:scale-[1.2] duration-300 md:group-hover:translate-y-[-1rem] group-hover:translate-y-[-0.3rem] lg:group-hover:translate-x-[7rem]">
                  {title}
                </p>
                <div>
                  <Image
                    src={right}
                    alt="right"
                    width={35}
                    heght={35}
                    className="group-hover:rotate-[-45deg] duration-300 cursor-pointer md:scale-[1.3]"
                  />
                </div>
              </div>
            </Link>
            <hr className="border-black mx-[1.5rem] md:mx-[5.5rem]" />
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
};

export default Services;
