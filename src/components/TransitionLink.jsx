"use client";

import { usePageTransition } from "./PageTransition";

/**
 * A link component that triggers GSAP page transitions.
 * Use instead of next/link for cross-page navigations that need animation.
 */
export default function TransitionLink({ href, children, className, ...props }) {
  const { navigateTo } = usePageTransition();

  const handleClick = (e) => {
    e.preventDefault();
    navigateTo(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}
