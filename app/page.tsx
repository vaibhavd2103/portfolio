"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import NavBar from "@/components/NavBar";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaArrowRight, FaCode, FaMobile, FaCloud } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi2";

/* ── Parallax hero background ───────────────────────────── */
function ParallaxBg() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0,1], ["0%",  "35%"]);
  const y2 = useTransform(scrollYProgress, [0,1], ["0%",  "20%"]);
  const y3 = useTransform(scrollYProgress, [0,1], ["0%",  "50%"]);
  const op = useTransform(scrollYProgress, [0,0.7], [1, 0]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Deep bg code texture */}
      <motion.div style={{ y: y1, opacity: op }}
        className="absolute inset-0 flex items-center justify-center select-none">
        <pre className="text-[10px] leading-5 font-mono whitespace-pre opacity-[0.04]"
          style={{ color: "var(--accent)" }}>
{`const developer = {
  name: "Vaibhav Dange",
  stack: ["React","Next.js","Node","RN"],
  passion: "building products",
  years: 2.5,
};

function build(idea) {
  return developer
    .stack
    .reduce((app, tech) => ({
      ...app,
      [tech]: idea,
    }), {});
}

// Always shipping ✓
export default developer;`}
        </pre>
      </motion.div>

      {/* Mid layer — floating code blocks */}
      <motion.div style={{ y: y2 }} className="absolute inset-0">
        {[
          { top: "12%",  left: "6%",   text: "git commit -m 'feat: ✨'" },
          { top: "25%",  right: "5%",  text: "npm run build" },
          { top: "60%",  left: "4%",   text: "docker compose up" },
          { top: "70%",  right: "7%",  text: "const [state, setState]" },
          { top: "40%",  left: "3%",   text: "async/await fetch()" },
          { top: "85%",  left: "8%",   text: "tsx ∙ tailwind ∙ prisma" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.15 + 0.5 }}
            className="absolute font-mono text-[11px] px-3 py-1.5 rounded-lg glass hidden md:block"
            style={{ top: item.top, left: (item as any).left, right: (item as any).right,
                     color: "var(--accent)", opacity: 0.45 }}
          >
            {item.text}
          </motion.div>
        ))}
      </motion.div>

      {/* Orbs */}
      <motion.div
        style={{ y: y3, background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20"
      />
      <motion.div
        style={{ y: y2, background: "radial-gradient(circle, var(--accent-light) 0%, transparent 70%)" }}
        className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full opacity-10"
      />
    </div>
  );
}

/* ── Reusable parallax image layer ─────────────────────── */
/**
 * The image div is 130 % of the section's height and sits 15 % above the top.
 * As scrollYProgress goes 0 → 1 (section enters bottom → exits top of viewport),
 * the image moves from +15% → -15% of its own height — roughly 30 % of the
 * section height. Because the user's content travels a full viewport + section
 * height, the image moves noticeably slower, creating a clear parallax depth.
 */
function ParallaxBgLayer({
  src,
  scrollYProgress,
  opacity = 0.20,
  tintOpacity = 0.28,
}: {
  src: string;
  scrollYProgress: MotionValue<number>;
  opacity?: number;
  tintOpacity?: number;
}) {
  // % is relative to element's own size → 15 % of 130 % section height ≈ 20 % of section
  const y = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);

  return (
    <>
      {/* Parallax image */}
      <motion.div
        aria-hidden
        className="pointer-events-none select-none"
        style={{
          position: "absolute",
          top:    "-15%",
          left:   0,
          right:  0,
          height: "130%",
          y,
          opacity,
          backgroundImage:    `url(${src})`,
          backgroundSize:     "cover",
          backgroundPosition: "center",
          backgroundRepeat:   "no-repeat",
          /* keep colours compatible with green palette */
          filter: "grayscale(30%) saturate(120%)",
        }}
      />
      {/* Subtle gradient tint — edges fade to bg, centre lets image breathe */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(
            ellipse 80% 80% at 50% 50%,
            transparent 0%,
            color-mix(in srgb, var(--bg) 60%, transparent) 100%
          )`,
          opacity: tintOpacity,
        }}
      />
      {/* Flat base coat so text is always readable */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--bg)", opacity: 0.30 }}
      />
    </>
  );
}

/* ── Stat card ──────────────────────────────────────────── */
function StatCard({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.22,1,0.36,1] }}
      whileHover={{ y: -4 }}
      className="glass accent-line rounded-2xl px-6 py-5 flex flex-col gap-1 cursor-default"
    >
      <span className="font-heading text-3xl font-black" style={{ color: "var(--gold)" }}>{value}</span>
      <span className="text-sm" style={{ color: "var(--text-muted)" }}>{label}</span>
    </motion.div>
  );
}

/* ── Service card (Rivers style 3-col) ─────────────────── */
const services = [
  { icon: <FaCode size={26} />,   title: "Web Development",    desc: "Full-stack web apps with Next.js, React, Node.js and modern cloud infra.",   color: "var(--accent)" },
  { icon: <FaMobile size={26} />, title: "Mobile Apps",         desc: "Cross-platform React Native apps for iOS and Android with smooth UX.",        color: "var(--cyan)" },
  { icon: <FaCloud size={26} />,  title: "Cloud & DevOps",     desc: "AWS, Firebase, GCP deployments, CI/CD pipelines and scalable architecture.",   color: "var(--gold)" },
];

/* ── Hobbies ────────────────────────────────────────────── */
const hobbies = [
  { emoji: "💻", title: "Software Development", desc: "SaaS, open-source, and side projects fuel my creativity outside of work." },
  { emoji: "🏀", title: "Sports & Fitness",      desc: "Basketball, football, badminton, swimming — and competitive Valorant." },
  { emoji: "🎸", title: "Music",                 desc: "Guitar, harmonium, casio, congo. I sing and post covers occasionally." },
  { emoji: "📸", title: "Photography",           desc: "Mobile photography — candid moments and playing with light." },
];

export default function Home() {
  /* Section refs for parallax tracking */
  const servicesSectionRef = useRef<HTMLElement>(null);
  const aboutSectionRef    = useRef<HTMLElement>(null);
  const hobbiesSectionRef  = useRef<HTMLElement>(null);

  const { scrollYProgress: servicesProgress } = useScroll({
    target: servicesSectionRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: aboutProgress } = useScroll({
    target: aboutSectionRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: hobbiesProgress } = useScroll({
    target: hobbiesSectionRef,
    offset: ["start end", "end start"],
  });

  /* Scroll reveal */
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .stagger-children");
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const socials = [
    { icon: <FaGithub size={17} />,    href: "https://github.com/vaibhavd2103",                       label: "GitHub" },
    { icon: <FaLinkedin size={17} />,  href: "https://www.linkedin.com/in/vaibhav-dange-2103/",       label: "LinkedIn" },
    { icon: <FaInstagram size={17} />, href: "https://www.instagram.com/vaibhavd2103/",               label: "Instagram" },
    { icon: <FaEnvelope size={17} />,  href: "mailto:dangevaibhav21@gmail.com",                       label: "Email" },
  ];

  return (
    <div className="min-h-screen grid-bg" style={{ background: "var(--bg)" }}>
      <NavBar />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 parallax-section overflow-hidden">
        <ParallaxBg />

        <div className="relative z-10 max-w-3xl mx-auto px-6 w-full">
          {/* Rivers-style: centered hero */}
          <motion.div className="flex flex-col items-center text-center gap-6">

            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="pill"
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--gold)" }} />
              Available for new opportunities
            </motion.div>

            {/* Handwritten annotation */}
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="handwritten text-base"
            >
              Hey there! I build things for the web & mobile
            </motion.p>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.75, ease: [0.22,1,0.36,1] }}
              className="font-heading font-black leading-[1.0] tracking-tight"
              style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)", color: "var(--text-primary)" }}
            >
              Vaibhav
              <br />
              <span className="text-shine">Dange</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.65 }}
              className="max-w-md text-base leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              A versatile software developer with{" "}
              <strong style={{ color: "var(--text-secondary)" }}>2.5+ years</strong> of experience
              crafting web apps, mobile products, and cloud infrastructure that make an impact.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              <Link href="/projects" className="btn-primary">
                Explore Works <FaArrowRight size={13} />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Start a Project
              </Link>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center gap-2 pt-2"
            >
              {socials.map(s => (
                <a key={s.label} href={s.href} aria-label={s.label}
                   target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 rounded-full flex items-center justify-center glass transition-all duration-200 hover:scale-110 cursor-pointer"
                   style={{ color: "var(--text-muted)" }}
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>

            {/* Profile photo floating below */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35, duration: 0.75, ease: [0.22,1,0.36,1] }}
              className="mt-4 relative"
            >
              <motion.div
                animate={{ y: [0,-10,0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-36 h-36 rounded-full overflow-hidden"
                style={{ border: "3px solid var(--accent)", boxShadow: "0 0 40px var(--accent-glow)" }}
              >
                <Image
                  src={require("@/assets/Profile.jpeg")}
                  alt="Vaibhav Dange"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute -bottom-1 -right-2 pill text-xs py-1 px-2.5">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#22c55e" }} />
                Open to work
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: "var(--text-muted)" }}
        >
          <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          >
            <HiArrowDown size={16} />
          </motion.div>
        </motion.div>
      </section>

      {/* ── SERVICES (Rivers 3-card section) ────────────── */}
      <section ref={servicesSectionRef} className="py-24 px-6 relative overflow-hidden">
        {/* Parallax background: colourful code on screen */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
          <ParallaxBgLayer
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1920&q=60"
            scrollYProgress={servicesProgress}
            opacity={0.20}
          />
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-12 reveal">
            <p className="handwritten text-lg mb-2">What I do best</p>
            <h2 className="font-heading font-black text-4xl md:text-5xl" style={{ color: "var(--text-primary)" }}>
              What I bring<br />to the table
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 stagger-children">
            {services.map((s, i) => (
              <div key={i} className="glass accent-line rounded-2xl p-6 flex flex-col gap-4 cursor-default relative overflow-hidden">
                {/* Coloured top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                     style={{ background: s.color }} />
                <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                     style={{ background: `color-mix(in srgb, ${s.color} 12%, transparent)`, color: s.color }}>
                  {s.icon}
                </div>
                <h3 className="font-heading font-bold text-base" style={{ color: "var(--text-primary)" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT (Rivers about grid) ────────────────────── */}
      <section ref={aboutSectionRef} className="py-24 px-6 relative overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
        {/* Parallax background: developer workspace */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
          <ParallaxBgLayer
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=60"
            scrollYProgress={aboutProgress}
            opacity={0.18}
          />
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="reveal text-center mb-12">
            <p className="handwritten text-lg mb-2">Designing simple user experiences</p>
            <h2 className="font-heading font-black text-4xl md:text-5xl" style={{ color: "var(--text-primary)" }}>
              here&apos;s a bit<br />about me
            </h2>
          </div>

          <div className="reveal grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-start">
            {/* Left stats */}
            <div className="flex flex-col gap-4">
              {[
                { label: "Experience",  value: "2.5 Years" },
                { label: "Speciality",  value: "Full-Stack & Mobile" },
                { label: "Education",   value: "B.E. Computer Eng." },
              ].map(item => (
                <div key={item.label} className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                    {item.label}
                  </span>
                  <span className="font-heading font-bold text-lg" style={{ color: "var(--text-primary)" }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Center photo */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="mx-auto w-52 h-64 rounded-3xl overflow-hidden"
              style={{ border: "3px solid var(--border-strong)", boxShadow: "var(--shadow-lg)" }}
            >
              <Image
                src={require("@/assets/Profile.jpeg")}
                alt="Vaibhav Dange"
                width={208} height={256}
                className="object-cover w-full h-full"
                style={{ background: "var(--accent)" }}
              />
            </motion.div>

            {/* Right stats */}
            <div className="flex flex-col gap-4">
              {[
                { label: "Projects",      value: "10+ Completed" },
                { label: "Companies",     value: "5 Worked With" },
                { label: "Availability",  value: "Open to projects" },
              ].map(item => (
                <div key={item.label} className="flex flex-col gap-0.5 md:text-right">
                  <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                    {item.label}
                  </span>
                  <span className="font-heading font-bold text-lg" style={{ color: "var(--text-primary)" }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 mt-10 stagger-children">
            <StatCard value="2.5+" label="Years of exp." delay={0.1} />
            <StatCard value="5+"   label="Companies"     delay={0.2} />
            <StatCard value="10+"  label="Projects built" delay={0.3} />
          </div>

          <div className="mt-8 text-center reveal">
            <Link href="/contact" className="btn-primary inline-flex">
              Start a Project
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOBBIES ─────────────────────────────────────── */}
      <section ref={hobbiesSectionRef} className="py-24 px-6 relative overflow-hidden">
        {/* Parallax background: music / lifestyle */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
          <ParallaxBgLayer
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1920&q=60"
            scrollYProgress={hobbiesProgress}
            opacity={0.20}
          />
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-12 reveal">
            <p className="handwritten text-lg mb-2">Beyond the screen</p>
            <h2 className="font-heading font-black text-4xl md:text-5xl" style={{ color: "var(--text-primary)" }}>
              Things I love
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 stagger-children">
            {hobbies.map((h, i) => (
              <div key={i} className="glass accent-line rounded-2xl p-6 flex gap-4 cursor-default">
                <div className="text-2xl mt-0.5 select-none">{h.emoji}</div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-heading font-bold text-base" style={{ color: "var(--text-primary)" }}>{h.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ───────────────────────────────────── */}
      <section className="py-10 px-6 reveal">
        <div className="max-w-3xl mx-auto">
          <div className="glass rounded-2xl px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-heading font-bold text-xl" style={{ color: "var(--text-primary)" }}>
                Have an idea?
              </h3>
              <p className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>Let&apos;s bring it to life</p>
            </div>
            <div className="flex gap-3">
              <Link href="/contact" className="btn-primary">Start a Project</Link>
              <a href="mailto:dangevaibhav21@gmail.com" className="btn-secondary">Book a Call</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────── */}
      <footer className="py-8 px-6 border-t" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Vaibhav Dange. Crafted with care.
          </p>
          <button
            onClick={() => { const l = (window as any).__lenis; l ? l.scrollTo(0) : window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="text-sm font-medium cursor-pointer transition-colors hover:underline"
            style={{ color: "var(--accent)" }}
          >
            Back to Top ↑
          </button>
        </div>
      </footer>
    </div>
  );
}
