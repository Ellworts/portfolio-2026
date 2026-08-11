"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#hero", label: "// home" },
  { href: "#expertise", label: "// expertise" },
  { href: "#projects", label: "// work" },
  { href: "#experience", label: "// experience" },
  { href: "#contact", label: "// contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const sections = navLinks.map(link => document.querySelector(link.href));
    
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -60% 0px", // Standard active section viewport coverage
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolledPastHero(scrollY > 80);
      
      // Explicit fallback for the hero/home section at the top of page
      if (scrollY < 80) {
        setActiveSection("#hero");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isBlurActive = isScrolledPastHero && activeSection !== "#hero";

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-[background-color,backdrop-filter] duration-300 py-2 ${
        isBlurActive 
          ? "bg-[#22333B]/70 backdrop-blur-md border-b border-white/5 shadow-lg" 
          : "bg-transparent border-b border-transparent"
      }`}>
        <nav className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex justify-end md:justify-center items-center h-16">
            {/* Desktop Nav */}
            <ul className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`transition-colors duration-300 font-mono ${
                      activeSection === link.href
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
  
            {/* Mobile Burger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-300 hover:text-white focus:outline-none z-50 relative w-8 h-8 flex flex-col justify-between p-1.5"
              aria-label="Toggle menu"
            >
              <span
                className={`h-0.5 w-full bg-current transform transition-all duration-300 origin-left ${
                  isOpen ? "rotate-45 translate-y-[2px] translate-x-[2px]" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-current transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-current transform transition-all duration-300 origin-left ${
                  isOpen ? "-rotate-45 -translate-y-[2px] translate-x-[2px]" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </header>
  
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#22333B]/98 backdrop-blur-md transition-all duration-300 z-40 md:hidden flex flex-col items-center justify-center ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col space-y-8 text-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-2xl transition-colors font-mono tracking-wider block py-2 ${
                  activeSection === link.href
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
