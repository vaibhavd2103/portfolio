"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Initialises Lenis smooth-scroll for the whole page.
 * Mount this once inside <body> (via layout.tsx).
 *
 * Lenis intercepts wheel + touch events and applies a physics-based
 * easing so every scroll feels silky. The instance is stored at
 * window.__lenis so other components can call window.__lenis?.scrollTo()
 * for programmatic navigation (e.g. "Back to Top" buttons).
 */
export function LenisProvider() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      // Expo-out easing: fast start, gentle landing
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      touchMultiplier: 1.8,
      infinite: false,
    });

    // Expose globally so Back-to-Top buttons can use lenis.scrollTo(0)
    (window as { __lenis?: Lenis }).__lenis = lenis;

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  return null;
}
