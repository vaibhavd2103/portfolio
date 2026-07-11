"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

const socials = [
  { platform: "LinkedIn",  href: "https://www.linkedin.com/in/vaibhav-dange-2103/",  icon: <FaLinkedin size={18} />,  color: "#0A66C2" },
  { platform: "GitHub",    href: "https://github.com/vaibhavd2103",                   icon: <FaGithub size={18} />,    color: "var(--text-primary)" },
  { platform: "Instagram", href: "https://www.instagram.com/vaibhavd2103/",           icon: <FaInstagram size={18} />, color: "#E1306C" },
  { platform: "Email",     href: "mailto:dangevaibhav21@gmail.com",                   icon: <FaEnvelope size={18} />,  color: "var(--accent)" },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .stagger-children");
    const obs = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("dangevaibhav21@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const inputStyle = {
    background: "var(--glass-bg)",
    border: "1px solid var(--border)",
    color: "var(--text-primary)",
    borderRadius: "12px",
    padding: "12px 16px",
    fontSize: "0.9rem",
    width: "100%",
    outline: "none",
    backdropFilter: "blur(8px)",
    transition: "border-color 0.2s ease",
    fontFamily: "inherit",
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <NavBar />

      <main className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="handwritten text-lg mb-2">Let&apos;s make your product shine bright</p>
          <h1 className="font-heading font-black text-5xl md:text-6xl" style={{ color: "var(--text-primary)" }}>
            Contact me
          </h1>
          <p className="mt-4 text-sm max-w-sm mx-auto leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Got an idea to execute or want to hire me? I&apos;m always happy to chat.
          </p>
        </div>

        {/* Two-column — Rivers footer style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal">

          {/* Left — nav + socials */}
          <div className="glass rounded-2xl p-6 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-2">
              {["About", "Projects", "Skills", "Experience"].map(page => (
                <a key={page} href={`/${page.toLowerCase()}`}
                   className="font-heading font-bold text-2xl transition-colors cursor-pointer hover:underline"
                   style={{ color: "var(--text-primary)" }}
                   onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                   onMouseLeave={e => (e.currentTarget.style.color = "var(--text-primary)")}>
                  {page}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--text-muted)" }}>
                Let&apos;s Connect
              </p>
              <div className="flex flex-wrap gap-2">
                {socials.map(s => (
                  <a key={s.platform} href={s.href}
                     target={s.href.startsWith("mailto") ? undefined : "_blank"}
                     rel="noopener noreferrer"
                     aria-label={s.platform}
                     className="w-10 h-10 rounded-full flex items-center justify-center glass transition-all duration-200 cursor-pointer hover:scale-110"
                     style={{ color: s.color }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>

              <button onClick={copyEmail}
                      className="pill w-fit cursor-pointer mt-1 transition-all">
                {copied ? "✓ Copied!" : "dangevaibhav21@gmail.com"}
              </button>
            </div>
          </div>

          {/* Right — contact form */}
          <div className="glass rounded-2xl p-6">
            <p className="font-heading font-bold text-lg mb-5" style={{ color: "var(--text-primary)" }}>
              Let&apos;s Connect
            </p>
            <form
              className="flex flex-col gap-3"
              onSubmit={e => { e.preventDefault(); alert("Thanks! I'll get back to you soon."); }}
            >
              <input
                type="text"
                placeholder="Enter your name"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                required
                style={inputStyle}
                onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                onBlur={e => (e.target.style.borderColor = "var(--border)")}
              />
              <input
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                required
                style={inputStyle}
                onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                onBlur={e => (e.target.style.borderColor = "var(--border)")}
              />
              <textarea
                placeholder="How can I help you?"
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                required
                rows={5}
                style={{ ...inputStyle, resize: "none" }}
                onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                onBlur={e => (e.target.style.borderColor = "var(--border)")}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary justify-center mt-1"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>

        {/* Footer strip */}
        <div className="mt-10 text-center reveal">
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Vaibhav Dange ·{" "}
            <button onClick={() => { const l = (window as any).__lenis; l ? l.scrollTo(0) : window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className="cursor-pointer hover:underline" style={{ color: "var(--accent)" }}>
              Back to Top ↑
            </button>
          </p>
        </div>
      </main>
    </div>
  );
}
