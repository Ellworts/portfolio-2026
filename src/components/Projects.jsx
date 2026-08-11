"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import TransitionLink from "./TransitionLink";
import { projects } from "@/data/projects";

const PROJECTS_PER_PAGE = 6;
const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);

const projectPages = [];
for (let i = 0; i < projects.length; i += PROJECTS_PER_PAGE) {
  projectPages.push(projects.slice(i, i + PROJECTS_PER_PAGE));
}

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const mobileSwiperRef = useRef(null);

  const goToPage = (index) => {
    setCurrentPage(index);
    swiperRef.current?.slideTo(index);
  };

  const goToMobileSlide = (index) => {
    setMobileActiveIndex(index);
    mobileSwiperRef.current?.slideTo(index);
  };

  return (
    <section id="projects" className="pt-[100px]">
      <div className="max-w-7xl mx-auto px-5 md:px-10 w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 sm:mb-12 text-start md:text-center">
          Projects
        </h2>

        <div className="block md:hidden">
          <div className="flex gap-4 items-center">
            <Swiper
              onSwiper={(swiper) => (mobileSwiperRef.current = swiper)}
              direction="vertical"
              slidesPerView={3}
              spaceBetween={15}
              className="h-[600px] flex-1"
              nested={true}
              onSlideChange={(swiper) => setMobileActiveIndex(swiper.activeIndex)}
            >
              {projects.map((project) => (
                <SwiperSlide key={project.slug} className="!h-[190px]">
                  <TransitionLink
                    href={`/projects/${project.slug}`}
                    className="bg-[#2A3B44] overflow-hidden cursor-pointer relative group block h-full rounded-[4px]"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={225}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-[#35495E]/65 pointer-events-none" />
                    </div>
                    <div className="absolute inset-0 p-4 flex flex-col justify-between z-10">
                      <h3 className="text-white font-semibold text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full w-fit">
                        {project.title}
                      </h3>
                      <p className="text-gray-200 text-xs opacity-100 translate-y-0 transition-all duration-400">
                        {project.description}
                      </p>
                    </div>
                  </TransitionLink>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex flex-col gap-3 justify-center py-2 pr-1">
              {Array.from({ length: projects.length - 2 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToMobileSlide(index)}
                  className={`w-3.5 h-3.5 rounded-full transition-all duration-300 cursor-pointer ${
                    mobileActiveIndex === index
                      ? "bg-blue-500 scale-125 shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                      : "bg-gray-700 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setCurrentPage(swiper.activeIndex)}
            className="mb-8"
            spaceBetween={20}
            slidesPerView={1}
          >
            {projectPages.map((pageProjects, pageIndex) => (
              <SwiperSlide key={pageIndex}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {pageProjects.map((project) => (
                    <TransitionLink
                      key={project.slug}
                      href={`/projects/${project.slug}`}
                      className="bg-[#2A3B44] overflow-hidden cursor-pointer relative group block rounded-[4px]"
                    >
                      <div className="relative w-full aspect-video">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={400}
                          height={225}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#35495E]/65 pointer-events-none" />
                      </div>
                      <div className="absolute inset-0 p-4 flex flex-col justify-between z-10">
                        <h3 className="text-white font-semibold text-base bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full w-fit">
                          {project.title}
                        </h3>
                        <p className="text-gray-200 text-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                          {project.description}
                        </p>
                      </div>
                    </TransitionLink>
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
                  currentPage === index ? "bg-blue-500" : "bg-gray-700"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}