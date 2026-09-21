"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CURATED_CATEGORIES = [
  "Sanitaryware",
  "Faucets & Mixers",
  "Showers",
  "Basins",
  "Bathroom Accessories",
];

export default function PlumbingCategoryPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0c] text-foreground pt-28 pb-16 selection:bg-gold selection:text-black">
      <Navbar />

      {/* Part 2A — Showroom Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-12 md:pt-20 pb-16 md:pb-28">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16"
        >
          {/* Left Text Content */}
          <div className="w-full md:w-[40%] flex flex-col justify-center">
            <span className="text-gold text-[11px] uppercase tracking-[0.3em] font-sans font-medium mb-4 block">
              GARMALA SHOWROOM
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#f8f7f4] font-normal leading-[1.08] tracking-tight mb-6">
              Plumbing<br />Showroom
            </h1>
            <p className="text-white/70 text-base md:text-lg font-sans font-light leading-relaxed max-w-lg">
              Refined fixtures and sanitaryware for considered spaces.
            </p>
          </div>

          {/* Right Hero Architectural Image (55–65% area) */}
          <div className="w-full md:w-[60%] relative z-10">
            <div className="relative aspect-[16/10] w-full bg-[#0a0a0c] overflow-hidden select-none">
              <motion.img 
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                src="/plumbing/plumbing-hero.jpg" 
                alt="Architectural Plumbing & Sanitaryware Sanctuary"
                className="w-full h-full object-cover object-center pointer-events-none"
              />
              <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Part 2B — Collection Curation & Part 2C — Categories */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* Collection Curation Statement (Left 7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 flex flex-col"
          >
            <span className="text-gold text-[11px] uppercase tracking-[0.3em] font-sans font-medium mb-4 block">
              THE COLLECTION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f8f7f4] font-normal leading-tight mb-6">
              Currently being curated.
            </h2>
            <p className="text-white/70 text-base md:text-lg font-sans font-light leading-relaxed max-w-2xl mb-8">
              We are building a considered collection of sanitaryware, fixtures and bathroom essentials for residential projects. Garmala focuses on products selected for design, practicality and long-term use.
            </p>
            <span className="text-white/50 text-xs font-sans uppercase tracking-[0.25em] font-medium">
              Launching progressively.
            </span>
          </motion.div>

          {/* Categories Being Curated List (Right 5 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 flex flex-col pt-2 md:pt-0"
          >
            <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-sans font-medium mb-6 block">
              CATEGORIES BEING CURATED
            </span>

            <div className="flex flex-col border-b border-white/10">
              {CURATED_CATEGORIES.map((catName, i) => (
                <div 
                  key={catName}
                  className="border-t border-white/10 py-4 md:py-5 flex justify-between items-center group transition-colors duration-300"
                >
                  <span className="text-[#f8f7f4] group-hover:text-gold font-sans font-light text-base md:text-lg transition-colors duration-300">
                    {catName}
                  </span>
                  <span className="text-white/30 text-xs font-mono">0{i + 1}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Part 2D — Project Sourcing CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#121214] py-16 md:py-24 px-8 md:px-16 border border-white/5 text-center flex flex-col items-center"
        >
          <span className="text-gold text-[11px] uppercase tracking-[0.3em] font-sans font-medium mb-4 block">
            PROJECT SOURCING
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f8f7f4] font-normal leading-tight mb-5 max-w-xl">
            Looking for something specific?
          </h3>
          <p className="text-white/70 text-base md:text-lg font-sans font-light leading-relaxed max-w-xl mb-8">
            Garmala can assist with sourcing sanitaryware and bathroom fixtures for residential projects while the online collection is being expanded.
          </p>
          <Link 
            href="/about"
            className="group inline-flex items-center gap-3 text-xs font-sans uppercase tracking-[0.25em] text-[#f8f7f4] hover:text-gold transition-colors duration-300"
          >
            <span>CONTACT GARMALA</span>
            <span className="text-gold group-hover:translate-x-1.5 transition-transform duration-300">→</span>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
