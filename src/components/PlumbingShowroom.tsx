"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PlumbingShowroom() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-20 my-12 md:my-20"
    >
      {/* Background Oversized Faint Watermark Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden flex justify-center pointer-events-none z-0 opacity-[0.015] select-none">
        <h2 className="font-serif text-[10rem] sm:text-[16rem] md:text-[22rem] whitespace-nowrap leading-none text-white tracking-widest uppercase">
          PLUMBING
        </h2>
      </div>

      {/* Showroom Editorial Copy (Left Column) */}
      <motion.div 
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="w-full md:w-[38%] relative z-10 flex flex-col justify-center px-2 md:px-0"
      >
        <span className="text-gold text-[11px] uppercase tracking-[0.3em] font-sans font-medium mb-3 md:mb-4 block">
          02 &mdash; SHOWROOM
        </span>
        <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#f8f7f4] font-normal leading-[1.08] mb-5 md:mb-6">
          Plumbing<br />Showroom
        </h3>
        <p className="text-white/70 text-base md:text-lg font-sans font-light leading-relaxed mb-8 md:mb-10 max-w-md">
          Refined fixtures and sanitaryware for considered spaces.
        </p>
        <Link 
          href="/plumbing"
          className="group inline-flex items-center gap-3 text-xs font-sans uppercase tracking-[0.25em] text-[#f8f7f4] hover:text-gold transition-colors duration-300 w-max"
        >
          <span>EXPLORE SHOWROOM</span>
          <span className="text-gold group-hover:translate-x-1.5 transition-transform duration-300">→</span>
        </Link>
      </motion.div>

      {/* Architectural Image (Right Column) */}
      <div className="w-full md:w-[62%] relative z-10">
        <Link href="/plumbing" className="block relative aspect-[16/10] w-full bg-[#0a0a0c] overflow-hidden select-none">
          <motion.img 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            src="/plumbing/plumbing-hero.jpg" 
            alt="Plumbing Showroom Architectural Sanctuary"
            className="w-full h-full object-cover object-center pointer-events-none"
          />
          {/* Subtle dark tint overlay */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </Link>
      </div>
    </motion.div>
  );
}
