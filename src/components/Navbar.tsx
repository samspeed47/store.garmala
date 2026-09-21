"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import clsx from "clsx";

import { useCartStore } from "@/lib/store";
import CartDrawer from "./CartDrawer";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const totalItems = useCartStore((state) => state.totalItems());

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 40);
  });

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-500 border-b border-white/5",
          isScrolled ? "glass py-4" : "bg-gradient-to-b from-black/75 via-black/30 to-transparent py-6"
        )}
      >
        <div className="flex items-center gap-6 w-1/3">
          <button 
            className="md:hidden text-white/90 hover:text-gold transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <nav className="hidden md:flex items-center gap-7 text-[11px] uppercase tracking-[0.25em] font-sans font-light text-white/80">
            <Link href="/lighting" className="hover:text-gold transition-colors duration-300">
              LIGHTING SHOWROOM
            </Link>
            <Link href="/plumbing" className="hover:text-gold transition-colors duration-300">
              PLUMBING SHOWROOM
            </Link>
            <Link href="/wood" className="hover:text-gold transition-colors duration-300">
              WOOD SHOWROOM
            </Link>
          </nav>
        </div>

        <div className="flex justify-center w-1/3">
          <Link href="/" className="font-serif text-2xl md:text-3xl tracking-[0.35em] text-[#f8f7f4] font-normal hover:text-white transition-colors duration-300">
            GARMALA
          </Link>
        </div>

        <div className="flex justify-end items-center gap-6 w-1/3">
          <button className="text-white/80 hover:text-gold transition-colors duration-300" aria-label="Search">
            <Search className="w-4 h-4 md:w-[18px] md:h-[18px]" strokeWidth={1.25} />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="text-white/80 hover:text-gold transition-colors duration-300 relative"
            aria-label="Cart"
          >
            <ShoppingBag className="w-4 h-4 md:w-[18px] md:h-[18px]" strokeWidth={1.25} />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-gold text-black text-[9px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </motion.header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-md flex flex-col p-6"
        >
          <div className="flex justify-end">
            <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
              <X className="w-7 h-7 text-white/90" />
            </button>
          </div>
          <nav className="flex flex-col gap-8 mt-20 text-center font-sans">
            <Link href="/lighting" onClick={() => setMobileMenuOpen(false)} className="text-white/90 hover:text-gold uppercase tracking-[0.25em] text-xs font-light">
              LIGHTING SHOWROOM
            </Link>
            <Link href="/plumbing" onClick={() => setMobileMenuOpen(false)} className="text-white/90 hover:text-gold uppercase tracking-[0.25em] text-xs font-light">
              PLUMBING SHOWROOM
            </Link>
            <Link href="/wood" onClick={() => setMobileMenuOpen(false)} className="text-white/90 hover:text-gold uppercase tracking-[0.25em] text-xs font-light">
              WOOD SHOWROOM
            </Link>
          </nav>
        </motion.div>
      )}
    </>
  );
}

