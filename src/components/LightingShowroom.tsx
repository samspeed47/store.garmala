"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const LIGHTING_SLIDES = [
  {
    src: "/lighting/lighting-1.jpg",
    alt: "Garmala Lighting Showroom Environment",
    title: "Showroom Environment",
  },
  {
    src: "/lighting/lighting-2.jpg",
    alt: "Statement Gold Ring Chandelier",
    title: "Statement Chandelier",
  },
  {
    src: "/lighting/lighting-3.jpg",
    alt: "Architectural Wall Light Sconces",
    title: "Wall Light Sconces",
  },
  {
    src: "/lighting/lighting-4.jpg",
    alt: "Glass Cylinder Wall Light Detail",
    title: "Wall Light Detail",
  },
];

export default function LightingShowroom() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % LIGHTING_SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-20 my-12 md:my-20"
    >
      {/* Background Oversized Faint Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden flex justify-center pointer-events-none z-0 opacity-[0.015] select-none">
        <h2 className="font-serif text-[10rem] sm:text-[16rem] md:text-[22rem] whitespace-nowrap leading-none text-white tracking-widest uppercase">
          LIGHTING
        </h2>
      </div>

      {/* Editorial Image Slideshow (Left Column) */}
      <div className="w-full md:w-[62%] relative z-10">
        <Link href="/lighting" className="block relative aspect-[16/10] w-full bg-[#0a0a0c] overflow-hidden select-none">
          <AnimatePresence mode="sync">
            <motion.img 
              key={currentSlide}
              src={LIGHTING_SLIDES[currentSlide].src} 
              alt={LIGHTING_SLIDES[currentSlide].alt}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1.02 }}
              exit={{ opacity: 0 }}
              transition={{ 
                opacity: { duration: 1.3, ease: "easeInOut" },
                scale: { duration: 5, ease: "linear" }
              }}
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            />
          </AnimatePresence>

          {/* Understated Minimalist Slide Counter */}
          <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-xs px-3 py-1 font-mono text-[10px] tracking-[0.25em] text-white/70 select-none">
            <span>0{currentSlide + 1} / 0{LIGHTING_SLIDES.length}</span>
          </div>
        </Link>
      </div>

      {/* Showroom Editorial Copy (Right Column) */}
      <motion.div 
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="w-full md:w-[38%] relative z-10 flex flex-col justify-center px-2 md:px-0"
      >
        <span className="text-gold text-[11px] uppercase tracking-[0.3em] font-sans font-medium mb-3 md:mb-4 block">
          01 &mdash; SHOWROOM
        </span>
        <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#f8f7f4] font-normal leading-[1.08] mb-5 md:mb-6">
          Lighting<br />Showroom
        </h3>
        <p className="text-white/70 text-base md:text-lg font-sans font-light leading-relaxed mb-8 md:mb-10 max-w-md">
          Illuminate your space with architectural precision.
        </p>
        <Link 
          href="/lighting"
          className="group inline-flex items-center gap-3 text-xs font-sans uppercase tracking-[0.25em] text-[#f8f7f4] hover:text-gold transition-colors duration-300 w-max"
        >
          <span>ENTER SHOWROOM</span>
          <span className="text-gold group-hover:translate-x-1.5 transition-transform duration-300">→</span>
        </Link>
      </motion.div>
    </motion.div>
  );
}
