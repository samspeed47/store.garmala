"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { Product } from "@/lib/googleSheets";

interface ProductHorizontalSliderProps {
  products: Product[];
}

export default function ProductHorizontalSlider({ products }: ProductHorizontalSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
      
      const totalScrollable = scrollWidth - clientWidth;
      if (totalScrollable > 0) {
        setScrollProgress((scrollLeft / totalScrollable) * 100);
      }
    }
  };

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      checkScroll();
      window.addEventListener("resize", checkScroll);
      // Wait for layout/images load
      const timer = setTimeout(checkScroll, 500);
      return () => {
        window.removeEventListener("resize", checkScroll);
        clearTimeout(timer);
      };
    }
  }, [products]);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const { clientWidth } = containerRef.current;
      const scrollAmount = direction === "left" ? -clientWidth * 0.75 : clientWidth * 0.75;
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative group/slider w-full">
      {/* Dynamic Scroller Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* Slider Controls */}
      <div className="absolute -top-16 right-0 flex gap-2">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={`w-10 h-10 border rounded-full flex items-center justify-center transition-all duration-300 ${
            canScrollLeft
              ? "border-border hover:border-gold text-foreground hover:text-gold cursor-pointer"
              : "border-border/20 text-foreground/20 cursor-not-allowed"
          }`}
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={`w-10 h-10 border rounded-full flex items-center justify-center transition-all duration-300 ${
            canScrollRight
              ? "border-border hover:border-gold text-foreground hover:text-gold cursor-pointer"
              : "border-border/20 text-foreground/20 cursor-not-allowed"
          }`}
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Horizontal Scroller Container */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex gap-6 md:gap-8 overflow-x-auto pb-6 pt-1 hide-scrollbar snap-x snap-mandatory scroll-smooth w-full"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[280px] sm:w-[320px] md:w-[380px] shrink-0 snap-start"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Elegant Linear Scroll Indicator */}
      <div className="w-full h-[1px] bg-border/30 relative mt-4">
        <div
          className="absolute h-[1.5px] bg-gold top-[-0.5px] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%`, left: 0 }}
        />
      </div>
    </div>
  );

  function handleScroll() {
    checkScroll();
  }
}
