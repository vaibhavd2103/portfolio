"use client";

import Education from "@/components/Education";
import Hobbies from "@/components/Hobbies";
import WorkExp from "@/components/WorkExp";
// import useWindowDimensions from "@/utils/useWindowDimensions";
import Image from "next/image";
import React, { useRef, useState } from "react";
import "./globals.css";
import { useMotionValue, useTransform, motion } from "framer-motion";
import NavBar from "@/components/NavBar";

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

function getRelativeCoordinates(event: any, referenceElement: any) {
  const position = {
    x: event.pageX,
    y: event.pageY,
  };

  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.offsetTop,
    width: referenceElement.clientWidth,
    height: referenceElement.clientHeight,
  };

  let reference = referenceElement.offsetParent;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent;
  }

  return {
    x: position.x - offset.left,
    y: position.y - offset.top,
    width: offset.width,
    height: offset.height,
    centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
    centerY:
      (position.y - offset.top - offset.height / 2) / (offset.height / 2),
  };
}

function Home() {
  // const { height, width } = useWindowDimensions();
  // const x = useMotionValue(200);
  // const y = useMotionValue(200);

  // const rotateX = useTransform(y, [0, 400], [45, -45]);
  // const rotateY = useTransform(x, [0, 400], [-45, 45]);

  // function handleMouse(event: any) {
  //   const rect = event.currentTarget.getBoundingClientRect();
  //   x.set(event.clientX - rect.left);
  //   y.set(event.clientY - rect.top);
  // }

  const [mousePosition, setMousePosition] = useState<any>({});
  const boxRef = useRef(null);
  const handleMouseMove = (e: any) => {
    setMousePosition(getRelativeCoordinates(e, boxRef.current));
  };
  return (
    <motion.div
      onMouseMove={(e) => handleMouseMove(e)}
      animate={{
        rotateX: mousePosition.centerX,
        rotateY: mousePosition.centerY,
      }}
      ref={boxRef}
      className="bg-dark h-full w-screen"
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
      <NavBar />
      <div className="flex items-center flex-col md:flex-row md:items-start p-16 w-full gap-10">
        <Image
          src={require("@/assets/Profile.jpeg")}
          alt="profile_photo"
          className="w-72 h-72 rounded-full object-cover"
        />
        <div className="flex flex-col gap-4">
          <p className="text-center md:text-left text-2xl">
            {`Hey there! I'm`}{" "}
            <span className="group font-bold text-5xl text-secondary">
              Vaibhav Dange{" "}
              <span
                className="developer_shine invisible group-hover:visible transition-all duration-300"
                style={{ fontSize: 40 }}
              >
                {`<Developer/>`}
              </span>
            </span>
          </p>
          <p className="text-center md:text-left text-[#fff8]">
            A versatile software developer with a passion for innovation and a
            diverse skill set. With 2 years of experience in web development,
            mobile applications, and database management, I excel in crafting
            robust solutions that bridge the gap between different disciplines.
            Whether collaborating with designers to enhance user experience or
            embracing agile methodologies to deliver projects efficiently, I
            thrive in dynamic environments. Outside of coding, I enjoy exploring
            new hobbies like hardware projects and data science challenges,
            driven by my belief in the power of interdisciplinary knowledge.{" "}
            {`I'm deeply committed to leveraging technology for positive change!`}
          </p>
        </div>
      </div>
      {/* <motion.div
        style={{
          width: 400,
          height: 400,
          display: "flex",
          placeItems: "center",
          placeContent: "center",
          borderRadius: 30,
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          perspective: 400,
        }}
        onMouseMove={handleMouse}
      >
        <motion.div
          style={{
            width: 150,
            height: 150,
            borderRadius: 30,
            backgroundColor: "#fff",
            rotateX,
            rotateY,
          }}
        />
      </motion.div> */}
      <Hobbies />
      <WorkExp />
      <div className="h-16"></div>
      {/* <Education /> */}
    </motion.div>
  );
}

export default Home;
