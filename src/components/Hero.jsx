"use client";

import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";

export default function Hero() {
  const [isMeActive, setIsMeActive] = useState(false);
  const avatarRef = useRef(null);

  const handleMeClick = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setIsMeActive(!isMeActive);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isMeActive &&
        avatarRef.current &&
        !avatarRef.current.contains(event.target)
      ) {
        setIsMeActive(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMeActive]);

  const techStack = [
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    { name: "React", icon: "devicon-react-original colored" },
    { name: "HTML5", icon: "devicon-html5-plain colored" },
    { name: "CSS3", icon: "devicon-css3-plain colored" },
    { name: "PHP", icon: "devicon-php-plain colored" },
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "Next.js", icon: "devicon-nextjs-plain" },
    { name: "Figma", icon: "devicon-figma-plain colored" },
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "Tailwind", icon: "devicon-tailwindcss-original colored" },
    {
      name: "WordPress",
      icon: "devicon-wordpress-plain",
      customColor: "#21759b",
    },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center bg-[#22333B] relative overflow-hidden -mt-16"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
      >
        <source
          src="/Professional_Light_Leaks_Pack_Film_Burn_Overlay_Free_Downl.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#22333B] to-transparent z-5"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 text-center w-full">
        <h1
          className="font-bold text-white mt-20"
          style={{ fontSize: "clamp(2.6rem, 10vw, 7.5rem)" }}
        >
          Mykhailo Kuptsov
        </h1>
        <p
          className="text-white mb-25 max-w-3xl mx-auto"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
        >
          Fullstack Web Developer
        </p>
        <div className="mt-8">
          <p
            className="text-gray-300 mb-5 tracking-widest uppercase"
            style={{ fontSize: "clamp(0.875rem, 2vw, 1.125rem)" }}
          >
            Tech Stack
          </p>
          <div className="max-w-[900px] w-full mx-auto px-4">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={7}
              loop={true}
              autoplay={{
                delay: 500,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              speed={1000}
              spaceBetween={40}
              centeredSlides={false}
              allowTouchMove={true}
              breakpoints={{
                320: { slidesPerView: 3, spaceBetween: 20 },
                640: { slidesPerView: 5, spaceBetween: 30 },
                1024: { slidesPerView: 7, spaceBetween: 40 },
              }}
              className="tech-stack-swiper"
            >
              {techStack.map((tech, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center">
                      <i
                        className={`${tech.icon}`}
                        style={{
                          fontSize: "64px",
                          lineHeight: 1,
                          color: tech.customColor || undefined,
                        }}
                      ></i>
                    </div>
                    <p className="text-gray-400 text-xs mt-2">{tech.name}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <DotLottieReact
          src="https://lottie.host/efd54dac-3dc2-413a-90e7-fe594310dcce/cGsM7Te4vq.lottie"
          loop
          autoplay
          style={{ width: 64, height: 64 }}
        />
      </div>
      <div 
        ref={avatarRef}
        onClick={handleMeClick}
        className={`absolute z-10 transition-all duration-500 group cursor-pointer md:cursor-default left-4 md:left-20 
          ${isMeActive 
            ? "bottom-0 translate-y-0 opacity-100 md:bottom-[max(-15vh,-150px)] md:hover:bottom-0 md:opacity-65 md:hover:opacity-100 md:translate-y-0" 
            : "bottom-[max(-18vh,-130px)] translate-y-0 opacity-65 md:bottom-[max(-14vh,-115px)] md:hover:bottom-0 md:opacity-65 md:hover:opacity-100 md:translate-y-0"
          }`}
      >
        <div className={`absolute border border-gray-600 bg-[#22333b]/95 text-white px-4 py-3 rounded-lg shadow-lg transition-opacity duration-300 pointer-events-none w-max
          ${isMeActive 
            ? "bottom-[105%] left-1/2 -translate-x-1/2 opacity-100 md:top-[15%] md:bottom-auto md:left-35 md:translate-x-0 md:opacity-0 md:group-hover:opacity-100" 
            : "bottom-[105%] left-1/2 -translate-x-1/2 opacity-0 md:top-[15%] md:bottom-auto md:left-35 md:translate-x-0 md:opacity-0 md:group-hover:opacity-100"
          }`}
        >
          <p className="text-sm font-medium">Hey! It&apos;s me ;)</p>
          <div className="absolute bottom-0 left-1/2 md:left-4 transform translate-y-full -translate-x-1/2 md:translate-x-0">
            <div className="border-8 border-transparent border-t-gray-600"></div>
          </div>
        </div> 
        <Image
          src="/me.webp"
          alt="Mykhailo Kuptsov"
          width={250}
          height={250}
          className="w-44 h-44 md:w-64 md:h-64 object-contain rounded-t-3xl transform translate-y-0 md:translate-y-[30%]"
        />
      </div>
    </section>
  );
}
