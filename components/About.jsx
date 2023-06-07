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
      <div>
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
