import Image from "next/image";
import businessSvg from "../images/business.svg";
import blob from "../images/blob.svg";

const HomeSection = () => {
  return (
    <div className="">
      <div className="lg:flex w-full gap-[10rem] xl:gap-[18rem]">
        <h1 className="text-[1.8rem] md:text-[2.5rem] lg:text-[3.2rem] lg:leading-[5rem] pt-[10rem] md:pt-[10rem] lg:pt-[10rem] font-bold text-center px-6 lg:text-left lg:w-[50%] lg:translate-y-[-2rem]">
          Streamline your business operations with our services
        </h1>

        <Image
          src={businessSvg}
          alt="Home Page SVG"
          width={250}
          height={250}
          className="mx-auto lg:mx-0 mt-[1rem] lg:scale-[1.5] "
        />

        <Image
          src={blob}
          alt="Home Page SVG"
          width={300}
          height={300}
          className="absolute -z-20 left-1/2 transform -translate-x-1/2 translate-y-[-12rem] lg:hidden"
        />
      </div>
      <div className="mt-[2rem] text-black bg-white mx-[1.5rem] lg:mt-[5rem] rounded-[1rem]">
        <div className="pb-[5rem] md:text-[1.2rem] xl:px-[8rem] lg:px-[5rem]">
          <p className=" ml-5 pt-[3rem] lg:text-[0.9rem] font-semibold lg:font-normal">
            ------- WHAT WE DO
          </p>
          <p className="pt-[1.5rem] px-5 lg:text-[1.5rem] xl:text-[1.8rem]">
            We provide business solutions, including sales and distribution,
            government supplies, construction, consultancy services, and
            property sales. Contact us today to learn more.
          </p>
          <div className="text-white bg-black mx-auto text-center w-[8.5rem] py-3 rounded-md mt-[2rem] cursor-pointer lg:mx-0 lg:ml-[1.2rem] hover:bg-[#b3bdc2] hover:text-black duration-200 md:text-[0.95rem]">
            LEARN MORE
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
