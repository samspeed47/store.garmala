"use client";

import { useState } from "react";
import { useCartStore } from "@/lib/store";
import { Product } from "@/lib/googleSheets";
import { ShoppingBag, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AddToCartButton({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      onClick={handleAdd}
      className="relative bg-gold text-black px-10 py-4 uppercase text-xs tracking-widest hover:bg-gold-hover transition-colors font-semibold flex items-center justify-center gap-2 overflow-hidden min-w-[200px]"
    >
      <AnimatePresence mode="wait">
        {added ? (
          <motion.span
            key="added"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2"
          >
            <Check className="w-4 h-4" /> Added to Quote
          </motion.span>
        ) : (
          <motion.span
            key="add"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" /> Add to Quote
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
