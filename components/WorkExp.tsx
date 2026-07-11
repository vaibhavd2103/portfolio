"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const workExp = [
  {
    id: "1",
    company: "Serri Tech Solutions",
    jobRole: "Software Developer",
    duration: "7 months",
    link: "https://serri.club/",
    type: "Full-time",
  },
  {
    id: "2",
    company: "DWebBox",
    jobRole: "Frontend Developer",
    duration: "9 months",
    link: "https://dwebbox.com/#home",
    type: "Freelance",
  },
  {
    id: "3",
    company: "Oviyum Technologies",
    jobRole: "Frontend Dev & DevOps Engineer",
    duration: "12 months",
    link: "https://oviyum.com/",
    type: "Full-time",
  },
  {
    id: "4",
    company: "QuadB",
    jobRole: "Frontend Developer",
    duration: "14 months",
    link: "https://www.quadb.in/",
    type: "Full-time",
  },
  {
    id: "5",
    company: "ShellCode Solutions",
    jobRole: "Frontend Developer",
    duration: "1 month",
    link: "https://www.shellcode.co.in/index.html",
    type: "Contract",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function WorkExp() {
  return (
    <section className="py-24 px-6 relative">
      {/* background accent */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/8 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-14">
          <p className="text-secondary text-sm font-semibold tracking-widest uppercase mb-3">
            Experience
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
            Where I&apos;ve worked
          </h2>
          <p className="mt-4 text-white/40 max-w-md mx-auto text-sm leading-relaxed">
            2.5+ years across startups and agencies, shipping web and mobile products.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {workExp.map((exp, i) => (
            <motion.div
              key={exp.id}
              variants={item}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 flex flex-col gap-3 group cursor-default transition-all duration-300 hover:border-white/15 hover:shadow-xl hover:shadow-secondary/5"
            >
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary font-heading font-bold text-sm">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-white/40 font-medium">
                  {exp.type}
                </span>
              </div>

              <div>
                <h3 className="font-heading font-bold text-white text-base">{exp.company}</h3>
                <p className="text-white/50 text-sm mt-0.5">{exp.jobRole}</p>
              </div>

              <p className="text-white/30 text-xs font-medium">
                Duration — <span className="text-white/60">{exp.duration}</span>
              </p>

              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center gap-1.5 text-xs text-white/25 hover:text-secondary transition-colors duration-200 cursor-pointer w-fit"
              >
                Visit company <FaExternalLinkAlt size={10} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
