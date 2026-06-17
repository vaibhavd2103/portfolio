"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { getRelativeCoordinates } from "@/utils/mouseTracker";
import NavBar from "@/components/NavBar";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

const fly = {
  width: "20px",
  height: "20px",
  margin: "-10px",
  borderRadius: 10,
};

const platforms = [
  {
    platform: "LinkedIn",
    link: "https://www.linkedin.com/in/vaibhav-dange-2103/",
    icon: <FaLinkedin size={20} />,
    color: "#0A66C2",
  },
  {
    platform: "GitHub",
    link: "https://github.com/vaibhavd2103",
    icon: <FaGithub size={20} />,
    color: "#ffffff",
  },
  {
    platform: "Instagram",
    link: "https://www.instagram.com/vaibhavd2103/",
    icon: <FaInstagram size={20} />,
    color: "#E1306C",
  },
  {
    platform: "Email",
    link: "mailto:dangevaibhav21@gmail.com",
    icon: <FaEnvelope size={20} />,
    color: "#EA4335",
  },
];

function Contact() {
  const [mousePosition, setMousePosition] = useState<any>({});
  const [copied, setCopied] = useState(false);
  const boxRef = useRef(null);
  const handleMouseMove = (e: any) => {
    setMousePosition(getRelativeCoordinates(e, boxRef.current));
  };

  const router = useRouter();

  const copyEmail = () => {
    navigator.clipboard.writeText("dangevaibhav21@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
            Contact <span className="text-secondary">me</span>
          </h1>
          <button
            onClick={() => router.back()}
            className="transition-all min-w-[90px] duration-200 border border-[#ffffff33] hover:border-white px-6 py-2 rounded-lg outline-none flex gap-2 hover:gap-4 text-sm"
          >
            <span>←</span>
            <span className="hidden md:inline">Go back</span>
          </button>
        </div>

        <div className="mt-10 max-w-xl">
          <p className="text-lg">
            Reach me directly at{" "}
            <button
              onClick={copyEmail}
              className="text-secondary font-bold hover:underline transition-all"
            >
              dangevaibhav21@gmail.com
            </button>
            {copied && (
              <span className="ml-2 text-sm text-green-400">Copied!</span>
            )}
          </p>
          <p className="text-[#ffffff99] mt-3 text-sm leading-relaxed">
            If you want to hire me or have an idea to bring to life, do not
            hesitate to reach out. I will be more than happy to contribute!
          </p>

          <div className="mt-10">
            <p className="text-[#ffffff99] text-sm mb-4">Find me on</p>
            <div className="flex flex-wrap gap-3">
              {platforms.map((item) => (
                <a
                  key={item.platform}
                  href={item.link}
                  target={item.link.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 border border-[#ffffff22] rounded-xl hover:border-[#ffffff66] transition-all duration-200 text-sm text-[#ffffffcc] hover:text-white group"
                >
                  <span
                    className="transition-colors"
                    style={{ color: item.color }}
                  >
                    {item.icon}
                  </span>
                  {item.platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
