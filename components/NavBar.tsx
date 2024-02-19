"use client";

import { useRouter } from "next/navigation";
import React from "react";

function NavBar() {
  const options = [
    {
      id: "1",
      title: "About",
      icon: "",
      ref: "",
      link: "/",
    },
    {
      id: "2",
      title: "Projects",
      icon: "",
      ref: "",
      link: "/projects",
    },
    {
      id: "4",
      title: "Skills",
      icon: "",
      ref: "",
      link: "/skills",
    },
    {
      id: "3",
      title: "Contact",
      icon: "",
      ref: "",
      link: "/contact",
    },
  ];
  const router = useRouter();
  return (
    <div className="hidden md:flex fixed top-4 right-10 bg-primary-dark rounded-lg">
      {options.map((item) => {
        return (
          <div
            key={item.id}
            onClick={() => {
              router.push(item.link);
            }}
            className="cursor-pointer px-4 py-2 rounded-lg hover:bg-secondary hover:shadow-lg hover:shadow-secondary-neon transition-all"
          >
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default NavBar;
