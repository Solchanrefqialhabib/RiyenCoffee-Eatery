// src/app/components/Header.tsx
"use client";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      role="banner"
      className={`sticky top-0 z-50 transition-all duration-500 backdrop-blur-md ${
        scrolled
          ? "bg-white/80 shadow-md"
          : "bg-white/30 shadow-sm"
      }`}
    >
      <Navbar />
    </header>
  );
}
