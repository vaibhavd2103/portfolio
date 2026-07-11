"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import NavBar from "@/components/NavBar";

const skillGroups = [
  {
    label: "UX/UI Design",
    color: "var(--accent)",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C"],
  },
  {
    label: "Prototyping Skills",
    color: "#2d6a4f",
    items: ["React", "React Native", "Next.js", "Expo", "Angular", "Spring Boot"],
  },
  {
    label: "Tools & Platforms",
    color: "#40916c",
    items: ["Node.js", "Express.js", "GraphQL", "TailwindCSS", "Sass", "Redux"],
  },
  {
    label: "Cloud & DevOps",
    color: "#52b788",
    items: ["AWS", "Firebase", "Google Cloud", "Azure", "Cloudflare", "Docker"],
  },
  {
    label: "Dev Tools",
    color: "#74c69d",
    items: ["Git / GitHub", "Linux", "Android Studio", "Xcode", "Figma", "Postman"],
  },
];

const technicalSkills = [
  { name: "JavaScript / TypeScript", rate: 82 },
  { name: "React & React Native",    rate: 85 },
  { name: "Next.js",                 rate: 80 },
  { name: "Node.js & Express",       rate: 72 },
  { name: "Firebase & AWS",          rate: 75 },
  { name: "TailwindCSS",             rate: 82 },
  { name: "MongoDB",                 rate: 68 },
  { name: "Python",                  rate: 65 },
];

const otherSkills = [
  { category: "Sports",                items: ["Basketball", "Football", "Swimming", "Badminton", "Handball", "Cricket"] },
  { category: "Music",                 items: ["Guitar", "Harmonium", "Casio", "Congo", "Singing", "Audacity"] },
  { category: "Photography & Design",  items: ["Adobe Lightroom", "Photoshop", "Figma", "Canva", "Filmora"] },
];

function SkillBar({ name, rate }: { name: string; rate: number }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>{name}</span>
        <span className="text-xs" style={{ color: "var(--text-muted)" }}>{rate}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${rate}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg, var(--accent), var(--accent-light))" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .stagger-children");
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
          <p className="handwritten text-lg mb-2">Things which I know and can do</p>
          <h1 className="font-heading font-black text-5xl md:text-6xl" style={{ color: "var(--text-primary)" }}>
            What I bring<br />to the table
          </h1>
        </div>

        {/* Skill category cards — Rivers 3-col pill style */}
        <div className="flex flex-col gap-6 mb-16">
          {skillGroups.map((group) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
              className="glass rounded-2xl overflow-hidden"
            >
              {/* Colored header — Rivers style */}
              <div className="px-6 py-3 flex items-center gap-2"
                   style={{ background: group.color }}>
                <span className="text-sm font-bold text-white">{group.label}</span>
              </div>
              <div className="p-6 flex flex-wrap gap-2">
                {group.items.map(item => (
                  <span key={item} className="pill">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency bars */}
        <div className="reveal mb-16">
          <p className="handwritten text-lg mb-1" style={{ color: "var(--text-muted)" }}>Proficiency levels</p>
          <h2 className="font-heading font-bold text-3xl mb-8" style={{ color: "var(--text-primary)" }}>
            Core technical skills
          </h2>
          <div className="glass rounded-2xl p-6 flex flex-col gap-5">
            {technicalSkills.map(s => <SkillBar key={s.name} {...s} />)}
          </div>
        </div>

        {/* Other skills — Rivers pill grid */}
        <div className="reveal">
          <h2 className="font-heading font-bold text-3xl mb-8" style={{ color: "var(--text-primary)" }}>
            Beyond code
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 stagger-children">
            {otherSkills.map(group => (
              <div key={group.category} className="glass rounded-2xl overflow-hidden">
                <div className="px-5 py-3" style={{ background: "var(--accent)" }}>
                  <span className="text-sm font-bold text-white">{group.category}</span>
                </div>
                <div className="p-5 flex flex-wrap gap-2">
                  {group.items.map(item => (
                    <span key={item} className="pill text-xs">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 reveal">
          <div className="glass rounded-2xl px-8 py-8 text-center flex flex-col items-center gap-4">
            <p className="handwritten text-lg" style={{ color: "var(--text-muted)" }}>Want to hire me?</p>
            <h3 className="font-heading font-bold text-xl" style={{ color: "var(--text-primary)" }}>
              Let&apos;s build something great
            </h3>
            <div className="flex gap-3">
              <Link href="/contact" className="btn-primary">Start a Project</Link>
              <Link href="/experience" className="btn-secondary">View Experience</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
