"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const archiveEvents = [
  { id: 1, title: "Internal Hackathon", img: "/assets/archive/INTERNAL HACKATHON.jpg" },
  { id: 2, title: "Internal Hackathon", img: "/assets/archive/INTERNAL HACKATHON 2.jpg" },
  { id: 3, title: "Back To Campus", img: "/assets/archive/BACK TO CAMPUS AK.jpg" },
  { id: 4, title: "Back To Campus", img: "/assets/archive/BACK TO CAMPUS AS.jpg" },
  { id: 5, title: "Anvay", img: "/assets/archive/ANVAY 25.jpg" },
  { id: 6, title: "Anvay", img: "/assets/archive/ANVAY 25 2.jpg" },
  { id: 7, title: "Anvay", img: "/assets/archive/ANVAY 25 3.jpg" },
];

export default function EventsArchive() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % archiveEvents.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % archiveEvents.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + archiveEvents.length) % archiveEvents.length);
  };

  return (
    <section id="archive" className="relative w-full bg-[#0a0a0a] py-24 overflow-hidden z-20">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="font-syne font-extrabold text-5xl text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white bg-[length:200%_auto] animate-pulse">
          Archive
        </h2>
        <p className="font-outfit text-gray-400 max-w-2xl mx-auto">
          Explore the legacy of our past events, workshops, and summits.
        </p>
      </div>

      <div 
        className="relative w-full h-[500px] flex items-center justify-center overflow-hidden bg-[#0a0a0a] z-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 sm:left-10 z-40 bg-white/80 hover:bg-white text-black w-12 h-12 rounded-full shadow-lg backdrop-blur-sm flex items-center justify-center transition-all duration-300"
          aria-label="Previous event"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 sm:right-10 z-40 bg-white/80 hover:bg-white text-black w-12 h-12 rounded-full shadow-lg backdrop-blur-sm flex items-center justify-center transition-all duration-300"
          aria-label="Next event"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {archiveEvents.map((event, index) => {
          // Calculate the relative position of the card to the currentIndex
          const length = archiveEvents.length;
          let diff = (index - currentIndex) % length;
          
          if (diff < -Math.floor(length / 2)) diff += length;
          if (diff > Math.floor(length / 2)) diff -= length;

          let positionClasses = "";

          if (diff === 0) {
            // Active (Center)
            positionClasses = "z-30 scale-100 translate-x-0 opacity-100";
          } else if (diff === -1) {
            // Prev 1 (Left)
            positionClasses = "z-20 scale-[0.85] -translate-x-[55%] opacity-100 cursor-pointer";
          } else if (diff === 1) {
            // Next 1 (Right)
            positionClasses = "z-20 scale-[0.85] translate-x-[55%] opacity-100 cursor-pointer";
          } else if (diff === -2) {
            // Prev 2 (Far Left)
            positionClasses = "z-10 scale-[0.70] -translate-x-[100%] opacity-25 cursor-pointer";
          } else if (diff === 2) {
            // Next 2 (Far Right)
            positionClasses = "z-10 scale-[0.70] translate-x-[100%] opacity-25 cursor-pointer";
          } else {
            // Hidden (Others)
            positionClasses = "z-0 scale-50 translate-x-0 opacity-0 pointer-events-none";
          }

          return (
            <div
              key={event.id}
              className={`absolute w-[320px] md:w-[480px] h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl border-2 border-[#ea1012] group transition-all duration-500 ease-in-out ${positionClasses}`}
              onClick={() => {
                if (diff !== 0) {
                  setCurrentIndex(index);
                }
              }}
            >
              <Image
                src={event.img}
                alt={event.title}
                fill
                className="object-cover transition-opacity duration-300"
                unoptimized
              />
              
              <div className="absolute inset-0 bg-[#ea1012]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />

              <div className="absolute bottom-6 left-6 text-white font-syne font-bold text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 drop-shadow-md pointer-events-none">
                {event.title}
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-3 mt-10">
        {archiveEvents.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`rounded-full transition-all duration-300 ${
              idx === currentIndex ? "bg-[#ea1012] w-3 h-3" : "bg-gray-300 w-2 h-2 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
