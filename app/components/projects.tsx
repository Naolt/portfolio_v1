"use client";
import { urlForImage } from "@/sanity/lib/image";
import { Project } from "@/types";
import Image from "next/image";
import React from "react";
import Chip from "./chip";
import { motion as m } from "framer-motion";
import { AiFillGithub, AiFillPlayCircle } from "react-icons/ai";

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  console.log("HERE", projects);
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      id="Projects"
      className="mt-10 sm:mt-0"
    >
      <h1 className=" mt-10 block md:hidden dark:text-Text-Color text-Background font-Montserrat  text-3xl   md:text-6xl capitalize font-bold my-11 text-center md:text-start">
        Projects
      </h1>
      <div
        className="overflow-x-scroll overflow-y-hidden scrollbar-hide min-h-screen md:h-screen w-screen flex flex-col md:flex-row snap-center md:mt-0 mt-10
      md:snap-mandatory md:snap-x
      "
      >
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className={`h-screen w-screen flex md:flex-row flex-col flex-1 items-center justify-center md:justify-end snap-center`}
            >
              {/* Project Image */}
              <div className="w-full md:w-[1000px] md:h-[562px] h-fit bg-Primary-Green  visible relative">
                <Image
                  src={urlForImage(project?.images[0]).url() || ""}
                  width={1000}
                  height={705}
                  alt="Project Photo"
                  className="aspect-video"
                />
              </div>

              {/* Project description */}
              <div
                className={`md:w-[28rem] md:h-[29rem] w-full px-5  -translate-y-[2rem] md:-translate-x-[8.8rem] md:translate-y-[1rem]`}
                style={{ backgroundColor: `${project.color}` }}
              >
                <div className="flex flex-col md:absolute w-full md:w-[28rem] md:h-[29rem] -z-10 md:translate-x-5 -translate-y-5 bg-Text-Color px-12 py-12">
                  <h3 className="font-Raleway text-xl md:text-[38px] font-medium text-Background mb-2 leading-9">
                    {project.title}
                  </h3>
                  <span className="font-Montserrat text-sm md:text-[16px] font-normal text-Background mb-2">
                    / {project.role}
                  </span>
                  <p className="font-Montserrat text-sm md:text-[16px] font-normal text-Background mb-4 truncate-6-lines line-clamp-6">
                    {project.description}
                  </p>
                  {/* skills and tools used */}
                  <div className="flex gap-4 mb-8">
                    {project.skills?.map((skill, index) => {
                      return <Chip key={index} text={skill} small={true} />;
                    })}
                  </div>
                  {/* visit button */}
                  <p></p>
                  <span className="flex gap-4">
                    {project?.deployedSiteLink && (
                      <a
                        target={"_blank"}
                        href={project.deployedSiteLink || "/"}
                      >
                        <button className="flex gap-2 items-center px-4 py-2 border-2 rounded-3xl bg-Background text-Text-Color transition-all ease-linear duration-75 hover:bg-Background/[0.9] ">
                          <AiFillPlayCircle />
                          Demo
                        </button>
                      </a>
                    )}
                    {project.githubLink && (
                      <a target={"_blank"} href={project.githubLink || "/"}>
                        <button className="flex gap-2 items-center px-4 py-2 border-2 rounded-3xl border-Background text-Background transition-all ease-linear duration-75 hover:bg-Background/[0.1] ">
                          <AiFillGithub />
                          Github
                        </button>
                      </a>
                    )}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </m.div>
  );
};

export default ProjectsSection;
