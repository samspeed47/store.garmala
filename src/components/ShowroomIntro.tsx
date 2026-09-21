"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ShowroomIntro() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="py-16 md:py-24 lg:py-28 border-b border-white/5"
    >
      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-16 relative">
        {/* Left Column — Showroom Intro (58% width) */}
        <div className="w-full lg:w-[58%] flex flex-col justify-between">
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#f8f7f4] font-normal tracking-tight mb-5 md:mb-6">
              The Showrooms
            </h2>
            <p className="text-white/70 font-sans font-light text-base md:text-lg leading-relaxed max-w-lg mb-8">
              Step into meticulously designed environments. Each showroom is curated to inspire and elevate your architectural vision.
            </p>
          </div>

          {/* Quiet Showrooms Subtitle Tag */}
          <div className="pt-2 md:pt-6">
            <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.35em] text-gold/80 font-medium select-none">
              LIGHTING &middot; PLUMBING &middot; WOODWORKS
            </span>
          </div>
        </div>

        {/* Thin Vertical Divider (Desktop) */}
        <div className="hidden lg:block w-[1px] bg-white/10 self-stretch my-2" />

        {/* Thin Horizontal Divider (Mobile) */}
        <div className="lg:hidden w-full h-[1px] bg-white/10 my-2" />

        {/* Right Column — Our Philosophy Teaser (42% width) */}
        <div className="w-full lg:w-[42%] flex flex-col justify-between relative overflow-hidden pl-0 lg:pl-4">
          {/* Subtle Watermark Word */}
          <span className="absolute -bottom-6 right-0 text-7xl lg:text-8xl font-serif text-white opacity-[0.025] select-none pointer-events-none tracking-widest uppercase">
            DETAIL
          </span>

          <div className="relative z-10">
            <span className="text-gold text-[11px] uppercase tracking-[0.3em] font-sans font-medium mb-2 block">
              OUR PHILOSOPHY
            </span>
            {/* Thin gold accent line */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "48px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[1px] bg-gold/50 mb-5"
            />

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#f8f7f4] font-normal leading-snug mb-4">
              Spaces are defined by the details.
            </h3>
            <p className="text-white/65 font-sans font-light text-sm sm:text-base leading-relaxed max-w-md mb-8">
              Garmala brings together considered materials, fixtures and finishes selected to balance design, functionality and lasting value.
            </p>
          </div>

          <div className="relative z-10 pt-2">
            <Link 
              href="/about"
              className="group inline-flex items-center gap-3 text-xs font-sans uppercase tracking-[0.25em] text-[#f8f7f4] hover:text-gold transition-colors duration-300"
            >
              <span>DISCOVER OUR PHILOSOPHY</span>
              <span className="text-gold group-hover:translate-x-1.5 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
