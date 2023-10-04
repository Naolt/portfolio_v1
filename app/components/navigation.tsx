"use client";

import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import {
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import Button from "./button";
import Link from "next/link";
import { getData } from "@/lib/getData";
import { PersonalInfo } from "@/types";
//import Link from "next/link";

function Navigation({
  activeSection,
  darkMode,
  toggleDarkMode,
}: {
  activeSection: string;
  darkMode: Boolean;
  toggleDarkMode: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const closeRef = useRef(null);
  const [info, setInfo] = useState<PersonalInfo>();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (isOpen) setIsOpen(false);
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    async function fetchData() {
      const personalInfo = await getData("personalInfo");
      setInfo(personalInfo[0]);
    }

    fetchData();
  }, []);

  return (
    <div
      className={`w-full flex fixed justify-between z-20  ${
        isOpen && "h-screen w-screen items-start"
      }`}
    >
      <div
        className={`w-full flex fixed justify-between py-7 px-12 dark:bg-Background bg-Text-Color`}
      >
        {/* logo */}
        <Link href={"#Home"} onClick={handleScroll}>
          {darkMode ? (
            <Image
              src="/NaolT Logo Dark.svg"
              width={30}
              height={30}
              alt="My Logo"
              className="cursor-pointer"
            />
          ) : (
            <Image
              src="/NaolT Logo Light.svg"
              width={30}
              height={30}
              alt="My Logo"
              className="cursor-pointer"
            />
          )}{" "}
        </Link>

        {/* Navs */}
        <div className="hidden md:flex gap-5 justify-center  items-center ">
          <Nav text="Home" activeSection={activeSection} />
          <Nav text="About" activeSection={activeSection} />
          <Nav text="Projects" activeSection={activeSection} />
          <Nav text="Contact" activeSection={activeSection} />
          <a
            target={"_blank"}
            href={
              info?.resumeLink ||
              "https://drive.google.com/file/d/1WDXmXCLg23EAvS76-1jrEDcqDZqyzQrR/view?usp=sharing"
            }
            className="flex gap-2 items-center px-4 py-2 rounded-3xl bg-Light-Green text-Text-Color transition-all ease-linear duration-75 hover:bg-Light-Green/[0.9] "
          >
            Resume
          </a>

          {darkMode ? (
            <SunIcon
              className="w-8 h-8 dark:text-Text-Color text-Background transition-all ease-linear pt-1"
              onClick={toggleDarkMode}
            />
          ) : (
            <MoonIcon
              className="w-8 h-8 dark:text-Text-Color text-Background transition-all ease-linear pt-1"
              onClick={toggleDarkMode}
            />
          )}
        </div>
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
            ref={closeRef}
          >
            {isOpen ? (
              <XMarkIcon className="w-8 h-8 dark:text-Text-Color text-Background transition-all ease-linear pt-1" />
            ) : (
              <Bars3Icon className="w-8 h-8 dark:text-Text-Color text-Background transition-all ease-linear pt-1" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="h-full w-full flex flex-col  gap-5 justify-center items-center bg-Text-Color dark:bg-Background">
          <Nav text="Home" activeSection={activeSection} closeRef={closeRef} />
          <Nav text="About" activeSection={activeSection} closeRef={closeRef} />
          <Nav
            text="Projects"
            activeSection={activeSection}
            closeRef={closeRef}
          />
          <Nav
            text="Contact"
            activeSection={activeSection}
            closeRef={closeRef}
          />
          <a
            target={"_blank"}
            href={
              "https://drive.google.com/file/d/1WDXmXCLg23EAvS76-1jrEDcqDZqyzQrR/view?usp=sharing"
            }
            className="flex gap-2 items-center px-4 py-2 rounded-3xl bg-Light-Green text-Text-Color transition-all ease-linear duration-75 hover:bg-Light-Green/[0.9] "
          >
            Resume
          </a>
          {darkMode ? (
            <SunIcon
              className="w-8 h-8 dark:text-Text-Color text-Background transition-all ease-linear pt-1"
              onClick={toggleDarkMode}
            />
          ) : (
            <MoonIcon
              className="w-8 h-8 dark:text-Text-Color text-Background transition-all ease-linear pt-1"
              onClick={toggleDarkMode}
            />
          )}
        </div>
      )}
    </div>
  );
}

interface NavProps {
  text: string;
  activeSection: string;
  closeRef?: any;
}

const Nav: React.FC<NavProps> = ({ text, activeSection, closeRef = null }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (closeRef) closeRef.current.click();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const isActive = `${
    activeSection == text
      ? "underline dark:text-Light-Green text-Light-Green"
      : "dark:text-Text-Color text-Background"
  }`;

  return (
    <Link
      className={`font-Montserrat font-normal text-base uppercase w-fit hover:text-Light-Green transition-all ease-linear cursor-pointer py-2 px-4 ${isActive}`}
      href={`#${text}`}
      onClick={handleScroll}
    >
      {text}
    </Link>
  );
};

export default Navigation;
