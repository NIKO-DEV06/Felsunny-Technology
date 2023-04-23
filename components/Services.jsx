import Image from "next/image";

import services from "../images/services.jpg";

const Services = () => {
  return (
    <main className="pt-[3rem] md:pt-[9rem] pb-[13rem] bg-[#dfe8ec]">
      <div>
        <Image
          src={services}
          alt="services"
          width={300}
          heght={300}
          className="mx-auto w-full md:w-auto"
          priority
        />
      </div>

      <div className="mx-[1rem]">
        <div>
          <p className="uppercase mt-[2rem] mb-[0.5rem] tracking-wide text-[1.1rem]">
            our service
          </p>
          <h1 className="font-bold text-[2rem] tracking-wider">
            What Services <br />
            We're Offering
          </h1>
        </div>
        <div>
          <p className="mt-[0.5rem]">
            We provide business solutions, including sales and distribution,
            government supplies, construction, consultancy services, and
            property sales. Contact us today to learn more.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Services;
