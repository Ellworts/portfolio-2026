"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import TransitionLink from "./TransitionLink";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function OtherProjectsCarousel({ currentSlug }) {
  const otherProjects = projects.filter((p) => p.slug !== currentSlug);

  return (
    <div className="w-full flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-[#8CD6D0] font-mono tracking-wider">
        // Other Projects
      </h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={16}
        slidesPerView={3}
        slidesPerGroup={1}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        speed={500}
        className="w-full"
      >
        {otherProjects.map((project) => (
          <SwiperSlide key={project.slug}>
            <TransitionLink
              href={`/projects/${project.slug}`}
              className="block relative overflow-hidden rounded-[4px] border border-[#35495E] cursor-pointer aspect-video"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#22333B]/50 pointer-events-none" />
              <div className="absolute inset-0 p-3 flex flex-col justify-end z-10">
                <span className="text-white font-semibold text-sm leading-tight">
                  {project.title}
                </span>
                <span className="text-gray-300 text-xs mt-0.5 line-clamp-1">
                  {project.description}
                </span>
              </div>
            </TransitionLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
