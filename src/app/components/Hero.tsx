"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const slideImages = ["/coffee.jpg", "/cili.jpg", "/team.jpg"];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  const fullText = "Nikmati Hari Anda dengan Kopi Terbaik";

  // Slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slideImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Typing effect
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setDisplayText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(typing);
    }, 100); // kecepatan ketikan
    return () => clearInterval(typing);
  }, []);

  // Cursor blinking
  useEffect(() => {
    const blink = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-center items-center text-white overflow-hidden">
      {/* Slideshow */}
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <Image
            src={slideImages[currentSlide]}
            alt="Suasana Riyen Coffee & Eatery "
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Konten Teks */}
      <motion.div
        className="text-center px-4 md:px-6 relative z-10 mt-24 md:mt-32 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {/* Efek Ketikan */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight shadow-text">
          {displayText}
          <span className="text-brand-primary">
            {cursorVisible ? "|" : " "}
          </span>
        </h1>

        <p className="mt-4 sm:mt-6 max-w-xl md:max-w-2xl mx-auto text-sm sm:text-lg md:text-xl text-gray-200">
          Tingkatkan produktivitas dan bangun suasana hati Anda dengan segelas kopi berkualitas dari Riyen Coffee & Eatery, disajikan khusus untuk Anda.
        </p>

        <div className="mt-8 md:mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/menu"
            className="bg-brand-primary text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold hover:bg-opacity-90 transition duration-300 shadow-lg text-xs sm:text-base"
          >
            TRY OUT NOW
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-3 font-semibold text-white hover:text-gray-200 transition text-xs sm:text-base"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Lihat Cerita Kami
          </Link>
        </div>
      </motion.div>

      {/* Indikator Slide */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slideImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
