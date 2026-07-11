"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import { FaExternalLinkAlt } from "react-icons/fa";

const workExp = [
  {
    id: "4",
    company: "QuadB",
    role: "Frontend Developer",
    period: "Oct 2023 – Dec 2024",
    duration: "14 months",
    type: "Full-time",
    location: "Remote",
    link: "https://www.quadb.in/",
    desc: "Built and maintained complex frontend features for a blockchain analytics platform. Led UI architecture decisions and improved performance across the dashboard.",
  },
  {
    id: "3",
    company: "Oviyum Technologies",
    role: "Frontend Dev & DevOps Engineer",
    period: "Oct 2022 – Oct 2023",
    duration: "12 months",
    type: "Full-time",
    location: "Hybrid",
    link: "https://oviyum.com/",
    desc: "Developed responsive React applications and managed AWS deployments. Set up CI/CD pipelines and containerized services using Docker.",
  },
  {
    id: "2",
    company: "DWebBox",
    role: "Frontend Developer",
    period: "Jan 2022 – Oct 2022",
    duration: "9 months",
    type: "Freelance",
    location: "Remote",
    link: "https://dwebbox.com/#home",
    desc: "Delivered client web projects using React and Tailwind. Collaborated directly with design teams to translate Figma designs into pixel-perfect UIs.",
  },
  {
    id: "1",
    company: "Serri Tech Solutions",
    role: "Software Developer",
    period: "Mar 2021 – Oct 2021",
    duration: "7 months",
    type: "Internship",
    location: "On-site",
    link: "https://serri.club/",
    desc: "First professional role — built full-stack features using React and Node.js, contributed to database schema design and REST API development.",
  },
  {
    id: "5",
    company: "ShellCode Solutions",
    role: "Frontend Developer",
    period: "Feb 2021 – Mar 2021",
    duration: "1 month",
    type: "Contract",
    location: "Remote",
    link: "https://www.shellcode.co.in/index.html",
    desc: "Short-term contract to build and deliver a landing page and dashboard UI for a client product.",
  },
];

const achievements = [
  { value: "5+",  label: "Companies worked with" },
  { value: "2.5+", label: "Years of experience" },
  { value: "10+", label: "Products shipped" },
];

export default function Experience() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .stagger-children");
    const obs = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <NavBar />

      <main className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="handwritten text-lg mb-2">Key moments in my career</p>
          <h1 className="font-heading font-black text-5xl md:text-6xl" style={{ color: "var(--text-primary)" }}>
            Experience
          </h1>
          <p className="mt-4 text-sm max-w-sm mx-auto leading-relaxed" style={{ color: "var(--text-muted)" }}>
            From internships to full-time roles — here&apos;s how I&apos;ve grown as a developer.
          </p>
        </div>

        {/* Achievement stats — Rivers style cards */}
        <div className="grid grid-cols-3 gap-4 mb-20 stagger-children">
          {achievements.map(a => (
            <div key={a.label} className="glass accent-line rounded-2xl px-4 py-5 text-center cursor-default">
              <div className="font-heading font-black text-3xl" style={{ color: "var(--accent)" }}>{a.value}</div>
              <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{a.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
               style={{ background: "linear-gradient(to bottom, transparent, var(--accent), transparent)" }} />

          <div className="flex flex-col gap-12">
            {workExp.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={exp.id} className="relative flex items-start md:gap-0 gap-4">
                  {/* Desktop alternating layout */}
                  <div className={`hidden md:flex w-full items-start gap-8 ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
                    {/* Card */}
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.65, ease: [0.22,1,0.36,1] }}
                      whileHover={{ y: -4 }}
                      className="glass accent-line rounded-2xl p-6 flex-1 flex flex-col gap-3 cursor-default"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                                style={{ background: "var(--bg-secondary)", color: "var(--accent)" }}>
                            {exp.company}
                          </span>
                          <p className="text-xs mt-1.5" style={{ color: "var(--text-muted)" }}>{exp.period}</p>
                        </div>
                        <span className="text-xs px-2.5 py-0.5 rounded-full"
                              style={{ background: "var(--bg-secondary)", color: "var(--text-muted)", border: "1px solid var(--border)" }}>
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-lg" style={{ color: "var(--text-primary)" }}>
                        {exp.role}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{exp.desc}</p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                          📍 {exp.location} · {exp.duration}
                        </span>
                        <a href={exp.link} target="_blank" rel="noopener noreferrer"
                           className="flex items-center gap-1 text-xs transition-colors cursor-pointer"
                           style={{ color: "var(--text-muted)" }}
                           onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                           onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>
                          Visit <FaExternalLinkAlt size={9} />
                        </a>
                      </div>
                    </motion.div>

                    {/* Center dot */}
                    <div className="flex-shrink-0 w-10 flex justify-center pt-6">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="timeline-dot filled"
                      />
                    </div>

                    {/* Spacer */}
                    <div className="flex-1" />
                  </div>

                  {/* Mobile card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="md:hidden glass accent-line rounded-2xl p-5 w-full flex flex-col gap-3"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                              style={{ background: "var(--bg-secondary)", color: "var(--accent)" }}>
                          {exp.company}
                        </span>
                        <p className="text-xs mt-1.5" style={{ color: "var(--text-muted)" }}>{exp.period}</p>
                      </div>
                      <span className="text-xs px-2 py-0.5 rounded-full"
                            style={{ background: "var(--bg-secondary)", color: "var(--text-muted)" }}>
                        {exp.type}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold" style={{ color: "var(--text-primary)" }}>{exp.role}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{exp.desc}</p>
                    <a href={exp.link} target="_blank" rel="noopener noreferrer"
                       className="text-xs flex items-center gap-1 cursor-pointer" style={{ color: "var(--accent)" }}>
                      Visit company <FaExternalLinkAlt size={9} />
                    </a>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center reveal">
          <div className="glass rounded-2xl px-8 py-8 flex flex-col items-center gap-4">
            <p className="handwritten text-lg" style={{ color: "var(--text-muted)" }}>Want to work together?</p>
            <h3 className="font-heading font-bold text-2xl" style={{ color: "var(--text-primary)" }}>
              Let&apos;s make your product shine
            </h3>
            <div className="flex gap-3">
              <Link href="/contact" className="btn-primary">Start a Project</Link>
              <a href="mailto:dangevaibhav21@gmail.com" className="btn-secondary">Book a Call</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
