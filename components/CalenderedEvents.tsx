"use client";

import React, { useState } from "react";

// Keeping the data here for when you are ready to un-comment the carousel!
const calenderedEvents = [
  { id: 1, date: "5th July, 2025", title: "Founders' Hive", img: "https://picsum.photos/800/1000?random=11" },
  { id: 2, date: "15th August, 2025", title: "Emerge", img: "https://picsum.photos/800/1000?random=12" },
  { id: 3, date: "22nd September, 2025", title: "E-Summit", img: "https://picsum.photos/800/1000?random=13" },
  { id: 4, date: "10th October, 2025", title: "Fetching Fortunes", img: "https://picsum.photos/800/1000?random=14" },
  { id: 5, date: "5th November, 2025", title: "Innovators Pitch", img: "https://picsum.photos/800/1000?random=15" },
];

export default function CalenderedEvents() {
  const [hoveredIndex, setHoveredIndex] = useState(2);

  return (
    <section id="calendered-events" className="relative w-full bg-[#0a0a0a] pb-24 px-6 md:px-12 z-20 border-t border-white/10">
      <h2 className="text-white font-syne font-extrabold text-5xl text-center mb-12 mt-24">
        Calendered Events
      </h2>

      {/* --- COMING SOON PLACEHOLDER --- */}
      <div className="w-full max-w-4xl mx-auto py-20 px-8 flex flex-col items-center justify-center border-2 border-dashed border-white/10 rounded-3xl bg-[#141414]/40 backdrop-blur-sm shadow-xl">
        <div className="w-16 h-16 rounded-full bg-[#FB575C]/10 border border-[#FB575C]/30 flex items-center justify-center mb-6">
          {/* Custom Calendar Icon */}
          <svg className="w-8 h-8 text-[#FB575C]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        </div>
        <h3 className="text-white font-syne font-bold text-2xl md:text-3xl mb-3 text-center">
          Exciting Events Brewing...
        </h3>
        <p className="text-gray-400 font-outfit text-base md:text-lg text-center max-w-lg leading-relaxed">
          Our upcoming calendar is currently being finalized. Check back soon for the latest updates on workshops, summits, and hackathons!
        </p>
      </div>

      {/* --- CAROUSEL (COMMENTED OUT FOR NOW) --- 
      <div className="flex w-full h-[500px] md:h-[600px] overflow-hidden mt-12">
        {calenderedEvents.map((event, index) => (
          <div
            key={event.id}
            className={`relative h-full transition-[flex] duration-700 ease-in-out cursor-pointer overflow-hidden ${
              hoveredIndex === index ? "flex-[5]" : "flex-[1]"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
          >
            <img 
              src={event.img} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
              alt={event.title}
            />
            
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80 z-10 pointer-events-none" />

            <div className={`absolute inset-0 flex items-center justify-center z-20 transition-opacity duration-500 delay-100 ${
              hoveredIndex === index ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}>
              <h3 className="text-white font-syne font-bold text-2xl md:text-3xl tracking-widest whitespace-nowrap [writing-mode:vertical-rl] -rotate-180 uppercase pointer-events-none">
                {event.title}
              </h3>
            </div>

            <div className={`absolute bottom-8 left-8 z-20 flex flex-col gap-2 transition-opacity duration-500 delay-300 ${
              hoveredIndex === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}>
              <span className="text-gray-300 font-outfit text-lg pointer-events-none">{event.date}</span>
              <h3 className="text-white font-syne font-extrabold text-4xl md:text-5xl drop-shadow-lg pointer-events-none">{event.title}</h3>
            </div>
          </div>
        ))}
      </div>
      */}

    </section>
  );
}