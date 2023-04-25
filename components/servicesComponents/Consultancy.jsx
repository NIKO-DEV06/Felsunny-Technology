"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import back from "../../images/back.svg";
import pic1 from "../../images/sul1.jpg";
import pic2 from "../../images/sul2.jpg";

const Consultancy = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
  });
  const { ref: ref4, inView: inView4 } = useInView({
    triggerOnce: true,
  });
  const { ref: ref5, inView: inView5 } = useInView({
    triggerOnce: true,
  });
  return (
    <main className="pt-[7rem] md:pt-[12rem] pb-[13rem] bg-[#dfe8ec]">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        whileTap={{ scale: 0.8 }}
        className="bg-white dark:bg-darkBlue shadow-input-shadow w-[7rem] ml-5 cursor-pointer md:ml-[3.5rem] lg:ml-[5.5rem] xl:ml-[6.5rem] rounded-sm mb-[1rem]"
      >
        <Link href="/services">
          <div className="flex py-2 justify-center gap-3 font-semibold">
            <Image src={back} alt="backSvg" width={20} height={20} />
            <p>Back</p>
          </div>
        </Link>
      </motion.div>
      <div className="md:flex justify-between md:mx-[2rem] lg:mx-[4rem] xl:mx-[5rem] md:gap-[2rem]">
        <div className="mt-[1.5rem] ml-[1.5rem]">
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="uppercase text-[2.2rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] font-[800] mx-auto"
          >
            Good Service <br />
            consultation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:text-[1.2rem] lg:text-[1.5rem]"
          >
            -----Sevice Consultation Business
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-[2.5rem]"
        >
          <Image
            src={pic1}
            width={300}
            height={300}
            alt="image1"
            className="w-full h-[14rem] lg:scale-[1.1] xl:scale-[1.3] object-cover xl:translate-x-[-1rem]"
            loading="lazy"
          />
        </motion.div>
      </div>
      <div className="md:flex md:mx-[2rem] lg:mx-[4rem] xl:mx-[5rem] md:mt-[2.5rem] lg:mt-[5rem]">
        <motion.h1
          ref={ref1}
          initial={{ opacity: 0, y: 50 }}
          animate={inView1 ? { opacity: 1, y: 0 } : ""}
          transition={{ duration: 0.5 }}
          className="uppercase font-bold text-[1.8rem] md:text-[2rem] lg:text-[2.2rem] ml-[1.5rem] mt-[2.5rem] md:w-[30%]"
        >
          we provide the
          <br className="" /> best solution
        </motion.h1>
        <div className="mx-[1.5rem] mt-[1rem] md:mr-[2.5rem] md:w-[35%]">
          <motion.p
            ref={ref2}
            initial={{ opacity: 0, y: 100 }}
            animate={inView2 ? { opacity: 1, y: 0 } : ""}
            transition={{ duration: 0.5 }}
            className="text-sm lg:text-base xl:text-lg"
          >
            At Felsunny&apos;s Consulting Services, we&apos;ve worked with
            clients in a wide range of industries, from healthcare to finance to
            manufacturing. Our team has the experience and expertise to help
            businesses of all sizes and types succeed.
            <br />
            <br />
          </motion.p>
        </div>
        <div className="mx-[1.5rem] md:mx-0 md:mt-[1rem] md:w-[35%]">
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={inView2 ? { opacity: 1, y: 0 } : ""}
            transition={{ duration: 0.5 }}
            className="text-sm lg:text-base xl:text-lg"
          >
            If you&apos;re interested in learning more about our consulting
            services, please don&apos;t hesitate to get in touch. We&apos;d be
            happy to discuss your needs and provide you with a custom solution
            that meets your unique business needs.
          </motion.p>
        </div>
      </div>
      <div className="mt-[1.5rem] md:mx-[2rem] lg:mx-[4rem] xl:mx-[5rem] md:mt-[4rem]">
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, y: 100 }}
          animate={inView3 ? { opacity: 1, y: 0 } : ""}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row justify-between mx-[2rem] mt-[1rem] text-[1.2rem] lg:text-[1.5rem] xl:text-[1.8rem] font-semibold md:text-[1.8rem] md:mt-[2rem]"
        >
          <p>&rarr; Business Strategy</p>
          <p>&rarr; Marketing Consulting</p>
          <p>&rarr; Technology Consulting</p>
        </motion.div>
      </div>
      <div className="md:flex gap-[2rem] lg:gap-[4rem] md:mx-[2rem] lg:mx-[4rem] xl:mx-[5rem] lg:mt-[3rem]">
        <motion.div
          ref={ref4}
          initial={{ opacity: 0 }}
          animate={inView4 ? { opacity: 1 } : ""}
          transition={{ duration: 0.5 }}
          className="mt-[2.5rem]"
        >
          <Image
            src={pic2}
            width={250}
            height={250}
            alt="image1"
            className="w-full h-[20rem] md:w-[40rem] md:h-full object-cover md:ml-[2rem] "
            loading="lazy"
          />
        </motion.div>
        <motion.div
          ref={ref5}
          initial={{ opacity: 0, y: 100 }}
          animate={inView5 ? { opacity: 1, y: 0 } : ""}
          transition={{ duration: 0.5 }}
          className=""
        >
          <h1 className="uppercase font-bold text-[1.8rem] lg:text-[2rem] ml-[1.5rem] mt-[2.5rem]">
            why choose us
          </h1>
          <div className="flex flex-col gap-[1rem] mt-[1.5rem]">
            <div className="ml-[1.5rem]">
              <h2 className="uppercase font-semibold lg:text-[1.2rem]">
                Experienced Team
              </h2>
              <p className="text-sm lg:text-base mr-[2rem] mt-[0.2rem]">
                Our team of consultants has years of experience and a deep
                understanding of the industries we serve. We stay up-to-date on
                the latest trends and developments in our field to develop
                solutions that meet our clients unique needs.
              </p>
            </div>
            <div className="ml-[1.5rem]">
              <h2 className="uppercase font-semibold lg:text-[1.2rem]">
                Results-Driven Approach
              </h2>
              <p className="text-sm mr-[2rem] mt-[0.2rem] lg:text-base ">
                We are committed to delivering measurable results for our
                clients. We work closely with our clients to set goals and
                metrics for success.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[1rem] mt-[1rem]">
            <div className="ml-[1.5rem]">
              <h2 className="uppercase font-semibold lg:text-[1.2rem]">
                Proven Track Record
              </h2>
              <p className="text-sm mr-[2rem] mt-[0.2rem] lg:text-base">
                We have a proven track record of delivering results for our
                clients, and we are proud of the relationships we have built
                with our clients over the years.
              </p>
            </div>
            <div className="ml-[1.5rem]">
              <h2 className="uppercase font-semibold lg:text-[1.2rem]">
                Tailored Solutions
              </h2>
              <p className="text-sm mr-[2rem] mt-[0.2rem] lg:text-base">
                We understand that every business is unique, and we take a
                tailored approach to our consulting services to ensure that our
                solutions are customized to meet our clients specific needs.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Consultancy;
