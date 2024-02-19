"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { getRelativeCoordinates } from "../page";
import { useMotionValue, useTransform, motion } from "framer-motion";
import { useRouter } from "next/navigation";

export const css = {
  box: {
    backgroundColor: "linen",
    width: "30vw",
    height: "30vw",
  },
  fly: {
    width: "20px",
    height: "20px",
    margin: "-10px",
    backgroundColor: "red",
    borderRadius: 10,
  },
};

function Projects() {
  const projects = [
    {
      id: "5",
      title: "Company website (SD-Enterprises)",
      description:
        "A B2C website for a startup with various products and two stakeholders. Retailer and Customer data maintenance, hierarchy depiction, etc.",
      tech: "NextJS, Redux, React-flow, MongoDB, ExpressJS, NodeJS, Firebase, One-signal, Typescript, TailwindCSS",
      image: "",
      github: "",
      live: "",
    },
    {
      id: "3",
      title: "Hospital management app",
      description:
        "A hospital management system with all features including appointment booking, precaution recommendation, emergency services and contacts, etc.",
      tech: "React-Native, NodeJS, ExpressJS, Firebase, MongoDB, One-signal, Redux and AWS",
      image: "",
      github: "",
      live: "",
    },
    {
      id: "4",
      title: "Music App",
      description: "Music streaming app with Spotify API and user friendly UI.",
      tech: "React-Native, Expo, Redux, Spotify and Firebase",
      image: "",
      github: "",
      live: "",
    },
    {
      id: "2",
      title: "Todo Web app",
      description:
        "A daily task manager and reminder with an easy to use user interface with personal theming and federated authentication.",
      tech: "ReactJS, MongoDB, NodeJS, ExpressJS, Unsplash, Firebase, One-signal and Redux",
      image: "",
      github: "",
      live: "",
    },
    {
      id: "1",
      title: "Moveez website",
      description:
        "I created a movies entertainment website which had data from TMDB movies database. It tastes similar to Netflix and also shows you trailer and other deep and relevant information about the movies.",
      tech: "ReactJS, TMDB, Firebase and Redux",
      image: "",
      github: "",
      live: "",
    },
  ];
  const [mousePosition, setMousePosition] = useState<any>({});
  const boxRef = useRef(null);
  const handleMouseMove = (e: any) => {
    setMousePosition(getRelativeCoordinates(e, boxRef.current));
  };

  const router = useRouter();

  return (
    <motion.div
      className="bg-dark w-full h-full"
      onMouseMove={(e) => handleMouseMove(e)}
      animate={{
        rotateX: mousePosition.centerX,
        rotateY: mousePosition.centerY,
      }}
      ref={boxRef}
    >
      <motion.div
        style={{ ...css.fly, position: "absolute" }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
      />
      <motion.div
        style={{ ...css.fly, position: "absolute", backgroundColor: "gold" }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring" }}
      />
      <motion.div
        style={{
          ...css.fly,
          position: "absolute",
          backgroundColor: "orange",
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "tween" }}
      />
      <div className="bg-dark w-full h-full p-10">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-4xl font-bold">
            My personal <span className="text-secondary">projects</span> {`-->`}
          </h1>
          <button
            onClick={() => {
              router.back();
            }}
            className="transition-all min-w-[90px] duration-200 border-[1px] md:border-dark hover:border-[#fff] px-8 py-2 rounded-lg outline-none z-10 gap-2 hover:gap-4 flex"
          >
            <p>{`<--`}</p>
            <p className="hidden md:flex">Go back</p>
          </button>
        </div>
        <div className="mt-16 px-0 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((item) => {
            return (
              <div
                key={item.id}
                className="group transition-all p-4 bg-primary-dark rounded-lg hover:bg-dark border-dark hover:border-gray-dark border-2 flex flex-col gap-2 items-center relative"
              >
                <p className="invisible font-extrabold text-8xl absolute group-hover:visible opacity-10 mt-4">{`</>`}</p>
                {/* <Image/> */}
                <p className="text-xl font-semibold drop-shadow-2xl text-center">
                  {item.title}
                </p>
                <p className="text-[#fff8] text-center">{item.description}</p>
                <p className="text-center">{item.tech}</p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
