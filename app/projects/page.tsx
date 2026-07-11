"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: "1",
    title: "SD-Enterprises",
    subtitle: "B2C Company Website",
    desc: "Full-stack B2C platform for a startup — retailer and customer portals, product hierarchy, real-time push notifications, and admin dashboard.",
    tech: ["Next.js", "Redux", "MongoDB", "Express", "Firebase", "TypeScript", "Tailwind"],
    github: "https://github.com/vaibhavd2103/sd-enterprises",
    live: "",
    accent: "var(--accent)",
  },
  {
    id: "2",
    title: "Arogya 360",
    subtitle: "Hospital Management App",
    desc: "Comprehensive hospital management system — appointment booking, emergency contacts, precaution recommendations, and patient records.",
    tech: ["React Native", "Node.js", "Firebase", "MongoDB", "AWS", "Redux"],
    github: "https://github.com/vaibhavd2103/Arogya360",
    live: "",
    accent: "#2d6a4f",
  },
  {
    id: "3",
    title: "Music App",
    subtitle: "Streaming Application",
    desc: "Spotify-powered music streaming app with playlist management, artist discovery, and a smooth player UI.",
    tech: ["React Native", "Expo", "Redux", "Spotify API", "Firebase"],
    github: "https://github.com/vaibhavd2103/Music-App",
    live: "",
    accent: "#1db954",
  },
  {
    id: "4",
    title: "Todo Web App",
    subtitle: "Task Manager",
    desc: "Daily task manager with federated auth, personal theming, push reminders, and Unsplash-powered backgrounds.",
    tech: ["React", "MongoDB", "Express", "Firebase", "Redux", "Unsplash API"],
    github: "https://github.com/vaibhavd2103/Todo-Frontend",
    live: "",
    accent: "#40916c",
  },
  {
    id: "5",
    title: "Moveez",
    subtitle: "Movies Entertainment",
    desc: "Netflix-style movie discovery website — trailers, cast info, ratings, and recommendations from the TMDB database.",
    tech: ["React", "TMDB API", "Firebase", "Redux"],
    github: "https://github.com/vaibhavd2103/moveez-website",
    live: "",
    accent: "#52b788",
  },
];

export default function Projects() {
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
          <p className="handwritten text-lg mb-2">Some of my favorite projects</p>
          <h1 className="font-heading font-black text-5xl md:text-6xl" style={{ color: "var(--text-primary)" }}>
            Take a look<br />at my works
          </h1>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 stagger-children">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl overflow-hidden flex flex-col cursor-default group"
              style={{ transition: "all 0.3s ease" }}
            >
              {/* Accent bar — Rivers signature */}
              <div className="h-1 w-full" style={{ background: p.accent }} />

              {/* Card content */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h2 className="font-heading font-bold text-lg" style={{ color: "var(--text-primary)" }}>
                      {p.title}
                    </h2>
                    <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{p.subtitle}</p>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0"
                       style={{ background: p.accent, boxShadow: `0 0 8px ${p.accent}80` }} />
                </div>

                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-muted)" }}>
                  {p.desc}
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {p.tech.map(t => (
                    <span key={t} className="text-[11px] px-2.5 py-0.5 rounded-full font-medium"
                          style={{ background: `${p.accent}15`, color: p.accent, border: `1px solid ${p.accent}30` }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-2 pt-3"
                     style={{ borderTop: "1px solid var(--border)" }}>
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-1.5 text-xs font-medium transition-colors cursor-pointer"
                     style={{ color: "var(--text-muted)" }}
                     onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                     onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>
                    <FaGithub size={14} /> GitHub
                  </a>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-1.5 text-xs font-medium transition-colors cursor-pointer"
                       style={{ color: "var(--text-muted)" }}
                       onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                       onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>
                      <FaExternalLinkAlt size={11} /> Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center reveal">
          <div className="glass rounded-2xl px-8 py-8 flex flex-col items-center gap-4">
            <h3 className="font-heading font-bold text-xl" style={{ color: "var(--text-primary)" }}>
              Have an idea? Let&apos;s build it.
            </h3>
            <Link href="/contact" className="btn-primary">Start a Project</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
