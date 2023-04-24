"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

import about from "../images/aboutus.jpg";
import ceo from "../images/ceo.jpg";

const About = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };
  const factVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };
  return (
    <main className="pt-[2rem] md:pt-[9rem] pb-[13rem] bg-[#dfe8ec]">
      <div className="">
        <motion.div initial="hidden" animate="visible" variants={variants}>
          <Image
            src={about}
            alt="about"
            width={300}
            heght={300}
            className="mx-auto w-full md:w-[30rem]"
            loading="lazy"
          />
        </motion.div>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={variants}
          className="text-[2rem] lg:text-[2.3rem] md:text-center text-left mx-[1rem] font-semibold md:font-[500] mb-[1rem] md:mb-[2rem] mt-[2rem]"
        >
          About Us <span className="animate-pulse">🌱</span>
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={variants}
          className="text-left mx-[1rem] mb-[1rem] md:text-[1.2rem] lg:text-[1.3rem] md:mx-auto md:w-[55%] leading-[1.9rem] md:leading-[2.5rem]"
        >
          Welcome to Felsunny Technology, a leading technology solutions
          provider with a commitment to delivering solutions and services to
          businesses and organizations. With over a decade of experience in the
          technology industry, we have built a reputation for excellence and
          reliability in providing our clients with innovative and
          cost-effective solutions. <br /> <br /> We provide business solutions,
          including sales and distribution, government supplies, construction,
          consultancy services, and property sales.So why wait? Contact us today
          to learn more about how we can help you take your business to the next
          level.
        </motion.p>
      </div>
      <motion.h1
        ref={ref2}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        variants={factVariants}
        className="text-[2rem] lg:text-[2.3rem] md:text-center text-left ml-[3rem] font-semibold md:font-[500] mb-[1rem] md:mb-[2rem] mt-[2rem]"
      >
        Numbers
      </motion.h1>
      <motion.div
        ref={ref2}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.3 }}
        className="grid place-items-center gap-[1rem] mx-[2rem] md:grid-cols-2 lg:grid-cols-3 mt-[1rem]"
      >
        <motion.div
          variants={factVariants}
          className="grid place-items-center bg-white w-[20rem] h-[15rem] p-[1rem]"
        >
          <h1 className="text-[4rem] font-semibold">36</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </motion.div>
        <motion.div
          variants={factVariants}
          className="grid place-items-center bg-white w-[20rem] h-[15rem] p-[1rem]"
        >
          <h1 className="text-[4rem] font-bold">36</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </motion.div>{" "}
        <motion.div
          variants={factVariants}
          className="grid place-items-center bg-white w-[20rem] h-[15rem] p-[1rem]"
        >
          <h1 className="text-[4rem] font-bold">36</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </motion.div>{" "}
        <motion.div
          variants={factVariants}
          className="grid place-items-center bg-white w-[20rem] h-[15rem] p-[1rem]"
        >
          <h1 className="text-[4rem] font-bold">36</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </motion.div>
        <motion.div
          variants={factVariants}
          className="grid place-items-center bg-white w-[20rem] h-[15rem] p-[1rem]"
        >
          <h1 className="text-[4rem] font-bold">36</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </motion.div>
        <motion.div
          variants={factVariants}
          className="grid place-items-center bg-white w-[20rem] h-[15rem] p-[1rem]"
        >
          <h1 className="text-[4rem] font-bold">36</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        ref={ref1}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        variants={factVariants}
      >
        <h1 className="text-[2rem] lg:text-[2.3rem] md:text-center text-left ml-[2rem] font-semibold md:font-[500] mb-[1rem] md:mb-[2rem] mt-[2rem]">
          Founder
        </h1>
        <Image
          src={ceo}
          alt="ceo"
          width={330}
          heght={330}
          className="mx-auto "
          priority
        />
        <p className="text-[1rem] md:text-center text-left ml-[2rem] font-semibold mt-[0.5rem]">
          Ayeniko Felix Sunday
        </p>
        <p className="text-[1rem] md:text-center text-left ml-[2rem] font-semibold mt-[0.5rem]">
          {" "}
          Founder and Cheif Executive Officer
        </p>
      </motion.div>
    </main>
  );
};

export default About;
