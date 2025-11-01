"use client";
import { useCallback } from "react";

export default function Navbar() {
  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    const nav = document.getElementById("site-navbar");
    if (!el) return;
    const navHeight = nav ? nav.offsetHeight : 0;
    const targetY = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  }, []);

  return (
    <nav id="site-navbar" className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-[#EDE8D0]">
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-14 flex items-center justify-between">
        <div className="font-semibold text-sm md:text-lg">LARAS</div>
        <div className="flex gap-4 md:gap-6 text-sm md:text-base">
          <button onClick={() => scrollTo("aboutme")} className="hover:underline">About Me</button>
          <button onClick={() => scrollTo("myprojects")} className="hover:underline">My Projects</button>
          <button onClick={() => scrollTo("experiences")} className="hover:underline">My Experiences</button>
        </div>
      </div>
    </nav>
  );
}