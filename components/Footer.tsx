"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Send, CheckCircle2, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="relative w-full bg-[#ea1012] text-[#F3EED9] border-t border-[#F3EED9]/20 font-outfit z-30">
      
      {/* Ambient background glow */}
      <div className="absolute inset-0 spotlight-bg pointer-events-none z-0 opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-12">
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          
          {/* Column 1: Brand & Newsletter */}
          <div className="flex flex-col items-start gap-5">
            <Link href="/" className="group flex items-center gap-3 hover:opacity-100 transition-opacity duration-300">
              <div className="flex flex-col">
                <span className="font-syne font-extrabold text-3xl tracking-tighter text-[#F3EED9] leading-none logo-text-hover">
                  EIC
                </span>
                <span className="font-outfit font-semibold text-[10px] tracking-widest text-[#F3EED9] opacity-80 uppercase transition-opacity duration-300 group-hover:opacity-100">
                  IISER PUNE
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#F3EED9]/80 leading-relaxed max-w-xs">
              Entrepreneurship &amp; Innovation Cell — Fostering research-backed startups, technological innovation, and founder growth.
            </p>

            <div className="w-full mt-1">
              <p className="text-xs font-semibold text-[#F3EED9] uppercase tracking-wider mb-2.5">
                Subscribe to our Newsletter
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#D1E7E0]/15 border border-[#D1E7E0]/40 text-[#D1E7E0] text-xs font-medium animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4 text-[#D1E7E0] shrink-0" />
                  <span>Thank you for subscribing!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="relative flex items-center w-full">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    required
                    className="w-full bg-[#ea1012]/80 text-[#F3EED9] placeholder-[#F3EED9]/40 border border-[#F3EED9]/30 focus:border-[#F3EED9] rounded-xl text-xs py-2.5 px-3.5 pr-10 outline-none transition-colors duration-200"
                  />
                  <button
                    type="submit"
                    title="Submit"
                    className="absolute right-1.5 p-1.5 rounded-lg bg-[#F3EED9]/10 hover:bg-[#FB575C] text-[#F3EED9] hover:text-white border border-[#F3EED9]/20 transition-all duration-300"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/eiciiserp/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="flex items-center justify-center w-8 h-8 rounded-full border border-[#F3EED9]/20 bg-[#F3EED9]/5 hover:bg-[#FB575C] hover:border-[#FB575C] text-[#F3EED9] hover:text-white transition-all duration-300 transform hover:scale-110 active:scale-95"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/eic.iiserpune/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="flex items-center justify-center w-8 h-8 rounded-full border border-[#F3EED9]/20 bg-[#F3EED9]/5 hover:bg-[#FB575C] hover:border-[#FB575C] text-[#F3EED9] hover:text-white transition-all duration-300 transform hover:scale-110 active:scale-95"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: OUR EVENTS */}
          <div className="flex flex-col items-start gap-4">
            <h3 className="font-syne font-bold text-sm tracking-wider text-[#F3EED9]/70 uppercase">
              OUR EVENTS
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs text-[#F3EED9]/80 font-medium">
              <li>
                <Link href="/events" className="hover:text-[#D1E7E0] transition-colors duration-200 flex items-center gap-1.5">
                  Upcoming Workshop
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-[#D1E7E0] transition-colors duration-200 flex items-center gap-1.5">
                  Annual Innovation Summit
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-[#D1E7E0] transition-colors duration-200 flex items-center gap-1.5">
                  Student Pitch Night
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-[#D1E7E0] transition-colors duration-200 flex items-center gap-1.5">
                  EIC Hackathon 2026
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: USEFUL LINKS */}
          <div className="flex flex-col items-start gap-4">
            <h3 className="font-syne font-bold text-sm tracking-wider text-[#F3EED9]/70 uppercase">
              USEFUL LINKS
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs text-[#F3EED9]/80 font-medium">
              <li>
                <Link href="/" className="hover:text-[#D1E7E0] transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-[#D1E7E0] transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-[#D1E7E0] transition-colors duration-200">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/archive" className="hover:text-[#D1E7E0] transition-colors duration-200">
                  Archive
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: CONTACT */}
          <div className="flex flex-col items-start gap-4">
            <h3 className="font-syne font-bold text-sm tracking-wider text-[#F3EED9]/70 uppercase">
              CONTACT
            </h3>
            <div className="flex flex-col gap-3 text-xs text-[#F3EED9]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FB575C] shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/tHKRLGXAjPnpAnZU6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors leading-relaxed"
                >
                  IISER Pune, Dr. Homi Bhabha Road,<br />
                  Pune 411008, India
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FB575C] shrink-0" />
                <span>Ph.: +91 20 25908000</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FB575C] shrink-0" />
                <a
                  href="mailto:eic@iiserpune.ac.in"
                  className="hover:text-[#D1E7E0] transition-colors"
                >
                  eic@iiserpune.ac.in
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#F3EED9]/10 text-center">
          <p className="text-xs text-[#F3EED9]/70 font-outfit">
            &copy; 2026 Entrepreneurship &amp; Innovation Cell, IISER Pune. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
