"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import back from "../../images/back.svg";
import pic1 from "../../images/ps.jpg";
import pic2 from "../../images/pro1.jpg";

const PropertySales = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
  });
  const { ref: ref2, inView: inView2 } = useInView({
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
            Find your <br />
            perfect home
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:text-[1.2rem] lg:text-[1.5rem]"
          >
            -----Your home is waiting for you
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
          Top-Quality
          <br className="" /> Electronics
        </motion.h1>
        <div className="mx-[1.5rem] mt-[1rem] md:mr-[2.5rem] md:w-[35%]">
          <motion.p
            ref={ref2}
            initial={{ opacity: 0, y: 100 }}
            animate={inView2 ? { opacity: 1, y: 0 } : ""}
            transition={{ duration: 0.5 }}
            className="text-sm lg:text-base xl:text-lg"
          >
            we are dedicated to helping our clients buy and sell properties in
            the most efficient and effective way possible. We understand that
            buying or selling a property can be a stressful and overwhelming
            process, and that&apos;s why we are here to make it as easy as
            possible for you.
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
            With our years of experience in the real estate industry, we have
            developed a deep understanding of the local market and can provide
            our clients with valuable insights and advice. Whether you&apos;re
            looking to buy or sell a residential or commercial property, we are
            here to guide you every step of the way.
          </motion.p>
        </div>
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
                Local Market Expertise
              </h2>
              <p className="text-sm lg:text-base mr-[2rem] mt-[0.2rem]">
                We have deep knowledge and understanding of the local real
                estate market. Our team of experienced agents has lived and
                worked in the area for years, and we are constantly monitoring
                market trends and changes. This means that we can provide our
                clients with valuable insights and advice when it comes to
                buying or selling a property in the area.
              </p>
            </div>
            <div className="ml-[1.5rem]">
              <h2 className="uppercase font-semibold lg:text-[1.2rem]">
                Personalized Service
              </h2>
              <p className="text-sm mr-[2rem] mt-[0.2rem] lg:text-base ">
                We understand that every client is unique, and that&apos;s why
                we take a personalized approach to each transaction. Our team of
                agents takes the time to get to know our clients and their
                needs, and we work closely with them to ensure that they are
                completely satisfied with their experience.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[1rem] mt-[1rem]">
            <div className="ml-[1.5rem]">
              <h2 className="uppercase font-semibold lg:text-[1.2rem]">
                Comprehensive Services
              </h2>
              <p className="text-sm mr-[2rem] mt-[0.2rem] lg:text-base ">
                We offer a wide range of services to meet our clients' needs.
                From buying and selling to property management and investment
                advice, we are a one-stop shop for all your real estate needs.
                Our team of agents has the expertise and knowledge to guide you
                through every step of the process, and ensure that you achieve
                your real estate goals.
              </p>
            </div>
            <div className="ml-[1.5rem]">
              <h2 className="uppercase font-semibold lg:text-[1.2rem]">
                Commitment to Excellence
              </h2>
              <p className="text-sm mr-[2rem] mt-[0.2rem] lg:text-base">
                We are committed to providing our clients with the best possible
                service. We take pride in our work and strive for excellence in
                everything we do. Whether you are buying or selling a property,
                we are here to ensure that your experience is as smooth and
                stress-free as possible.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default PropertySales;
