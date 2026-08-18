"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import { User, Mail, Lock, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase"; // Adjust this path if needed based on your file structure

export default function SignupPage() {
  const router = useRouter();
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // 1. Create the user in Firebase
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // 2. Update their Firebase profile with their full name
      await updateProfile(userCredential.user, {
        displayName: `${firstName} ${lastName}`
      });

      // 3. Send the official Firebase verification email
      await sendEmailVerification(userCredential.user);

      // 4. Show success and redirect
      setSubmitted(true);
      setTimeout(() => {
        router.push("/login"); // Redirecting to login so they can sign in after verifying!
      }, 3000);

    } catch (err: any) {
      setError(err.message.replace("Firebase: ", ""));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between bg-[#0a0a0a] text-gray-100 overflow-x-hidden selection:bg-[#FB575C] selection:text-white">
      
      {/* Subtle Noise Texture Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay z-0"
        style={{
          backgroundImage: "url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')",
        }}
      />
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#FB575C]/10 blur-[140px] rounded-full pointer-events-none z-0" />

      <Header />

      <main className="relative z-10 flex-1 w-full max-w-lg mx-auto px-6 pt-20 pb-16 flex flex-col items-center justify-center">
        
        <div className="relative w-full bg-[#141414]/80 border border-white/10 rounded-3xl p-8 pt-16 shadow-2xl shadow-black/60 backdrop-blur-xl flex flex-col items-center">

          <h1 className="font-syne font-extrabold text-4xl mb-2 text-center shining-text shining-container">
            Create Account
          </h1>
          <p className="font-outfit text-xs text-gray-400 mb-6 text-center">
            Join the Entrepreneurship &amp; Innovation Cell community at IISER Pune.
          </p>

          {/* Firebase Error Message */}
          {error && (
            <div className="w-full mb-6 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-outfit text-center font-medium animate-fadeIn">
              {error}
            </div>
          )}

          {/* Success Message */}
          {submitted && (
            <div className="w-full mb-6 p-3 rounded-xl bg-[#FB575C]/10 border border-[#FB575C]/30 text-[#FB575C] text-xs font-outfit text-center font-medium animate-fadeIn">
              Success! Please check your inbox for a verification link. Redirecting...
            </div>
          )}

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 font-outfit">
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="first-name" className="text-xs font-semibold text-gray-300 tracking-wide uppercase">First Name</label>
                <div className="relative flex items-center">
                  <User className="absolute left-3 w-4 h-4 text-[#FB575C] pointer-events-none" />
                  <input
                    id="first-name" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required
                    className="w-full bg-[#0a0a0a] text-white placeholder-gray-500 border border-white/10 focus:border-[#FB575C] focus:ring-1 focus:ring-[#FB575C] rounded-xl text-sm py-2.5 pl-9 pr-3 outline-none transition-all duration-200"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="last-name" className="text-xs font-semibold text-gray-300 tracking-wide uppercase">Last Name</label>
                <div className="relative flex items-center">
                  <User className="absolute left-3 w-4 h-4 text-[#FB575C] pointer-events-none" />
                  <input
                    id="last-name" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required
                    className="w-full bg-[#0a0a0a] text-white placeholder-gray-500 border border-white/10 focus:border-[#FB575C] focus:ring-1 focus:ring-[#FB575C] rounded-xl text-sm py-2.5 pl-9 pr-3 outline-none transition-all duration-200"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="signup-email" className="text-xs font-semibold text-gray-300 tracking-wide uppercase">Email Address</label>
              <div className="relative flex items-center gap-2">
                <div className="relative flex-1 flex items-center">
                  <Mail className="absolute left-3.5 w-4 h-4 text-[#FB575C] pointer-events-none" />
                  <input
                    id="signup-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                    className="w-full bg-[#0a0a0a] text-white placeholder-gray-500 border border-white/10 focus:border-[#FB575C] focus:ring-1 focus:ring-[#FB575C] rounded-xl text-sm py-2.5 pl-10 pr-3 outline-none transition-all duration-200"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="signup-password" className="text-xs font-semibold text-gray-300 tracking-wide uppercase">Password</label>
              <div className="relative flex items-center">
                <Lock className="absolute left-3.5 w-4 h-4 text-[#FB575C] pointer-events-none" />
                <input
                  id="signup-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Minimum 8 characters" required minLength={8}
                  className="w-full bg-[#0a0a0a] text-white placeholder-gray-500 border border-white/10 focus:border-[#FB575C] focus:ring-1 focus:ring-[#FB575C] rounded-xl text-sm py-2.5 pl-10 pr-4 outline-none transition-all duration-200"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="mt-3 w-full bg-white text-[#0a0a0a] font-bold text-sm py-3.5 rounded-xl hover:bg-gray-200 transition-all duration-200 shadow-lg shadow-black/40 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-70"
            >
              <span>{isLoading ? "Creating Account..." : "Create Account"}</span>
              {!isLoading && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
            </button>

          </form>

          <div className="mt-6 pt-4 border-t border-white/10 text-center w-full">
            <p className="font-outfit text-xs text-gray-400">
              Already have an account?{" "}
              <Link href="/login" className="font-semibold text-[#FB575C] hover:underline">
                Sign in
              </Link>
            </p>
          </div>

        </div>

      </main>

    </div>
  );
}