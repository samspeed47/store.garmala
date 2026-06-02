"use client";

import { useState, useEffect } from "react";
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
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 transition-all duration-500",
          isScrolled ? "glass py-4" : "bg-transparent py-6"
        )}
      >
        <div className="flex items-center gap-6 md:gap-12 w-1/3">
          <button 
            className="md:hidden text-foreground hover:text-gold transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-[0.2em]">
            <Link href="/lighting" className="hover:text-gold transition-colors">Lighting Showroom</Link>
            <Link href="/plumbing" className="hover:text-gold transition-colors">Plumbing Showroom</Link>
            <Link href="/wood" className="hover:text-gold transition-colors">Wood Showroom</Link>
          </nav>
        </div>

        <div className="flex justify-center w-1/3">
          <Link href="/" className="font-serif text-2xl md:text-3xl tracking-widest text-center">
            GARMALA
          </Link>
        </div>

        <div className="flex justify-end items-center gap-6 w-1/3">
          <button className="hover:text-gold transition-colors">
            <Search className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="hover:text-gold transition-colors relative"
          >
            <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-2 bg-gold text-background text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
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
            <button onClick={() => setMobileMenuOpen(false)}>
              <X className="w-8 h-8 text-foreground" />
            </button>
          </div>
          <nav className="flex flex-col gap-8 mt-20 text-3xl font-serif text-center">
            <Link href="/lighting" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold">Lighting Showroom</Link>
            <Link href="/plumbing" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold">Plumbing Showroom</Link>
            <Link href="/wood" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold">Wood Showroom</Link>
          </nav>
        </motion.div>
      )}
    </>
  );
}
