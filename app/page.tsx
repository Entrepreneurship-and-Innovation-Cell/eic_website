"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import EventsArchive from "@/components/EventsArchive";
import CalenderedEvents from "@/components/CalenderedEvents";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Parallax Ref for the text
  const bgTextRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  // Typing effect state for About Section
  const [typedText, setTypedText] = useState("");
  const [startTyping, setStartTyping] = useState(false);

  // Mouse coordinate targets for text parallax
  const targetX = useRef(0);
  const targetY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);

  useEffect(() => {
    // Hide loading after a short delay for preloading
    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(loadTimer);
  }, []);

  useEffect(() => {
    // Intersection Observer to start typing when About section is visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartTyping(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    if (!startTyping) return;
    const textToType = "Most people study the future. We want to build it. The Entrepreneurship & Innovation Cell brings together curious minds, ambitious builders, researchers, and entrepreneurs who aren't satisfied with ideas staying on a whiteboard or inside a laboratory. We create opportunities to learn from founders, engage with innovators, explore entrepreneurship, and transform scientific thinking into real-world impact. If you're excited by big problems, bold ideas, and the possibility of creating something meaningful, you're already one of us.";
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      setTypedText(textToType.substring(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex >= textToType.length) {
        clearInterval(typingInterval);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, [startTyping]);

  useEffect(() => {
    // Subtle Parallax mouse tracker for the Welcome text
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetX.current = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      targetY.current = (e.clientY - innerHeight / 2) / (innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;
    const updateParallax = () => {
      const lerpFactor = 0.08; 
      currentX.current += (targetX.current - currentX.current) * lerpFactor;
      currentY.current += (targetY.current - currentY.current) * lerpFactor;

      const maxTextShift = 20; 
      const textShiftX = currentX.current * maxTextShift;
      const textShiftY = currentY.current * maxTextShift;

      if (bgTextRef.current) {
        bgTextRef.current.style.transform = `translate3d(${textShiftX}px, ${textShiftY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(updateParallax);
    };

    updateParallax();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-start bg-[#0a0a0a] overflow-x-hidden select-none">

      {/* 1. Fullscreen Loader */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-[#ea1012] transition-opacity duration-700 ease-in-out ${loading ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-[#D1E7E0] border-t-transparent rounded-full animate-spin"></div>
          <span className="font-syne font-extrabold text-[#F3EED9] tracking-widest text-xl animate-pulse">EIC</span>
        </div>
      </div>

      {/* 2. Hero Background Image & Gradient Mask */}
      {/* Adjusted height so it doesn't cover the whole screen, acts as a banner */}
      <div className="absolute top-0 left-0 w-full h-[55vh] md:h-[75vh] z-0 pointer-events-none">
        <Image 
          src="/assets/hero-sec.avif" 
          alt="EIC Hero Background" 
          fill 
          className="object-cover object-top opacity-85"
          priority
        />
        {/* Gradient perfectly fades the bottom of the image into the dark background right above About */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/60 to-[#0a0a0a]"></div>
      </div>

      {/* Subtle Noise Texture Overlay spanning the whole page */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay z-0"
        style={{
          backgroundImage: "url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')",
        }}
      />

      {/* 3. Header Navigation */}
      <Header />

      {/* 4. Hero Canvas - Centered Text Layout */}
      {/* Matches the banner height to center the text exactly over the image */}
      <main className="relative z-10 w-full min-h-[45vh] md:min-h-[60vh] flex flex-col items-center justify-center text-center px-4 pt-10">
        <div
          ref={bgTextRef}
          className="flex flex-col items-center justify-center text-center transition-transform duration-100 ease-out"
        >
          {/* Reduced text sizes: text-[10vw] for mobile, md:text-[7vw] for tablet, lg:text-[6vw] for desktop */}
          <h1 className="font-syne font-extrabold text-[10vw] md:text-[7vw] lg:text-[6vw] leading-none uppercase text-[#F3EED9] text-center shining-text shining-container drop-shadow-2xl">
            WELCOME<br />TO EIC
          </h1>
        </div>
      </main>

      {/* About Section */}
      <section
        id="about"
        ref={aboutRef}
        className="relative w-full px-4 py-16 md:py-24 z-20 overflow-hidden flex items-center justify-center mt-[-2rem]"
      >
        {/* Centered Content Wrapper */}
        <div className="relative max-w-5xl w-full flex flex-col items-center justify-center mx-auto px-4 sm:px-6 md:px-8 z-20">
          <h2 className="font-syne font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight mb-8 leading-none w-full text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white bg-[length:200%_auto] animate-pulse">
            About
          </h2>

          <div className="font-outfit text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-4xl text-justify mx-auto min-h-[300px] sm:min-h-[220px] md:min-h-[160px] lg:min-h-[150px] relative">
            <p className="inline drop-shadow-md">
              {typedText}
            </p>
            {/* Blinking typing cursor */}
            {startTyping && (
              <span className="inline-block w-3 h-3 rounded-full ml-2 bg-[#ea1012] animate-pulse align-middle" />
            )}
          </div>

          <div className={`mt-12 transition-all duration-1000 ${startTyping && typedText.length > 50 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
            <Link 
              href="/team" 
              className="relative inline-flex items-center justify-center px-10 py-4 bg-[#ea1012] rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#ffffff] border-2 border-transparent hover:border-white group overflow-hidden whitespace-nowrap"
            >
              <div className="absolute top-0 left-0 w-[150%] h-full -translate-x-[150%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[100%] z-0 pointer-events-none" />
              <span className="relative z-10 flex items-center gap-2 font-syne font-extrabold tracking-wide text-[#F3EED9]">
                Know more about Team
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Calendered Events Section */}
      <div className="relative z-20 bg-[#0a0a0a]">
        <CalenderedEvents />
      </div>

      {/* Events Archive Section */}
      <div className="relative z-20 bg-[#0a0a0a]">
        <EventsArchive />
      </div>

    </div>
  );
}