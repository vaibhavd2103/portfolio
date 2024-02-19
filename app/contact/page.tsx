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

function Contact() {
  const [mousePosition, setMousePosition] = useState<any>({});
  const boxRef = useRef(null);
  const handleMouseMove = (e: any) => {
    setMousePosition(getRelativeCoordinates(e, boxRef.current));
  };

  const router = useRouter();

  const platforms = [
    {
      platform: "LinkedIn",
      link: "https://www.linkedin.com/in/vaibhav-dange-2103/",
      icon: "",
    },
    {
      platform: "Mail",
      link: "",
      icon: "",
    },
    {
      platform: "Instagram",
      link: "https://www.instagram.com/vaibhavd2103/",
      icon: "",
    },
    {
      platform: "Telegram",
      link: "",
      icon: "",
    },
    {
      platform: "Whatsapp",
      link: "",
      icon: "",
    },
  ];

  return (
    <motion.div
      className="bg-dark w-full h-full min-h-screen"
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
            Contact <span className="text-secondary">me</span> {`-->`}
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
        <div className="mt-10">
          <p className="text-lg">
            Best is to send me a direct mail at{" "}
            <span
              className="text-secondary font-bold cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText("dangevaibhav21@gmail.com");
              }}
            >
              dangevaibhav21@gmail.com
            </span>
          </p>
          <p className="text-[#fff8] mt-4">
            If you want to hire me or have an idea to execute do not hesitate to
            connect with me. I will more than happy to contribute and bring
            ideas to life!
          </p>
          <p className="mt-10">
            Connect with me on other{" "}
            <span className="text-primary font-bold">platforms</span>
          </p>
          <div className="mt-4 flex gap-12">
            {platforms.map((item) => {
              return (
                <div
                  key={item.platform}
                  className="z-10 transition-all duration-200 border border-[#0000] hover:border-[#fff] rounded-lg px-8 py-2 cursor-pointer"
                  onClick={() => {
                    window.open(item.link);
                  }}
                >
                  <p>{item.platform}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
