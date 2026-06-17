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

const technicalSkills = [
  {
    category: "Programming Languages",
    data: [
      { name: "JavaScript", rate: 80 },
      { name: "Python", rate: 70 },
      { name: "Java", rate: 50 },
      { name: "C", rate: 50 },
    ],
  },
  {
    category: "Libraries, Frameworks & Technologies",
    data: [
      { name: "React", rate: 80 },
      { name: "React Native", rate: 80 },
      { name: "Expo", rate: 80 },
      { name: "NextJS", rate: 80 },
      { name: "TailwindCSS", rate: 80 },
      { name: "Sass", rate: 80 },
      { name: "GraphQL", rate: 60 },
      { name: "ExpressJS", rate: 70 },
      { name: "NodeJS", rate: 70 },
      { name: "Angular", rate: 50 },
      { name: "Spring Boot", rate: 40 },
      { name: "TensorFlow", rate: 50 },
      { name: "One Signal", rate: 50 },
      { name: "Git / GitHub", rate: 80 },
      { name: "Android Studio", rate: 50 },
      { name: "Xcode", rate: 50 },
      { name: "Linux", rate: 40 },
    ],
  },
  {
    category: "Cloud Services",
    data: [
      { name: "AWS", rate: 70 },
      { name: "Firebase", rate: 80 },
      { name: "Google Cloud", rate: 50 },
      { name: "Microsoft Azure", rate: 50 },
      { name: "Cloudflare", rate: 50 },
    ],
  },
];

const otherSkills = [
  {
    category: "Sports",
    data: ["Basketball", "Football", "Swimming", "Badminton", "Handball", "Cricket"],
  },
  {
    category: "Music",
    data: ["Singing", "Guitar", "Harmonium", "Casio", "Congo", "Audacity"],
  },
  {
    category: "Photography & Design",
    data: ["Adobe Lightroom", "Photoshop", "Figma", "Canva", "Filmora"],
  },
];

function Skills() {
  const [mousePosition, setMousePosition] = useState<any>({});
  const boxRef = useRef(null);
  const handleMouseMove = (e: any) => {
    setMousePosition(getRelativeCoordinates(e, boxRef.current));
  };

  const router = useRouter();

  return (
    <motion.div
      className="bg-dark w-screen overflow-x-hidden h-full min-h-screen"
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
            Things I <span className="text-secondary">know</span> and can{" "}
            <span className="text-secondary">do</span>
          </h1>
          <button
            onClick={() => router.back()}
            className="transition-all min-w-[90px] duration-200 border border-[#ffffff33] hover:border-white px-6 py-2 rounded-lg outline-none flex gap-2 hover:gap-4 text-sm"
          >
            <span>←</span>
            <span className="hidden md:inline">Go back</span>
          </button>
        </div>

        <div className="mt-10 relative">
          <p className="absolute text-[300px] font-extrabold opacity-5 select-none pointer-events-none leading-none">
            {"</>"}
          </p>
          <h3 className="text-3xl font-semibold [text-shadow:_0_0_10px_#fff]">
            Technical skills
          </h3>
          <div className="flex flex-col gap-8 mt-6">
            {technicalSkills.map((item) => (
              <div key={item.category}>
                <p className="text-[#fff8] font-bold text-lg mb-3">
                  {item.category}
                </p>
                <div className="flex flex-wrap gap-6">
                  {item.data.map((data) => (
                    <div key={data.name} className="flex flex-col gap-1 min-w-[110px]">
                      <p className="text-sm">
                        {data.name}
                        <span className="ml-1 text-[10px] text-[#8492a6]">
                          {data.rate}%
                        </span>
                      </p>
                      <div className="rounded-full h-1.5 w-full bg-primary-dark overflow-hidden">
                        <div
                          className="bg-secondary h-full rounded-full"
                          style={{ width: `${data.rate}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 relative">
          <h3 className="text-3xl font-semibold [text-shadow:_0_0_10px_#fff]">
            Other skills
          </h3>
          <div className="flex flex-col gap-8 mt-6">
            {otherSkills.map((item) => (
              <div key={item.category}>
                <p className="text-[#fff8] font-bold text-lg mb-3">
                  {item.category}
                </p>
                <div className="flex flex-wrap gap-4">
                  {item.data.map((data) => (
                    <span
                      key={data}
                      className="px-3 py-1 border border-[#ffffff22] rounded-full text-sm transition-all duration-300 hover:border-primary hover:text-white text-[#ffffffbb]"
                    >
                      {data}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
