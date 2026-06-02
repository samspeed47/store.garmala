"use client";

import { useState } from "react";
import Link from "next/link";
import { Product } from "@/lib/googleSheets";
import { useCartStore } from "@/lib/store";
import { ShoppingBag, Check } from "lucide-react";

export default function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);
  const [added, setAdded] = useState(false);

  const handleAddToQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <Link href={`/${product.category_slug}/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface mb-6">
        <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors duration-700 z-10" />
        <img 
          src={product.cover_image || product.hero_image} 
          alt={product.title}
          className="w-full h-full object-cover scale-100 group-hover:scale-[1.03] transition-transform duration-[1200ms] ease-out"
        />
        
        {/* Dynamic Premium Action Triggers */}
        <div className="absolute bottom-4 left-4 right-4 z-20 flex gap-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
          <button 
            onClick={handleAddToQuote}
            className={`flex-1 text-[10px] uppercase tracking-[0.15em] py-3.5 font-bold flex items-center justify-center gap-2 transition-all duration-300 border border-transparent shadow-lg ${
              added 
                ? "bg-emerald-600 text-white" 
                : "bg-gold text-black hover:bg-gold-hover"
            }`}
          >
            {added ? (
              <>
                <Check className="w-3.5 h-3.5 stroke-[2.5]" /> Added
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5 stroke-[2.5]" /> Add to Quote
              </>
            )}
          </button>
          
          <span className="bg-background/90 backdrop-blur-sm text-foreground text-[10px] uppercase tracking-[0.15em] px-4 py-3.5 border border-border/40 hover:border-gold/50 transition-colors flex items-center justify-center font-bold shadow-lg">
            Details
          </span>
        </div>
      </div>
      
      <div className="flex justify-between items-start gap-4">
        <div>
          <h3 className="font-serif text-xl mb-1 group-hover:text-gold transition-colors duration-300">{product.title}</h3>
          <p className="text-sm text-foreground/50 line-clamp-1 font-light leading-relaxed">{product.short_description}</p>
        </div>
        <span className="text-sm font-semibold tracking-wider text-gold/90 whitespace-nowrap shrink-0">{product.price}</span>
      </div>
    </Link>
  );
}
