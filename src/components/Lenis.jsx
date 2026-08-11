"use client";

import { useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import Lenis from "@studio-freight/lenis";

export default function LenisScroll() {
  const pathname = usePathname();
  const lenisRef = useRef(null);
  const prevPathnameRef = useRef(pathname);

  // Retry-based scroll to a DOM element — waits for both Lenis and DOM to be ready
  const scrollToElement = useCallback((selector, { immediate = true, retries = 15, delay = 50 } = {}) => {
    let attempt = 0;
    const tryScroll = () => {
      const lenis = lenisRef.current;
      const el = document.querySelector(selector);
      if (lenis && el) {
        lenis.scrollTo(el, { immediate, offset: 0 });
      } else if (attempt < retries) {
        attempt++;
        setTimeout(tryScroll, delay);
      }
    };
    // Start after a microtask to let React commit the DOM
    requestAnimationFrame(tryScroll);
  }, []);

  // Create Lenis instance once
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;
    window.lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Handle in-page anchor clicks (navbar: #hero, #projects, etc.)
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest("a[href^='#']");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href?.startsWith("#")) return;
      e.preventDefault();
      if (href === "#hero") {
        lenis.scrollTo(0);
      } else {
        const element = document.querySelector(href);
        if (element) lenis.scrollTo(element);
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.lenis = undefined;
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Route-change scroll handler — single source of truth
  useEffect(() => {

    const lenis = lenisRef.current;
    if (!lenis) return;

    const prevPath = prevPathnameRef.current;
    prevPathnameRef.current = pathname;

    // Going TO a project page → scroll to top
    if (pathname.startsWith("/projects/")) {
      lenis.scrollTo(0, { immediate: true });
      return;
    }

    // Going BACK to home from a project page → scroll to #projects
    if (prevPath.startsWith("/projects/") && pathname === "/") {
      scrollToElement("#projects", { immediate: true });
      return;
    }
  }, [pathname, scrollToElement]);

  return null;
}
