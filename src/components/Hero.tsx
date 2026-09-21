"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-[#0a0a0c] select-none">
      {/* Full-width Background Image & Subtly Tuned Overlays */}
      <motion.div 
        style={{ y, scale, opacity }}
        className="absolute inset-0 z-0 w-full h-full"
      >
        {/* Subtle dark vignette & gradient overlay to preserve architectural lighting while enhancing text contrast */}
        <div className="absolute inset-0 bg-black/35 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/75 z-10 pointer-events-none" />
        
        <img 
          src="/hero-showroom.png" 
          alt="Architectural Showroom Environment" 
          className="w-full h-full object-cover object-center pointer-events-none"
        />
      </motion.div>

      {/* Centered Hero Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 pt-16 md:pt-20">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="uppercase tracking-[0.35em] text-gold text-[11px] md:text-xs font-sans font-medium mb-6 md:mb-8"
        >
          CURATED ARCHITECTURAL ENVIRONMENTS
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#f8f7f4] font-normal leading-[1.08] tracking-tight mb-10 max-w-5xl"
        >
          Experience the <br className="hidden sm:inline" />
          <span className="italic font-serif font-normal text-white/95">Showrooms</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link 
            href="#showrooms" 
            className="group relative inline-flex items-center justify-center px-9 py-4 text-xs font-sans uppercase tracking-[0.25em] text-gold border border-gold/70 hover:border-gold hover:text-white transition-all duration-500 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">ENTER THE SHOWROOMS</span>
          </Link>
        </motion.div>
      </div>

      {/* Minimal Scroll Hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 pointer-events-none"
      >
        <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-white/50 font-light">
          SCROLL TO DISCOVER
        </span>
        <div className="w-[1px] h-10 bg-white/15 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-full h-1/2 bg-gold/80 absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
}

