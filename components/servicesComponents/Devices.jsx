"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import back from "../../images/back.svg";
import pic1 from "../../images/dev1.jpg";
import pic2 from "../../images/dev3.jpg";

const Devices = () => {
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
            Cutting-Edge <br />
            Electronics
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:text-[1.2rem] lg:text-[1.5rem]"
          >
            -----For Today&apos;s Connected World
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
            We are passionate about providing our customers with high-quality
            electronics products at affordable prices. Whether you&apos;re
            looking for the latest smartphones, tablets, laptops, or gaming
            consoles, we&apos;ve got you covered.
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
            Our wide selection of products includes offerings from all the major
            brands, as well as our own high-quality, affordable electronics
            brand. We are constantly updating our inventory to ensure that we
            are offering the latest and greatest in technology.
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
          <div>
            <p>&rarr; Smartphones</p>
            <p>&rarr; Tablets</p>
            <p>&rarr; Laptops </p>
          </div>
          <div>
            <p>&rarr; Drones</p>
            <p>&rarr; Accessories </p>
            <p>&rarr; And Many More....</p>
          </div>
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
                Wide Range of Products
              </h2>
              <p className="text-sm lg:text-base mr-[2rem] mt-[0.2rem]">
                We offer a wide range of electronics products to meet the needs
                of our customers. Whether you&apos;re looking for the latest
                smartphones, tablets, laptops, or gaming consoles, we&apos;ve
                got you covered.
              </p>
            </div>
            <div className="ml-[1.5rem]">
              <h2 className="uppercase font-semibold lg:text-[1.2rem]">
                Competitive Prices
              </h2>
              <p className="text-sm mr-[2rem] mt-[0.2rem] lg:text-base ">
                We understand that price is an important consideration for our
                customers. That&apos;s why we offer competitive prices on all our
                products, so you can get the high-quality electronics you need
                at an affordable price.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[1rem] mt-[1rem]">
            <div className="ml-[1.5rem]">
              <h2 className="uppercase font-semibold lg:text-[1.2rem]">
                Exceptional Customer Service
              </h2>
              <p className="text-sm mr-[2rem] mt-[0.2rem] lg:text-base ">
                Our team of electronics experts is always available to answer
                your questions and provide you with expert advice. Whether
                you&apos;re looking for recommendations on the best products for your
                needs or need help troubleshooting an issue, our team is here to
                help.
              </p>
            </div>
            <div className="ml-[1.5rem]">
              <h2 className="uppercase font-semibold lg:text-[1.2rem]">
                Tailored Solutions
              </h2>
              <p className="text-sm mr-[2rem] mt-[0.2rem] lg:text-base">
                We are committed to providing exceptional customer service to
                every customer, every time. From fast shipping to hassle-free
                returns, we make sure that our customers are satisfied with
                their experience with us.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Devices;
