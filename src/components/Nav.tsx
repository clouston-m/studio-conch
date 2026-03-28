"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F5F0E8]/95 backdrop-blur-sm border-b border-[#1A1A1A]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          style={{ fontFamily: "var(--font-dm-serif), serif" }}
          className={`text-xl tracking-tight transition-colors duration-300 ${
            scrolled ? "text-[#1A1A1A]" : "text-[#F5F0E8]"
          }`}
        >
          Studio Conch
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {["Space", "Gallery", "Location"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-xs tracking-widest uppercase font-medium transition-colors duration-200 ${
                scrolled
                  ? "text-[#1A1A1A]/60 hover:text-[#1A1A1A]"
                  : "text-[#F5F0E8]/70 hover:text-[#F5F0E8]"
              }`}
            >
              {link}
            </a>
          ))}
          <a
            href="#enquire"
            className={`text-xs tracking-widest uppercase font-semibold px-5 py-2.5 rounded-full transition-all duration-200 ${
              scrolled
                ? "bg-[#1A1A1A] text-[#F5F0E8] hover:bg-[#C5F135] hover:text-[#1A1A1A]"
                : "bg-[#F5F0E8] text-[#1A1A1A] hover:bg-[#C5F135]"
            }`}
          >
            Enquire
          </a>
        </nav>
      </div>
    </header>
  );
}
