"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProductWithVariants, parseGalleryLinks } from "@/lib/googleSheets";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductStoryLayout from "@/components/ProductStoryLayout";
import AddToCartButton from "@/components/AddToCartButton";

export default function ProductInteractivePage({ initialProduct }: { initialProduct: ProductWithVariants }) {
  const [selectedVariant, setSelectedVariant] = useState(
    initialProduct.variants.find((v) => v.is_default_variant?.toLowerCase() === "yes") || 
    initialProduct.variants[0] || 
    initialProduct
  );

  const hasVariants = initialProduct.has_variants?.toLowerCase() === "yes" && initialProduct.variants.length > 1;
  const galleryImages = parseGalleryLinks(selectedVariant.gallery_images);

  let specifications = {};
  try {
    specifications = JSON.parse(selectedVariant.specifications);
  } catch (e) {
    // fallback
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Cinematic Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedVariant.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-background z-10" />
            <img 
              src={selectedVariant.cover_image || selectedVariant.hero_image} 
              alt={selectedVariant.title} 
              className="w-full h-full object-cover scale-105"
            />
          </motion.div>
        </AnimatePresence>
        
        <div className="relative z-20 h-full flex flex-col justify-end px-6 max-w-7xl mx-auto pb-20">
          <p className="uppercase tracking-[0.3em] text-gold text-xs font-semibold mb-4">
            {selectedVariant.category_slug.replace("-", " ")}
          </p>

          <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedVariant.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="font-serif text-5xl md:text-8xl leading-none max-w-4xl mb-4">
                    {selectedVariant.title}
                  </h1>
                  {hasVariants && (
                    <span className="text-gold text-sm tracking-wider uppercase font-medium">
                      Edition: {selectedVariant.variant_name}
                    </span>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Variant Thumbnails Trigger Render Difference */}
              {hasVariants && (
                <div className="mt-8 flex flex-col gap-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/50">
                    Select Showroom Edition:
                  </span>
                  <div className="flex gap-4">
                    {initialProduct.variants.map((variant) => {
                      const isActive = variant.id === selectedVariant.id;
                      const isColor = variant.variant_type?.toLowerCase() === "color";

                      return (
                        <button
                          key={variant.id}
                          onClick={() => setSelectedVariant(variant)}
                          className={`group relative flex items-center justify-center transition-all duration-300 ${
                            isActive ? "scale-105" : "hover:scale-105"
                          }`}
                        >
                          {/* Inner Border focus state */}
                          <div 
                            className={`absolute -inset-1 border rounded-full transition-colors duration-300 ${
                              isActive ? "border-gold" : "border-transparent group-hover:border-white/35"
                            }`} 
                          />
                          
                          {isColor && variant.variant_value ? (
                            // Render circular color swatch
                            <div 
                              className="w-10 h-10 rounded-full border border-white/20 relative z-10"
                              style={{ backgroundColor: variant.variant_value }}
                              title={variant.variant_name}
                            />
                          ) : (
                            // Premium Image Thumbnail variant option (Render difference)
                            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 relative z-10 bg-surface">
                              <img 
                                src={variant.hero_image} 
                                alt={variant.variant_name} 
                                className="w-full h-full object-cover" 
                              />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col items-end gap-6 shrink-0">
              <AnimatePresence mode="wait">
                <motion.span 
                  key={selectedVariant.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-3xl font-light"
                >
                  {selectedVariant.price}
                </motion.span>
              </AnimatePresence>
              <AddToCartButton product={selectedVariant} />
            </div>
          </div>
        </div>
      </section>

      {/* Story & Gallery & Technical specifications */}
      <section className="bg-background relative z-30 -mt-10 rounded-t-[3rem] overflow-hidden pt-20">
        <div className="max-w-4xl mx-auto px-6 text-center mb-20">
          <AnimatePresence mode="wait">
            <motion.p 
              key={selectedVariant.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-light"
            >
              {selectedVariant.short_description}
            </motion.p>
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedVariant.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
          >
            <ProductStoryLayout storyContent={selectedVariant.story_content} />

            {/* Dynamic Media Gallery */}
            {galleryImages.length > 0 && (
              <div className="max-w-7xl mx-auto px-6 py-20 border-t border-border mt-20">
                <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-4 block text-center">
                  Visual Archives
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">
                  Design & Form Gallery
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {galleryImages.map((imgUrl, index) => {
                    const isWide = index % 3 === 0;
                    return (
                      <div 
                        key={index} 
                        className={`relative overflow-hidden bg-surface aspect-[4/3] ${
                          isWide ? "md:col-span-2 aspect-[16/9]" : ""
                        }`}
                      >
                        <img 
                          src={imgUrl} 
                          alt={`${selectedVariant.title} Detail ${index + 1}`}
                          className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Specifications */}
            {Object.keys(specifications).length > 0 && (
              <div className="max-w-5xl mx-auto px-6 py-32 border-t border-border mt-20">
                <h2 className="font-serif text-3xl mb-12 text-center">Technical Specifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6">
                  {Object.entries(specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-4 border-b border-border border-dashed">
                      <span className="text-foreground/60 text-sm uppercase tracking-wider">{key}</span>
                      <span className="text-right">{String(value)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      <Footer />
    </main>
  );
}
