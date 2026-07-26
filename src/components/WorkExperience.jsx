"use client";

import { useState } from "react";
import Image from "next/image";

export default function WorkExperience() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const experiences = [
    {
      role: "Web Developer",
      company: "Global Study UK",
      period: "2022 - Present",
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
      period: "2020 - 2022",
      location: "London, UK & Didcot, UK",
      website: "#",
      description:
        "Managed kitchen operations and ensured high-quality food preparation standards.",
      technologies: [],
      logo: null,
    },
    {
      role: "Freelance Frontend Dev",
      company: "Self-employed",
      period: "2019 - 2020",
      location: "Remote",
      website: "#",
      description:
        "Provided frontend development services for various clients, creating responsive and user-friendly web interfaces.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      logo: null,
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 w-full">
        <h2 className="mb-8 sm:mb-12 text-center text-6xl font-bold text-white">
          Work Experience
        </h2>
        <div className="mx-auto space-y-3 max-w-[800px]">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[4px] border border-[#35495E] bg-[#35495E] transition-colors hover:border-[#5B7C9D]"
            >
              <div
                className={`flex cursor-pointer items-center justify-between gap-6 px-6 py-5 transition-colors duration-300 md:px-8 ${
                  expandedIndex === index ? "bg-[#5B7C9D]" : "bg-[#35495E]"
                }`}
                onClick={() => toggleExpand(index)}
              >
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-2xl font-bold text-white">
                    {exp.role} @ {exp.company}
                  </h3>
                  <p className="mt-1 text-sm text-white/80">{exp.period}</p>
                </div>
                <button
                  type="button"
                  aria-label={
                    expandedIndex === index
                      ? "Collapse experience"
                      : "Expand experience"
                  }
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center text-white transition-transform duration-300"
                >
                  {expandedIndex === index ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5 rotate-180"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  )}
                </button>
              </div>
              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="min-h-0 overflow-hidden bg-[#35495E]">
                  <div className="px-6 pb-6 pt-0 md:px-8">
                    <div className="mt-5 grid gap-6 md:grid-cols-[1.6fr_0.9fr] md:items-start">
                      {exp.logo && (
                        <div className="flex items-center justify-center p-5 md:order-2 md:min-h-[190px]">
                          <Image
                            src={exp.logo}
                            alt={exp.company}
                            width={220}
                            height={160}
                            className="h-auto w-full max-w-[180px] object-contain"
                            priority={index === 0}
                          />
                        </div>
                      )}
                      <div className="min-w-0">
                        <div className="mb-4 flex flex-wrap gap-4 text-sm text-white/75">
                          <span>{exp.location}</span>
                          {exp.website !== "#" && (
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
                            {exp.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
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
          ))}
        </div>
      </div>
    </section>
  );
}
