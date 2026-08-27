"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDownIcon } from "./icons";

const experiences = [
  {
    role: "Web Developer",
    company: "Global Study UK",
    period: "2025 - Present",
    location: "London, UK",
    website: "https://globaleducationhub.com/",
    description:
      "Developing and maintaining educational websites for international students. Building responsive interfaces and implementing modern web solutions.",
    technologies: [
      "JavaScript",
      "WordPress",
      "NodeJS",
      "SCSS",
      "PHP",
      "React",
      "TypeScript",
      "MySQL",
      "RestAPI's",
    ],
    logo: "/GEH-Draft.svg",
  },
  {
    role: "Chef",
    company: "Miller & Carter",
    period: "2022 - 2025",
    location: "London, UK & Didcot, UK",
    website: null,
    description:
      "Managed kitchen operations and ensured high-quality food preparation standards.",
    technologies: [],
    logo: null,
  },
  {
    role: "Freelance Frontend Dev",
    company: "Self-employed",
    period: "2022 - 2024",
    location: "Remote",
    website: null,
    description:
      "Provided frontend development services for various clients, creating responsive and user-friendly web interfaces.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    logo: null,
  },
];

export default function WorkExperience() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="pt-[100px]">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 sm:mb-12 text-center">
          Work Experience
        </h2>
        <div className="mx-auto space-y-3 max-w-[800px]">
          {experiences.map((exp) => {
            const isExpanded = expandedIndex === experiences.indexOf(exp);
            return (
              <div
                key={exp.company}
                className="overflow-hidden rounded-[4px] border border-[#35495E] bg-[#35495E] transition-colors hover:border-[#5B7C9D]"
              >
                <div
                  className={`flex cursor-pointer items-center justify-between gap-6 px-6 py-5 transition-colors duration-300 md:px-8 ${
                    isExpanded ? "bg-[#5B7C9D]" : "bg-[#35495E]"
                  }`}
                  onClick={() => toggleExpand(experiences.indexOf(exp))}
                >
                  <div className="min-w-0 flex-1">
                    {isExpanded ? (
                      <>
                        <h3 className="hidden md:block truncate text-2xl font-bold text-white">
                          {exp.role} @ {exp.company}
                        </h3>
                        <div className="md:hidden overflow-hidden marquee-mask">
                          <div className="flex w-max animate-marquee-slow">
                            {[0, 1, 2, 3].map((i) => (
                              <span
                                key={i}
                                className="pr-10 text-2xl font-bold text-white shrink-0"
                                aria-hidden={i > 0 ? "true" : undefined}
                              >
                                {exp.role} @ {exp.company}
                              </span>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <h3 className="truncate text-2xl font-bold text-white">
                        {exp.role} @ {exp.company}
                      </h3>
                    )}
                    <p className="mt-1 text-sm text-white/80">{exp.period}</p>
                  </div>
                  <button
                    type="button"
                    aria-label={isExpanded ? "Collapse experience" : "Expand experience"}
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center text-white transition-transform duration-300"
                  >
                    <ChevronDownIcon className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                  </button>
                </div>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden bg-[#35495E]">
                    <div className="px-6 pb-6 pt-0 md:px-8">
                      <div className="mt-5 grid gap-6 md:grid-cols-[1.6fr_0.9fr] md:items-start">
                        {exp.logo && (
                          <div className="flex items-center justify-center p-5 md:order-2 md:min-h-[150px]">
                            <Image
                              src={exp.logo}
                              alt={exp.company}
                              width={176}
                              height={128}
                              className="h-auto w-full max-w-[144px] object-contain"
                              priority={exp === experiences[0]}
                            />
                          </div>
                        )}
                        <div className="min-w-0">
                          <div className="mb-4 flex flex-wrap gap-4 text-sm text-white/75">
                            <span>{exp.location}</span>
                            {exp.website && (
                              <a
                                href={exp.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition hover:text-white"
                              >
                                Website
                              </a>
                            )}
                          </div>
                          <p className="mb-5 text-white/85">{exp.description}</p>
                          {exp.technologies.length > 0 && (
                            <div className="flex flex-wrap gap-2.5">
                              {exp.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="border border-white/10 bg-[#49657C] px-3 py-1 text-sm text-white/90 rounded-full"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
