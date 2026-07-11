"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiSun, HiMoon, HiBars3, HiXMark } from "react-icons/hi2";

const links = [
  { label: "About",      href: "/" },
  { label: "Projects",   href: "/projects" },
  { label: "Skills",     href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Contact",    href: "/contact" },
];

export default function NavBar() {
  const pathname  = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme]       = useState<"light"|"dark">("light");

  /* Read initial theme */
  useEffect(() => {
    const t = document.documentElement.getAttribute("data-theme") as "light"|"dark";
    setTheme(t || "light");
  }, []);

  /* Scroll detection */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
        style={{
          background: scrolled ? "var(--navbar-bg)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(200%)" : "none",
        }}
        className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      >
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo pill — Rivers style */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 flex-shrink-0"
                 style={{ borderColor: "var(--accent)" }}>
              <Image
                src={require("@/assets/Profile.jpeg")}
                alt="Vaibhav Dange"
                width={36} height={36}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>
                Vaibhav Dange
              </span>
              <span className="text-[11px]" style={{ color: "var(--text-muted)" }}>
                Software Developer
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: active ? "var(--accent)" : "var(--text-muted)",
                  }}
                  className="relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 hover:text-[var(--accent)]"
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full"
                      style={{ background: "var(--glass-bg)", border: "1px solid var(--border-strong)" }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer"
              style={{ background: "var(--glass-bg)", border: "1px solid var(--border)" }}
            >
              {theme === "dark"
                ? <HiSun size={16}  style={{ color: "var(--accent-light)" }} />
                : <HiMoon size={16} style={{ color: "var(--accent)" }} />
              }
            </button>

            {/* Hire me — desktop */}
            <Link
              href="/contact"
              className="btn-primary hidden md:inline-flex text-sm px-5 py-2"
            >
              Hire me
            </Link>

            {/* Hamburger — mobile */}
            <button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(v => !v)}
              className="md:hidden w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
              style={{ background: "var(--glass-bg)", border: "1px solid var(--border)" }}
            >
              {menuOpen
                ? <HiXMark  size={18} style={{ color: "var(--text-primary)" }} />
                : <HiBars3  size={18} style={{ color: "var(--text-primary)" }} />
              }
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden px-4 py-3 flex flex-col gap-1"
            style={{ background: "var(--navbar-bg)", borderBottom: "1px solid var(--border)", backdropFilter: "blur(20px)" }}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium transition-colors"
                style={{
                  background: pathname === link.href ? "var(--glass-bg)" : "transparent",
                  color: pathname === link.href ? "var(--accent)" : "var(--text-secondary)",
                  border: pathname === link.href ? "1px solid var(--border-strong)" : "1px solid transparent",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="btn-primary mt-2 justify-center">
              Hire me
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
