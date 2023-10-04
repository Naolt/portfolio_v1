import Image from "next/image";
import React from "react";
import { motion as m } from "framer-motion";
import { PersonalInfo } from "@/types";

interface HomeSectionProps {
  info: PersonalInfo;
}

const HomeSection: React.FC<HomeSectionProps> = ({ info }) => {
  return (
    <m.section
      id="Home"
      className="md:px-48 lg:px-96 min-h-screen w-screen flex justify-center items-center md:items-start flex-col snap-center overflow-hidden"
    >
      <m.div
        className="absolute w-1/2 h-screen top-0 left-0 z-20 bg-Dark-Green"
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        transition={{ duration: 1, ease: "easeOut" }}
        exit={{ opacity: 0 }}
      ></m.div>

      <m.div
        className="absolute w-1/2 h-screen top-0 right-0 z-20 bg-Accent-Green"
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        exit={{ opacity: 0 }}
      ></m.div>

      <h1 className="dark:text-Text-Color text-Background text-3xl font-semibold mb-4 font-raleway">
        Hey There,
      </h1>

      <div className="lg:block hidden w-full  relative overflow-hidden visible  mb-4  ">
        <Image
          src="/NameHero.svg"
          width={200}
          height={300}
          alt="My Logo"
          className="cursor-pointer contrast-200 w-full"
        />
      </div>
      <div className="md:block lg:hidden hidden relative overflow-hidden visible  mb-4  ">
        <Image
          src="/NameHero.svg"
          width={200}
          height={300}
          alt="My Logo"
          className="cursor-pointer contrast-200 w-full"
        />
      </div>
      <div className="sm:block md:hidden hidden relative overflow-hidden visible  mb-4  ">
        <Image
          src="/NameHero.svg"
          width={200}
          height={300}
          alt="My Logo"
          className="cursor-pointer contrast-200 w-full"
        />
      </div>
      <div className="sm:hidden  relative overflow-hidden visible  mb-4  ">
        <Image
          src="/NameHero.svg"
          width={200}
          height={300}
          alt="My Logo"
          className="cursor-pointer contrast-200 w-full"
        />
      </div>
      <h3 className="text-Light-Green brightness-105 text-2xl md:text-3xl font-bold mb-8 md:mb-6 font-montserrat">
        {"Full Stack Developer."}
      </h3>
      <p className="text-Background dark:text-Text-Color italic text-lg md:text-xl font-raleway truncate-4-lines font-normal md:px-0 px-5 text-center md:text-start">
        {info?.introExcerpt}
        {/*{` I am a skilled software engineer with expertise in full stack
        development. I am dedicated to creating high-quality software solutions
        that meet the needs of clients and users.`}*/}
      </p>
    </m.section>
  );
};

export default HomeSection;
