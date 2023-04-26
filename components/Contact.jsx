"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import * as yup from "yup";
import toast, { Toaster } from "react-hot-toast";

import down from "../images/down.svg";
import send from "../images/send.svg";

const schema = yup.object().shape({
  name: yup.string().trim().required("Name field is required"),
  email: yup.string().email().required("Please enter a valid email address"),
  message: yup.string().trim().required("Please enter a message"),
});

const Contact = () => {
  const [isSending, setIsSending] = useState(false);

  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitFormHandler = async (data) => {
    setIsSending(true);
    try {
      const response = await emailjs.sendForm(
        process.env.NEXT_SERVICE_ID,
        process.env.NEXT_TEMPLATE_ID,
        "#contact-form",
        process.env.NEXT_KEY_ID
      );

      reset();
      setIsSending(false);
      toast.success("Message Sent!");
    } catch (error) {
      setIsSending(false);
      toast.error("Message failed to send");
    }
  };

  return (
    <main className="pt-[7.5rem] pb-[7rem] bg-[#dfe8ec]">
      <Toaster position="top-center" reverseOrder={false} />
      <form
        id="contact-form"
        onSubmit={handleSubmit(submitFormHandler)}
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
              <motion.span
                animate={{ rotate: [0, 10, -8, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
                className="animate-pulse inline-block"
              >
                👋
              </motion.span>
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
                {...register("name")}
                autoComplete="off"
                className="inputs"
              />
              <p className="text-[#ff0000] font-[500] text-sm text-left pt-1">
                {errors.name?.message}
              </p>
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
                {...register("email")}
                placeholder="e.g. johndoe@gmail.com"
                type="text"
                name="email"
                autoComplete="off"
                className="inputs"
              />
              <p className="text-[#ff0000] font-[500] text-sm text-left pt-1">
                {errors.email?.message}
              </p>
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
                <option value="Sales-and-Distribution">
                  Sales & Distribution
                </option>
                <option value="Government-Supplies">Government Supplies</option>
                <option value="Construction">Construction</option>
                <option value="Property-Sales">Property Sales</option>
                <option value="Gadgets-Devices">Gadgets & Devices</option>
                <option value="Consultancy-Services">
                  Consultancy Services
                </option>
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
                {...register("message")}
                cols="30"
                rows="10"
                autoComplete="off"
                placeholder="Let us know what your project is about"
                className={`outline-none border-[1px] focus:border-black 
                 h-[11rem] w-[21rem] md:w-[43rem] lg:w-[55rem] rounded-none appearance-none resize-none px-4 py-3 text-[0.95rem] lg:text-[1rem]`}
              />
              <p className="text-[#ff0000] font-[500] text-sm text-center">
                {errors.message?.message}
              </p>
            </motion.div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0 }}
              variants={variants}
              disabled={isSending}
              className={`group flex justify-center items-center gap-[0.5rem] bg-black text-white w-[21rem] lg:w-[27rem] p-[0.65rem] mt-[1rem] tracking-widest md:hover:bg-[#b3bdc2] md:hover:text-black duration-200 ${
                isSending ? "opacity-50" : ""
              }`}
            >
              {isSending ? "SENDING..." : "SEND"}
              <Image
                src={send}
                width={20}
                height={20}
                alt="arrowSvg"
                className=" md:group-hover:invert"
              />
            </motion.button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Contact;
