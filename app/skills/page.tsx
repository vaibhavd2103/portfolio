"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { useMotionValue, useTransform, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { getRelativeCoordinates } from "@/utils/mouseTracker";

const css = {
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

function Skills() {
  const [mousePosition, setMousePosition] = useState<any>({});
  const boxRef = useRef(null);
  const handleMouseMove = (e: any) => {
    setMousePosition(getRelativeCoordinates(e, boxRef.current));
  };

  const router = useRouter();

  const technicalSkills = [
    {
      category: "Programming languages",
      data: [
        {
          name: "Javascript",
          rate: 80,
        },
        {
          name: "Python",
          rate: 70,
        },
        {
          name: "Java",
          rate: 50,
        },
        {
          name: "C",
          rate: 50,
        },
      ],
    },
    {
      category: "Libraries, Frameworks and Technologies",
      data: [
        {
          name: "React",
          rate: 80,
        },
        {
          name: "React-Native",
          rate: 80,
        },
        {
          name: "Expo",
          rate: 80,
        },
        {
          name: "Spring-boot",
          rate: 40,
        },
        {
          name: "NextJS",
          rate: 80,
        },
        {
          name: "TailwindCSS",
          rate: 80,
        },
        {
          name: "Sass",
          rate: 80,
        },
        {
          name: "Angular",
          rate: 50,
        },
        {
          name: "Tensorflow",
          rate: 50,
        },
        {
          name: "GraphQL",
          rate: 60,
        },
        {
          name: "ExpressJS",
          rate: 70,
        },
        {
          name: "NodeJS",
          rate: 70,
        },
        {
          name: "One Signal",
          rate: 50,
        },
        {
          name: "Git/Github",
          rate: 80,
        },
        {
          name: "Android studio",
          rate: 50,
        },
        {
          name: "Xcode",
          rate: 50,
        },
        {
          name: "Linux",
          rate: 40,
        },
        {
          name: "Android studio",
          rate: 50,
        },
      ],
    },
    {
      category: "Cloud services",
      data: [
        {
          name: "AWS",
          rate: 70,
        },
        {
          name: "Firebase",
          rate: 80,
        },
        {
          name: "Google cloud services",
          rate: 50,
        },
        {
          name: "Microsoft Azure",
          rate: 50,
        },
        {
          name: "Cloudflare",
          rate: 50,
        },
      ],
    },
  ];

  const otherSkills = [
    {
      category: "Sports",
      data: [
        "Basketball",
        "Football",
        "Swimming",
        "Badminton",
        "Handball",
        "Cricket",
      ],
    },
    {
      category: "Music",
      data: ["Singing", "Guitar", "Harmonium", "Casio", "Congo", "Audacity"],
    },
    {
      category: "Photography and Designing",
      data: ["Adobe", "Lightroom", "Photoshop", "Figma", "Canva", "Filmora"],
    },
  ];

  return (
    <motion.div
      className="bg-dark w-screen overflow-x-hidden h-full min-h-screen"
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
            Things which I <span className="text-secondary">know</span> and I{" "}
            <span className="text-secondary">can do </span>
            {`-->`}
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
        <div className="mt-10 relative">
          <p className="absolute text-[400px] font-extrabold opacity-10 m-o">{`</>`}</p>
          <h3 className="text-3xl font-semibold font-sans [text-shadow:_0_0_10px_#fff]">
            Technical skills
          </h3>
          <div className="flex flex-col gap-8 mt-4">
            {technicalSkills.map((item) => {
              return (
                <div key={item.category}>
                  <p className="text-[#fff8] font-bold text-xl">
                    {item.category}
                  </p>
                  <div className="flex flex-wrap gap-10">
                    {item.data.map((data) => {
                      return (
                        <div
                          key={data.name}
                          className="flex flex-col gap-1 min-w-[100px]"
                        >
                          <p>
                            {data.name}
                            <span className="ml-2 text-[10px] text-gray">
                              {data.rate}%
                            </span>
                          </p>
                          <div className="rounded-lg h-2 w-full bg-primary-dark overflow-hidden">
                            <div
                              className={`bg-secondary h-full`}
                              style={{ width: `${data.rate}%` }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-20 relative">
          <h3 className="text-3xl font-semibold font-sans [text-shadow:_0_0_10px_#fff]">
            Other skills
          </h3>
          <div className="flex flex-col gap-8 mt-4">
            {otherSkills.map((item) => {
              return (
                <div key={item.category}>
                  <p className="text-[#fff8] font-bold text-xl">
                    {item.category}
                  </p>
                  <div className="flex flex-wrap gap-10">
                    {item.data.map((data) => {
                      return (
                        <div
                          key={data}
                          className="flex flex-col gap-1 min-w-[100px] transition-all duration-300 border-b-4 border-[#0000] hover:border-b-4 hover:border-primary"
                        >
                          <p>{data}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
