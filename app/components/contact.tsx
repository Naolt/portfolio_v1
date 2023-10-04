"use client";
import Image from "next/image";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { motion as m } from "framer-motion";
import { PersonalInfo } from "@/types";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactSectionProps {
  info: PersonalInfo;
}

const ContactSection: React.FC<ContactSectionProps> = ({ info }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);

        setTimeout(() => {
          setSubmitted(false);
        }, 15000);
      } else {
        alert("Error sending message. Please try again later.");
      }
    } catch (error) {
      alert("Error sending message. Please try again later.");
    }

    setSubmitting(false);
  };

  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      id="Contact"
      className="w-screen  md:h-screen flex flex-col md:flex-row px-5 py-10 items-center  md:px-28 snap-center "
    >
      {/* Left */}
      <div className="flex flex-col justify-center item-center w-full my-7">
        <h1 className="dark:text-Text-Color text-Background font-Montserrat  text-3xl  md:text-6xl capitalize font-bold mb-11 text-center md:text-start">
          Get in Touch
        </h1>
        <div className="mb-14 m-auto md:m-0">
          <div className="w-20 md:w-40 h-2 bg-Light-Green "></div>
          <div className="w-20 md:w-40 h-2 bg-Light-Green ml-20 md:ml-20 mt-5"></div>
        </div>
        <a
          className="font-Raleway text-2xl  font-semibold dark:text-Text-Color text-Background mb-9 cursor-pointer hover:text-Accent-Green hover:underline transition-all duration-75 ease-in-out text-center md:text-start mt-5"
          href={`mailto:${info?.email}`}
        >
          {info?.email || "naoltamrat36@gmail.com"}
        </a>
        <div className="flex gap-9 justify-center items-center pb-10 mb-5 md:justify-start">
          <a
            className="relative w-8 h-8 "
            href={`${info?.socialUrls[0].url || ""}`}
            target="_blank"
          >
            <Image
              src="/github.svg"
              //width={40}
              //height={40}
              fill
              alt="Github"
              className="cursor-pointer mb-4 text-Light-Green dark:grayscale-0 dark:invert-0 grayscale invert transition-all ease-linear hover:contrast-50"
            />
          </a>
          <a
            className="relative w-8 h-8"
            href={`${info?.socialUrls[1].url || ""}`}
            target="_blank"
          >
            <Image
              src="/linkedin.svg"
              //width={40}
              fill
              //height={40}
              alt="Github"
              className="cursor-pointer mb-4 dark:grayscale-0 dark:invert-0 grayscale invert transition-all ease-linear hover:contrast-50"
            />
          </a>
          <a
            className="relative w-8 h-8"
            href={`${info?.socialUrls[2].url || ""}`}
            target="_blank"
          >
            <Image
              src="/telegram.svg"
              //width={40}
              //height={40}
              fill
              alt="Github"
              className="cursor-pointer mb-4 dark:grayscale-0 dark:invert-0 grayscale invert transition-all ease-linear hover:contrast-50"
            />
          </a>
        </div>
      </div>
      {/* Right */}
      {submitted ? (
        <div className="flex w-full h-full items-center justify-center md:px-24 px-0">
          <div className="w-full h-fit bg-Light-Green flex flex-col items-center justify-center py-5 rounded-md">
            <Image
              src="/Thank You.svg"
              width={400}
              height={400}
              alt="My Logo"
              className=""
            />
            <button
              className="py-2 px-4 mb-4 bg-Text-Color hover:contrast-50 transition-all ease-linear text-Primary-Green rounded-sm"
              onClick={() => setSubmitted(false)}
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        <div className="flex w-full h-full items-center justify-center md:px-24 px-0">
          <div className="flex items-center h-fit md:p-10 p-5 border-solid border-Light-Green border-2 rounded-lg w-full self-end">
            <form
              className="flex flex-col gap-3 w-full"
              onSubmit={handleSubmit}
              autoComplete={"off"}
            >
              <div className="flex flex-col w-full gap-4">
                <label
                  className="font-bold font-Montserrat text-lg text-Light-Green"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="appearance-none border border-solid  border-Light-Green rounded w-full py-5 px-5 dark:text-Text-Color/[0.5] text-Background  leading-tight focus:outline-none focus:shadow-outline bg-transparent "
                  autoComplete="off"
                  placeholder="Enter Your Name"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col w-full gap-4">
                <label
                  className="font-bold font-Montserrat text-lg text-Light-Green"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="appearance-none
				bg-transparent border border-solid  border-Light-Green rounded w-full py-5 px-5 dark:text-Text-Color/[0.5] text-Background  leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="flex flex-col w-full gap-4">
                <label
                  className="font-bold font-Montserrat text-lg text-Light-Green"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="appearance-none
				bg-transparent border border-solid  border-Light-Green rounded w-full py-5 px-5 dark:text-Text-Color/[0.5] text-Background  leading-tight focus:outline-none focus:shadow-outline "
                  id="message"
                  placeholder="Enter Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex items-center justify-between pt-6">
                <button
                  className="w-full px-10 py-5 bg-Light-Green font-Montserrat capitalize font-semibold text-Text-Color rounded hover:bg-Light-Green/[0.8]  transition-all ease-linear disabled:contrast-75 "
                  type="submit"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </m.div>
  );
};

export default ContactSection;
