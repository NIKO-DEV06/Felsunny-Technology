"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import back from "../../images/back.svg";
import pic1 from "../../images/gs.jpeg";
import pic2 from "../../images/gs2.jpg";

const GovernmentSupplies = () => {
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
            Reliable <br />
            Government Supplies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:text-[1.2rem] lg:text-[1.5rem]"
          >
            ----- Nationwide Government Supllies
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
          Supply
          <br className="" /> Nationwide
        </motion.h1>
        <div className="mx-[1.5rem] mt-[1rem] md:mr-[2.5rem] md:w-[35%]">
          <motion.p
            ref={ref2}
            initial={{ opacity: 0, y: 100 }}
            animate={inView2 ? { opacity: 1, y: 0 } : ""}
            transition={{ duration: 0.5 }}
            className="text-sm lg:text-base xl:text-lg"
          >
            Your go-to source for reliable, high-quality government supplies. At
            Felsunny, we understand the unique needs of government agencies, and
            we are dedicated to providing our clients with the supplies they
            need to succeed.
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
            Whether you&apos;re a government agency or a contractor working with
            the government, Felsunny Government Supplies can help you get the
            supplies you need to get the job done. Contact us today to learn
            more about how we can help your organization succeed.
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
                Comprehensive Product Catalog
              </h2>
              <p className="text-sm lg:text-base mr-[2rem] mt-[0.2rem]">
                We offer a comprehensive product catalog that includes
                everything from office supplies and equipment to specialized
                products for law enforcement and military applications. Our team
                works closely with our clients to understand their specific
                needs and requirements, and we offer customized solutions that
                are tailored to their unique situations.
              </p>
            </div>
            <div className="ml-[1.5rem]">
              <h2 className="uppercase font-semibold lg:text-[1.2rem]">
                Competitive Pricing
              </h2>
              <p className="text-sm mr-[2rem] mt-[0.2rem] lg:text-base ">
                We understand the importance of keeping costs under control, and
                that&apos;s why we offer competitive pricing on all of our
                products and services. We work with our clients to develop
                pricing structures that fit their budgets and ensure that they
                are getting the best possible value for their money.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[1rem] mt-[1rem]">
            <div className="ml-[1.5rem]">
              <h2 className="uppercase font-semibold lg:text-[1.2rem]">
                Reliable Delivery and Logistics
              </h2>
              <p className="text-sm mr-[2rem] mt-[0.2rem] lg:text-base ">
                We understand that reliable delivery and logistics are critical
                to the success of government operations, and that&apos;s why we
                offer fast and efficient delivery services. Our team works with
                our clients to ensure that their products are delivered on time
                and in good condition, and we use the latest technology to track
                shipments and ensure that they arrive at their destinations
                safely and securely.
              </p>
            </div>
            <div className="ml-[1.5rem]">
              <h2 className="uppercase font-semibold lg:text-[1.2rem]">
                Responsive Customer Service
              </h2>
              <p className="text-sm mr-[2rem] mt-[0.2rem] lg:text-base">
                We believe that excellent customer service is essential to
                building lasting relationships with our clients. Our team of
                customer service experts is available around the clock to answer
                questions, provide support, and ensure that our clients needs
                are always met. We understand the importance of prompt and
                effective communication, and we strive to provide our clients
                with the support they need to succeed.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default GovernmentSupplies;
