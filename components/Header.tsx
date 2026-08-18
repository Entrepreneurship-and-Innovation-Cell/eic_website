"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Detect scroll to shrink the navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-2 bg-[#ea1012]/95 backdrop-blur-md shadow-lg" // Narrow & frosted when scrolled
          : "py-6 bg-[#ea1012]" // Broad & solid when at the top
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Left: Logo Area */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Shrunk back to a tight square, rounded into a circle, and edges cropped */}
          <div className="relative w-12 h-12 md:w-14 md:h-14 bg-white rounded-full overflow-hidden shadow-md shrink-0">
            <Image 
              src="/assets/eic_logo.png" 
              alt="EIC Logo" 
              fill 
              className="object-cover" 
            />
          </div>
          <div className="hidden sm:flex flex-col logo-text-hover">
            <span className="font-syne font-extrabold text-[#F3EED9] text-xl leading-none tracking-wide">EIC</span>
            <span className="font-outfit text-xs text-[#F3EED9] tracking-widest"> IISER PUNE</span>
          </div>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-outfit font-semibold text-[#F3EED9]">
          <Link href="/#about" className="nav-link-shine">About</Link>
          <Link href="/team" className="nav-link-shine">Team</Link>
        </nav>

        {/* Right: Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="font-outfit font-bold text-[#F3EED9] hover:text-white transition-colors">
            Login
          </Link>
          <Link href="/signup" className="px-5 py-2 bg-[#F3EED9] text-[#ea1012] font-outfit font-bold rounded-full hover:bg-white transition-colors shadow-md hover:shadow-lg">
            Signup
          </Link>
        </div>

        {/* Mobile: Hamburger Button */}
        <button
          className="md:hidden text-[#F3EED9] p-2 focus:outline-none transition-transform active:scale-95"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            // X Icon
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Menu Icon
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile: Dropdown Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-[#ea1012] border-t border-[#F3EED9]/15 transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-[400px] py-6 shadow-2xl opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 font-outfit font-semibold text-[#F3EED9]">
          <Link href="/#about" onClick={() => setIsMenuOpen(false)} className="hover:text-white text-lg">About</Link>
          <Link href="/team" onClick={() => setIsMenuOpen(false)} className="hover:text-white text-lg">Team</Link>
          <Link href="/#events" onClick={() => setIsMenuOpen(false)} className="hover:text-white text-lg">Events</Link>
          <Link href="/#archive" onClick={() => setIsMenuOpen(false)} className="hover:text-white text-lg">Archive</Link>
          
          <div className="flex items-center gap-4 mt-4 w-full justify-center px-6">
            <Link 
              href="/login" 
              onClick={() => setIsMenuOpen(false)} 
              className="px-6 py-2 border-2 border-[#F3EED9] rounded-full hover:bg-[#F3EED9]/10 transition-colors w-1/2 text-center"
            >
              Login
            </Link>
            <Link 
              href="/signup" 
              onClick={() => setIsMenuOpen(false)} 
              className="px-6 py-2 bg-[#F3EED9] text-[#ea1012] rounded-full w-1/2 text-center shadow-md"
            >
              Signup
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
