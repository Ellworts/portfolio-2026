"use client";

import { createContext, useContext, useRef, useCallback, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";

const TransitionContext = createContext(null);

export function usePageTransition() {
  return useContext(TransitionContext);
}

export function PageTransitionProvider({ children }) {
  const overlayRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();
  const isTransitioning = useRef(false);

  const navigateTo = useCallback(
    (href) => {
      // Prevent double-clicks during an active transition
      if (isTransitioning.current) return;
      isTransitioning.current = true;

      const overlay = overlayRef.current;
      if (!overlay) {
        router.push(href);
        return;
      }

      // Fast fade-in overlay → then navigate
      gsap.fromTo(
        overlay,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          duration: 0.2,
          ease: "power2.in",
          onComplete: () => {
            router.push(href);
          },
        }
      );
    },
    [router]
  );

  // When pathname changes DURING a transition → reveal the new page
  useEffect(() => {
    // On initial mount or regular navigation, isTransitioning is false → skip
    if (!isTransitioning.current) return;

    const overlay = overlayRef.current;
    if (!overlay) return;

    // Short delay so the new page has time to render under the overlay
    const timer = setTimeout(() => {
      gsap.to(overlay, {
        autoAlpha: 0,
        duration: 0.2,
        ease: "power2.out",
        onComplete: () => {
          isTransitioning.current = false;
        },
      });
    }, 80);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <TransitionContext.Provider value={{ navigateTo }}>
      {children}
      {/* Transition overlay — starts invisible, only shown mid-transition */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[9999] bg-[#22333B] pointer-events-none"
        style={{ visibility: "hidden", opacity: 0 }}
      />
    </TransitionContext.Provider>
  );
}
