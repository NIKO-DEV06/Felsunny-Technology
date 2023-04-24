import Image from "next/image";

import services from "../images/services.jpg";
import right from "../images/right.svg";

const Services = () => {
  const servicesOffered = [
    { title: "Sales & Ditribution" },
    { title: "Government Supplies" },
    { title: "Construction" },
    { title: "Property Sales" },
    { title: "Gadgets & Devices" },
    { title: "Consultancy Services" },
  ];

  return (
    <main className="pt-[3rem] md:pt-[9rem] pb-[13rem] bg-[#dfe8ec]">
      <div className="md:flex md:flex-row-reverse md:justify-between gap-[2rem]">
        <div className="md:grid place-items-center">
          <Image
            src={services}
            alt="services"
            width={300}
            heght={300}
            className="mx-auto w-full md:w-auto h-[15rem] ens md:translate-x-[-5rem] lg:translate-x-[-7rem] xl:translate-x-[-10rem] lg:scale-[1.2] xl:scale-[1.4]"
            priority
          />
        </div>
        <div className="mx-[1rem] md:mx-[5rem] md:mr-[5rem] md:flx md:justiy-between md:gap-2rem] md:mt[3rem] w-[40%]">
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
      </div>
      <div>
        {servicesOffered.map(({ title }) => (
          <div
            key={title}
            className="flex flex-col gap-[0.7rem] mt-[1.5rem] md:mt-[3.5rem]"
          >
            <div className="flex justify-between mx-[1.5rem] md:mx-[5.5rem]">
              <p className="text-[1.55rem] md:text-[2.2rem] md:font-[500]">
                {title}
              </p>
              <div>
                <Image
                  src={right}
                  alt="right"
                  width={35}
                  heght={35}
                  className="rotate[-45deg] hover:rotate-[-45deg] duration-300 cursor-pointer md:scale-[1.3]"
                />
              </div>
            </div>
            <hr className="border-black mx-[1.5rem] md:mx-[5.5rem]" />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Services;
