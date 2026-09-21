"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Category } from "@/lib/googleSheets";
import LightingShowroom from "./LightingShowroom";
import PlumbingShowroom from "./PlumbingShowroom";
import WoodShowroom from "./WoodShowroom";

export default function ShowroomGrid({ categories }: { categories: Category[] }) {
  return (
    <div className="flex flex-col gap-24 md:gap-40 mt-12 md:mt-20">
      {categories.map((category, idx) => {
        // Render custom architectural editorial component for Lighting Showroom
        if (category.slug === "lighting" || (idx === 0 && category.slug !== "plumbing" && category.slug !== "wood")) {
          return <LightingShowroom key={category.id} />;
        }

        // Render custom architectural editorial component for Plumbing Showroom
        if (category.slug === "plumbing") {
          return <PlumbingShowroom key={category.id} />;
        }

        // Render custom architectural editorial component for Woodworks Showroom
        if (category.slug === "wood") {
          return <WoodShowroom key={category.id} />;
        }

        const isEven = idx % 2 === 0;

        return (
          <motion.div 
            key={category.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
          >
            {/* Background massive typography */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden flex justify-center pointer-events-none z-0 opacity-[0.015]">
              <h2 className="font-serif text-[8rem] md:text-[16rem] whitespace-nowrap leading-none text-white tracking-widest uppercase">
                {category.title.replace(' Showroom', '').toUpperCase()}
              </h2>
            </div>

            <div className={`w-full md:w-3/5 relative z-10 ${isEven ? 'md:pr-10' : 'md:pl-10'}`}>
              <Link href={`/${category.slug}`} className="group block overflow-hidden">
                <div className="relative aspect-[4/5] md:aspect-[16/10] w-full bg-surface overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-1000 z-10" />
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src={category.image_url} 
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 border border-white/10 group-hover:border-gold/50 transition-colors duration-1000 z-20 m-4 md:m-8" />
                </div>
              </Link>
            </div>

            <div className="w-full md:w-2/5 relative z-10 flex flex-col justify-center px-6 md:px-0">
              <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-4 block">
                0{idx + 1} &mdash; Showroom
              </span>
              <h3 className="font-serif text-4xl md:text-6xl mb-6">{category.title}</h3>
              <p className="text-foreground/70 text-lg leading-relaxed mb-10 max-w-md">
                {category.description}
              </p>
              <Link 
                href={`/${category.slug}`}
                className="group flex items-center gap-4 text-sm uppercase tracking-widest text-foreground hover:text-gold transition-colors w-max"
              >
                <span>Enter Showroom</span>
                <span className="block w-12 h-[1px] bg-foreground group-hover:bg-gold group-hover:w-20 transition-all duration-500" />
              </Link>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}



