"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaPaintBrush, FaPhoneAlt } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";

const options = [
  { id: "1", title: "About", icon: <CgProfile size={18} />, link: "/" },
  { id: "2", title: "Projects", icon: <GrProjects size={16} />, link: "/projects" },
  { id: "4", title: "Skills", icon: <FaPaintBrush size={16} />, link: "/skills" },
  { id: "3", title: "Contact", icon: <FaPhoneAlt size={16} />, link: "/contact" },
];

function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-4 z-50 flex justify-end px-6">
      <div className="backdrop-blur-xl flex flex-row bg-[#0A264799] border border-[#ffffff15] rounded-xl overflow-hidden shadow-lg">
        {options.map((item) => {
          const active = pathname === item.link;
          return (
            <Link
              key={item.id}
              href={item.link}
              className={`flex items-center gap-2 px-4 py-2.5 transition-all text-sm font-medium
                ${active
                  ? "bg-secondary text-white shadow-inner"
                  : "hover:bg-secondary/60 hover:text-white text-[#ffffffcc]"
                }`}
            >
              <span className="flex">{item.icon}</span>
              <span className="hidden md:inline">{item.title}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default NavBar;
