"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import { motion, AnimatePresence } from "framer-motion";
import { teamBatches, TeamMember } from "./data";
import { 
  ChevronDown, 
  Award,
  Check
} from "lucide-react";

export default function TeamPage() {
  const [selectedBatch, setSelectedBatch] = useState<string>("2026-2027");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const batches = Object.keys(teamBatches);
  const currentMembers = teamBatches[selectedBatch] || [];

  // Close custom dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between bg-[#0a0a0a] text-gray-100 overflow-x-hidden selection:bg-[#FB575C] selection:text-white">
      
      {/* Subtle Noise Texture Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay z-0"
        style={{
          backgroundImage: "url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')",
        }}
      />

      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#FB575C]/10 blur-[140px] rounded-full pointer-events-none z-0" />

      {/* Header Navigation */}
      <Header />

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-6 md:px-12 py-16 md:py-20 flex flex-col items-center">
        
        {/* Intro Section */}
        <section className="w-full flex flex-col items-center text-center mb-16">

          <span className="font-outfit text-xs font-semibold tracking-[0.2em] uppercase text-[#FB575C] mb-4">
            IISER Pune
          </span>

          {/* Heading */}
          <h1 className="relative z-10 font-syne font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight mb-4 leading-tight text-white">
            The Team
          </h1>

          <p className="font-outfit text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed mb-10">
            Empowering innovation, driving startup culture, and fostering interdisciplinary research at IISER Pune.
          </p>

          {/* Custom Academic Batch Filter Dropdown */}
          <div ref={dropdownRef} className="relative w-full max-w-xs sm:max-w-sm">
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between bg-[#141414] text-gray-100 border border-white/10 hover:border-[#FB575C]/60 focus:border-[#FB575C] font-outfit font-semibold text-base py-3 px-5 rounded-2xl shadow-lg shadow-black/30 backdrop-blur-md transition-all duration-300 cursor-pointer outline-none group"
              aria-expanded={isDropdownOpen}
              aria-haspopup="listbox"
            >
              <div className="flex items-center gap-2 truncate">
                <span className="text-xs font-mono tracking-wider opacity-60 uppercase text-[#FB575C]">Batch</span>
                <span className="truncate">
                  {selectedBatch} {selectedBatch === "2026-2027" ? "(Current)" : ""}
                </span>
              </div>
              <ChevronDown className={`w-5 h-5 text-[#FB575C] shrink-0 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Custom Animated Dropdown Menu Overlay */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  role="listbox"
                  className="absolute top-full left-0 right-0 mt-2.5 bg-[#141414] border border-white/10 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden z-30 divide-y divide-white/5 backdrop-blur-xl"
                >
                  {batches.map((batch) => {
                    const isSelected = batch === selectedBatch;
                    return (
                      <li key={batch}>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedBatch(batch);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full text-left px-5 py-3.5 font-outfit text-sm font-medium transition-colors flex items-center justify-between cursor-pointer ${
                            isSelected 
                              ? "bg-white/10 text-white font-bold" 
                              : "text-gray-300 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <span>Batch {batch}</span>
                            {batch === "2026-2027" && (
                              <span className="text-[10px] uppercase font-bold tracking-wider bg-[#FB575C]/15 text-[#FB575C] px-2 py-0.5 rounded-full border border-[#FB575C]/30">
                                Current
                              </span>
                            )}
                          </span>
                          {isSelected && <Check className="w-4 h-4 text-[#FB575C] shrink-0" />}
                        </button>
                      </li>
                    );
                  })}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

        </section>

        {/* Roster Grid */}
        <section className="w-full min-h-[400px]">
          {currentMembers.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {currentMembers.map((member) => (
                <motion.div
                  key={member.name}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="group relative rounded-3xl bg-[#141414] border border-white/8 hover:border-[#FB575C]/40 flex flex-col text-left shadow-md hover:shadow-xl hover:shadow-black/40 transition-colors duration-300 overflow-hidden"
                >
                  {/* Photo Container — slightly shorter portrait format (aspect-[4/5]) */}
                  <div className="relative w-full aspect-[4/5] overflow-hidden rounded-t-3xl">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

                    {/* Role Badge, overlaid on image */}
                    <span className="absolute top-3 left-3 bg-white/95 text-[#0a0a0a] font-bold px-3 py-1 rounded-full shadow-md text-[11px] tracking-widest uppercase">
                      {member.role.split(" ")[0]}
                    </span>
                  </div>

                  {/* Text content */}
                  <div className="flex flex-col items-start p-5">
                    <h3 className="font-syne font-bold text-lg text-white mb-1 leading-snug">
                      {member.name}
                    </h3>

                    <p className="font-outfit text-sm text-gray-400 line-clamp-1 mb-4">
                      {member.role}
                    </p>

                    {/* Social Media Links - 'mt-auto' has been removed so it hugs the text! */}
                    <div className="flex items-center gap-3 pt-1">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-[#FB575C] transition-colors"
                          aria-label="LinkedIn"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-[#FB575C] transition-colors"
                          aria-label="GitHub"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                        </a>
                      )}
                      {member.instagram && (
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-[#FB575C] transition-colors"
                          aria-label="Instagram"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Empty State for historical years */
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-xl mx-auto py-16 px-8 rounded-3xl bg-[#141414] border-2 border-dashed border-white/10 text-center flex flex-col items-center justify-center backdrop-blur-sm"
            >
              <div className="w-16 h-16 rounded-full bg-[#FB575C]/10 border border-[#FB575C]/30 flex items-center justify-center mb-4 text-[#FB575C]">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="font-syne font-bold text-2xl text-white mb-2">
                Batch {selectedBatch} Archive
              </h3>
              <p className="font-outfit text-sm text-gray-400 max-w-md leading-relaxed mb-6">
                Archival records for the {selectedBatch} academic cohort are currently being digitized. Check back soon for updated alumni profiles!
              </p>
              <button 
                onClick={() => setSelectedBatch("2026-2027")}
                className="px-6 py-2.5 rounded-xl bg-white text-[#0a0a0a] font-outfit font-bold text-sm hover:bg-gray-200 transition-colors shadow-md"
              >
                Switch to Current Batch (2026-2027)
              </button>
            </motion.div>
          )}
        </section>
      </main>
    </div>
  );
}