"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const swiperRef = useRef(null);

  const projects = [
    {
      title: "Global Education Hub",
      image: "/global_study_uk/Global_education_hub.webp",
      link: "https://globaleducationhub.com/",
      description:
        "Comprehensive education platform for international students",
    },
    {
      title: "Education247",
      image: "/global_study_uk/education247.webp",
      link: "https://education247.com/",
      description: "Educational exhibition event website",
    },
    {
      title: "Global Study Australia",
      image: "/global_study_uk/globalstudyaustralia.webp",
      link: "https://globalstudyaustralia.com/",
      description: "Study abroad consultancy for Australian universities",
    },
    {
      title: "Egypt Education Fair",
      image: "/global_study_uk/egypt_education_fair.webp",
      link: "https://egypteducationfair.com/",
      description: "Educational exhibition event website",
    },
    {
      title: "Study Business in Germany",
      image: "/global_study_uk/study_business_in_germany.webp",
      link: "https://studybusinessinGermany.com/",
      description: "Business education programs in German universities",
    },
    {
      title: "Study Economics UK",
      image: "/global_study_uk/study_economics_UK.webp",
      link: "https://studyeconomicsintheuk.com/",
      description: "Economics programs in UK universities",
    },
    {
      title: "UCAS Clearing",
      image: "/global_study_uk/ucas_clearing.webp",
      link: "https://ucasclearing.com/",
      description: "University clearing process information portal",
    },
    {
      title: "Universities in Madrid",
      image: "/global_study_uk/universities_in_madrid.webp",
      link: "https://universitiesinmadrid.com/",
      description: "Higher education guide for Madrid institutions",
    },
    {
      title: "Universities in Leeds",
      image: "/global_study_uk/universitiesinleeds.webp",
      link: "https://universitiesinleeds.com/",
      description: "University guide for Leeds area institutions",
    },
  ];

  const totalPages = Math.ceil(projects.length / 6);

  const handleSlideChange = (swiper) => {
    setCurrentPage(swiper.activeIndex);
  };

  const goToPage = (index) => {
    setCurrentPage(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  // Group projects into pages of 6
  const projectPages = [];
  for (let i = 0; i < projects.length; i += 6) {
    projectPages.push(projects.slice(i, i + 6));
  }

  return (
    <section id="projects">
      <div className="max-w-7xl mx-auto px-5 md:px-10 w-full">
        <h2 className="text-4xl font-bold text-white mb-5 text-start">
          Projects
        </h2>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
          className="mb-8"
          spaceBetween={20}
          slidesPerView={1}
        >
          {projectPages.map((pageProjects, pageIndex) => (
            <SwiperSlide key={pageIndex}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {pageProjects.map((project, index) => (
                  <a
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#2A3B44] overflow-hidden cursor-pointer relative group block"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={225}
                      className="w-full aspect-video object-cover"
                    />
                    <div className="absolute inset-0 bg-[#35495E]/65 pointer-events-none" />
                    <div className="absolute inset-0 p-4 flex flex-col justify-between">
                      <h3 className="text-white font-semibold text-base bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full w-fit">
                        {project.title}
                      </h3>
                      <p className="text-gray-200 text-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                        {project.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`w-3 h-3 rounded-full transition ${
                currentPage === index ? "bg-blue-500" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
