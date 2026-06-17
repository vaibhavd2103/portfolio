"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { getRelativeCoordinates } from "@/utils/mouseTracker";
import NavBar from "@/components/NavBar";

const fly = {
  width: "20px",
  height: "20px",
  margin: "-10px",
  borderRadius: 10,
};

const projects = [
  {
    id: "5",
    title: "Company website (SD-Enterprises)",
    description:
      "A B2C website for a startup with various products and two stakeholders. Retailer and Customer data maintenance, hierarchy depiction, etc.",
    tech: "NextJS, Redux, React-flow, MongoDB, ExpressJS, NodeJS, Firebase, One-signal, TypeScript, TailwindCSS",
    github: "https://github.com/vaibhavd2103/sd-enterprises",
  },
  {
    id: "3",
    title: "Hospital management app",
    description:
      "A hospital management system with all features including appointment booking, precaution recommendation, emergency services and contacts, etc.",
    tech: "React-Native, NodeJS, ExpressJS, Firebase, MongoDB, One-signal, Redux, AWS",
    github: "https://github.com/vaibhavd2103/Arogya360",
  },
  {
    id: "4",
    title: "Music App",
    description: "Music streaming app with Spotify API and a user-friendly UI.",
    tech: "React-Native, Expo, Redux, Spotify, Firebase",
    github: "https://github.com/vaibhavd2103/Music-App",
  },
  {
    id: "2",
    title: "Todo Web App",
    description:
      "A daily task manager and reminder with an easy-to-use UI, personal theming, and federated authentication.",
    tech: "ReactJS, MongoDB, NodeJS, ExpressJS, Unsplash, Firebase, One-signal, Redux",
    github: "https://github.com/vaibhavd2103/Todo-Frontend",
  },
  {
    id: "1",
    title: "Moveez",
    description:
      "A movies entertainment website with data from the TMDB database. Similar to Netflix — shows trailers and deep information about movies.",
    tech: "ReactJS, TMDB, Firebase, Redux",
    github: "https://github.com/vaibhavd2103/moveez-website",
  },
];

function Projects() {
  const [mousePosition, setMousePosition] = useState<any>({});
  const boxRef = useRef(null);
  const handleMouseMove = (e: any) => {
    setMousePosition(getRelativeCoordinates(e, boxRef.current));
  };

  const router = useRouter();

  return (
    <motion.div
      className="bg-dark w-full h-full min-h-screen"
      onMouseMove={handleMouseMove}
      animate={{
        rotateX: mousePosition.centerX,
        rotateY: mousePosition.centerY,
      }}
      ref={boxRef}
    >
      <motion.div
        style={{ ...fly, position: "absolute", backgroundColor: "red" }}
        animate={{ x: mousePosition.x, y: mousePosition.y }}
      />
      <motion.div
        style={{ ...fly, position: "absolute", backgroundColor: "gold" }}
        animate={{ x: mousePosition.x, y: mousePosition.y }}
        transition={{ type: "spring" }}
      />
      <motion.div
        style={{ ...fly, position: "absolute", backgroundColor: "orange" }}
        animate={{ x: mousePosition.x, y: mousePosition.y }}
        transition={{ type: "tween" }}
      />
      <NavBar />
      <div className="w-full h-full p-10">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-4xl font-bold">
            My personal <span className="text-secondary">projects</span>
          </h1>
          <button
            onClick={() => router.back()}
            className="transition-all min-w-[90px] duration-200 border border-[#ffffff33] hover:border-white px-6 py-2 rounded-lg outline-none flex gap-2 hover:gap-4 text-sm"
          >
            <span>←</span>
            <span className="hidden md:inline">Go back</span>
          </button>
        </div>
        <div className="mt-10 px-0 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((item) => (
            <div
              key={item.id}
              className="group transition-all p-5 bg-primary-dark rounded-xl hover:bg-dark border border-[#ffffff11] hover:border-[#ffffff33] flex flex-col gap-2 items-center relative overflow-hidden"
            >
              <p className="invisible font-extrabold text-8xl absolute group-hover:visible opacity-10 mt-4 select-none">
                {"</>"}
              </p>
              <p className="text-xl font-semibold drop-shadow-2xl text-center">
                {item.title}
              </p>
              <p className="text-[#fff8] text-center text-sm">{item.description}</p>
              <p className="text-center text-xs text-[#ffffff66]">{item.tech}</p>
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-secondary underline hover:text-white transition-colors mt-1"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
