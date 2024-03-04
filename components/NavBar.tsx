"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaPaintBrush, FaPhoneAlt } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { SiAboutdotme } from "react-icons/si";

function NavBar() {
  const options = [
    {
      id: "1",
      title: "About",
      icon: <CgProfile size={20} />,
      ref: "",
      link: "/",
    },
    {
      id: "2",
      title: "Projects",
      icon: <GrProjects />,
      ref: "",
      link: "/projects",
    },
    {
      id: "4",
      title: "Skills",
      icon: <FaPaintBrush />,
      ref: "",
      link: "/skills",
    },
    {
      id: "3",
      title: "Contact",
      icon: <FaPhoneAlt />,
      ref: "",
      link: "/contact",
    },
  ];
  const router = useRouter();
  return (
    <div className="backdrop-blur-xl w-min left-[calc(100vw-120px)] flex md:flex-row flex-row sticky top-4 md:left-[calc(100vw-350px)] md:right-4 bg-[#0A264755] rounded-lg">
      {options.map((item) => {
        return (
          <div
            key={item.id}
            onClick={() => {
              router.push(item.link);
            }}
            className="cursor-pointer px-4 py-2 rounded-lg hover:bg-secondary hover:shadow-lg hover:shadow-secondary-neon transition-all"
          >
            <p className="hidden md:flex">{item.title}</p>
            <div className="md:hidden flex">{item.icon}</div>
          </div>
        );
      })}
    </div>
  );
}

export default NavBar;
