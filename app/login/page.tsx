"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Firebase integration placeholder function
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Firebase auth logic will go here
    console.log("Attempting login with:", email);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-[#0a0a0a] overflow-hidden select-none">
      
      {/* Subtle Noise Texture Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay z-0"
        style={{ backgroundImage: "url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
      />

      {/* Header */}
      <Header />

      {/* Main Login Content */}
      <main className="relative z-10 flex-grow flex items-center justify-center px-4 mt-24 pb-12">
        {/* Transparent Glassmorphic Card with Reduced Height/Padding */}
        <div className="w-full max-w-md bg-white/5 backdrop-blur-xl rounded-3xl py-8 px-6 sm:px-10 shadow-2xl border border-white/10 flex flex-col items-center">
          
          {/* Shining Text Effect */}
          <h1 className="font-syne font-extrabold text-4xl mb-2 text-center shining-text shining-container">
            Welcome Back
          </h1>
          <p className="font-outfit text-gray-400 text-sm mb-8 text-center">
            Sign in to access your EIC dashboard.
          </p>

          <form className="w-full flex flex-col gap-5" onSubmit={handleLogin}>
            <div className="flex flex-col gap-2">
              <label htmlFor="signup-email" className="text-xs font-semibold text-gray-300 tracking-wide uppercase">
                Email Address
              </label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@iiserpune.ac.in" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-outfit text-white placeholder-gray-600 focus:outline-none focus:border-[#FB575C] focus:ring-1 focus:ring-[#FB575C] transition-all"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-outfit text-sm font-semibold text-gray-300">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-outfit text-white placeholder-gray-600 focus:outline-none focus:border-[#FB575C] focus:ring-1 focus:ring-[#FB575C] transition-all"
                required
              />
            </div>

            <div className="flex justify-between items-center mt-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-600 bg-black/50 text-[#ea1012] focus:ring-[#ea1012]" />
                <span className="font-outfit text-sm text-gray-400 group-hover:text-gray-200 transition-colors">Remember me</span>
              </label>
              <Link href="#" className="font-outfit text-sm text-[#ea1012] font-semibold hover:text-[#FB575C] transition-colors">
                Forgot password?
              </Link>
            </div>

            <button 
              type="submit"
              className="w-full mt-4 bg-[#ea1012] hover:bg-[#FB575C] text-white font-syne font-bold text-lg py-3.5 rounded-xl shadow-lg hover:shadow-[#ea1012]/40 hover:-translate-y-1 transition-all duration-300"
            >
              Sign In
            </button>
          </form>

          <p className="mt-8 font-outfit text-sm text-gray-400 text-center">
            Don't have an account?{" "}
            <Link href="/signup" className="text-white font-bold hover:text-[#ea1012] transition-colors">
              Sign up
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}