import Link from "next/link";
import Image from "next/image";

import back from "../../images/back.svg";
import pic1 from "../../images/cons5.jpg";
import pic2 from "../../images/cons1.jpg";

const Construction = () => {
  return (
    <main className="pt-[7rem] md:pt-[8rem] pb-[13rem] bg-[#dfe8ec]">
      <div className="bg-white dark:bg-darkBlue shadow-input-shadow w-[7rem] ml-5 cursor-pointer md:ml-[3.5rem] lg:ml-[5.5rem] xl:ml-[6.5rem] rounded-md">
        <Link href="/services">
          <div className="flex py-2 justify-center gap-3 font-semibold">
            <Image src={back} alt="backSvg" width={20} height={20} />
            <p>Back</p>
          </div>
        </Link>
      </div>
      <div className="md:flex justify-between md:mx-[2rem] lg:mx-[4rem] xl:mx-[5rem] md:gap-[2rem]">
        <div className="mt-[1.5rem] ml-[1.5rem]">
          <h1 className="uppercase text-[2.2rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] font-[800] mx-auto">
            modern <br />
            architecture
          </h1>
          <p className="md:text-[1.2rem] lg:text-[1.5rem]">
            -----Architecture, Design, Planning, Construction.
          </p>
        </div>
        <div className="mt-[2.5rem]">
          <Image
            src={pic1}
            width={300}
            height={300}
            alt="image1"
            className="w-full h-[14rem] lg:scale-[1.1] xl:scale-[1.3] object-cover xl:translate-x-[-1rem]"
            loading="lazy"
          />
        </div>
      </div>
      <div className="md:flex md:mx-[2rem] lg:mx-[4rem] xl:mx-[5rem] md:mt-[2.5rem] lg:mt-[4rem]">
        <h1 className="uppercase font-bold text-[1.8rem] md:text-[2rem] lg:text-[2.2rem] ml-[1.5rem] mt-[2.5rem] lg:text-red-600 xl:text-green-700 md:text-blue-600 md:w-[30%]">
          we believe in
          <br className="" /> quality
        </h1>
        <div className="mx-[1.5rem] mt-[1rem] md:mr-[2.5rem] md:w-[25%]">
          <p className="text-sm">
            Welcome to Felsunny&apos;s construction page! We take pride in our
            ability to deliver high-quality construction services that meet the
            needs of our clients. Our team of experienced professionals has the
            expertise to handle any project, from small renovations to
            large-scale commercial constructions.
            <br />
            <br />
          </p>
        </div>
        <div className="mx-[1.5rem] md:mx-0 md:mt-[1rem] md:w-[30%]">
          <p className="text-sm">
            We are dedicated to providing excellent service, timely delivery,
            and cost-effective solutions that meet your requirements. At
            Felsunny, we work closely with our clients to ensure that every
            project is completed on time, on budget, and to their satisfaction
          </p>
        </div>
      </div>
      <div className="mt-[1.5rem] md:mx-[2rem] lg:mx-[4rem] xl:mx-[5rem] md:mt-[4rem]">
        <h1 className="uppercase font-bold text-[1.8rem] md:text-[2rem] ml-[1.5rem] mt-[2.5rem] md:text-center md:tracking-wider">
          From Blueprint <br className="md:hidden" />
          to Reality
        </h1>
        <div className="flex justify-between mx-[2rem] mt-[1rem] text-[1.2rem] font-semibold md:text-[1.8rem] md:mt-[2rem]">
          <div>
            <p>&rarr; Planning</p>
            <p>&rarr; Architecture</p>
            <p>&rarr; Interior Design</p>
          </div>
          <div>
            <p>&rarr; Visualization </p>
            <p>&rarr; Construction</p>
            <p>&rarr; Presentation</p>
          </div>
        </div>
      </div>
      <div className="md:flex gap-[2rem] md:mx-[2rem] lg:mx-[4rem] xl:mx-[5rem]">
        <div className="mt-[2.5rem]">
          <Image
            src={pic2}
            width={250}
            height={250}
            alt="image1"
            className="w-full h-[20rem] md:w-auto md:h-full object-cover md:ml-[2rem] "
            loading="lazy"
          />
        </div>
        <div className="">
          <h1 className="uppercase font-bold text-[1.8rem] ml-[1.5rem] mt-[2.5rem]">
            why choose us
          </h1>
          <div className="flex flex-col gap-[1rem] mt-[1.5rem]">
            <div className="ml-[1.5rem]">
              <h2 className="uppercase font-semibold ">we create solutions</h2>
              <p className="text-sm mr-[2rem] mt-[0.2rem]">
                We create solutions that are tailored to meet the unique needs
                of each of our clients, taking into account their specific
                challenges and goals.
              </p>
            </div>
            <div className="ml-[1.5rem]">
              <h2 className="uppercase font-semibold ">Carefully Planned</h2>
              <p className="text-sm mr-[2rem] mt-[0.2rem]">
                Our team carefully plans every project to ensure that we are
                able to deliver results that exceed our clients&apos;
                expectations, both in terms of quality and efficiency.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[1rem] mt-[1rem]">
            <div className="ml-[1.5rem]">
              <h2 className="uppercase font-semibold">perfect design</h2>
              <p className="text-sm mr-[2rem] mt-[0.2rem]">
                Our focus on perfect design means that we pay close attention to
                every detail, from the overall aesthetic to the functionality
                and user experience.
              </p>
            </div>
            <div className="ml-[1.5rem]">
              <h2 className="uppercase font-semibold ">good experience</h2>
              <p className="text-sm mr-[2rem] mt-[0.2rem]">
                We strive to provide our clients with a good experience from
                start to finish, working closely with them throughout the
                project to ensure that their needs are always met
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Construction;
