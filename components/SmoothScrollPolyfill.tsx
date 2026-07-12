"use client";

import { useEffect } from "react";

/**
 * Cross-browser smooth scroll polyfill.
 * Modern browsers (Chrome 61+, Firefox 36+, Safari 15.4+) handle
 * `scroll-behavior: smooth` natively via CSS. This component patches
 * older browsers that don't support it by overriding window.scrollTo
 * and intercepting anchor-link clicks.
 */
export function SmoothScrollPolyfill() {
  useEffect(() => {
    // Exit early if the browser supports scroll-behavior natively
    if ("scrollBehavior" in document.documentElement.style) return;

    function easeInOutCubic(t: number): number {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animateScrollTo(targetY: number, duration = 600) {
      const startY = window.scrollY;
      const distance = targetY - startY;
      if (distance === 0) return;
      const startTime = performance.now();

      function step(now: number) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, startY + distance * easeInOutCubic(progress));
        if (progress < 1) requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
    }

    // Patch window.scrollTo so { behavior: "smooth" } works everywhere
    const nativeScrollTo = window.scrollTo.bind(window);
    (window as any).scrollTo = function (xOrOptions: any, y?: number) {
      if (
        xOrOptions !== null &&
        typeof xOrOptions === "object" &&
        xOrOptions.behavior === "smooth"
      ) {
        animateScrollTo(xOrOptions.top ?? 0);
      } else {
        nativeScrollTo(xOrOptions as number, y as number);
      }
    };

    // Intercept anchor-link clicks for hash navigation
    function handleAnchorClick(e: MouseEvent) {
      const link = (e.target as HTMLElement).closest(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null;
      if (!link) return;
      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;
      const target = document.querySelector(hash) as HTMLElement | null;
      if (!target) return;
      e.preventDefault();
      animateScrollTo(target.offsetTop - 64); // 64px = navbar height offset
    }

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return null;
}
