import { getProductsByCategory, getCategories, Product } from "@/lib/googleSheets";
import ProductCard from "@/components/ProductCard";
import ProductHorizontalSlider from "@/components/ProductHorizontalSlider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

// Predefined order for lighting subcategories as requested by user
const PREDEFINED_LIGHTING_SUBCATEGORIES = [
  { slug: "premium-chandeliers", title: "Premium Chandeliers" },
  { slug: "room-chandeliers", title: "Room Chandeliers" },
  { slug: "wall-lights", title: "Wall Lights" },
  { slug: "stair-lights", title: "Stair Lights" },
  { slug: "accessory-lights", title: "Accessory Lights" },
  { slug: "modern-lights", title: "Modern Lights" },
  { slug: "garden-lights", title: "Garden Lights" },
];

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  const categories = await getCategories();
  const category = categories.find(c => c.slug === resolvedParams.category);
  
  if (!category) {
    notFound();
  }

  const products = await getProductsByCategory(resolvedParams.category);

  // Group products by subcategory
  const groupedProducts: Record<string, Product[]> = {};
  let hasSubcategories = false;

  products.forEach((product) => {
    if (product.subcategory) {
      hasSubcategories = true;
      const sub = product.subcategory;
      if (!groupedProducts[sub]) {
        groupedProducts[sub] = [];
      }
      groupedProducts[sub].push(product);
    } else {
      // Fallback group for products without explicit subcategory
      const sub = "signature-collection";
      if (!groupedProducts[sub]) {
        groupedProducts[sub] = [];
      }
      groupedProducts[sub].push(product);
    }
  });

  // Decide subcategory order for render
  let subcategoriesToRender: { slug: string; title: string; products: Product[] }[] = [];

  if (resolvedParams.category === "lighting" && hasSubcategories) {
    PREDEFINED_LIGHTING_SUBCATEGORIES.forEach((subcat) => {
      const items = groupedProducts[subcat.slug];
      if (items && items.length > 0) {
        subcategoriesToRender.push({
          slug: subcat.slug,
          title: subcat.title,
          products: items,
        });
      }
    });

    // Handle any extra subcategories not in our predefined list (e.g. from live sheet)
    Object.entries(groupedProducts).forEach(([slug, items]) => {
      const alreadyAdded = PREDEFINED_LIGHTING_SUBCATEGORIES.some(s => s.slug === slug);
      if (!alreadyAdded && items.length > 0) {
        const title = slug
          .split("-")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
        subcategoriesToRender.push({ slug, title, products: items });
      }
    });
  } else if (hasSubcategories) {
    // Other showroom with subcategories (e.g., plumbing or wood if categorized)
    Object.entries(groupedProducts).forEach(([slug, items]) => {
      if (items.length > 0) {
        const title = slug === "signature-collection" 
          ? "Signature Collection" 
          : slug
              .split("-")
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ");
        subcategoriesToRender.push({ slug, title, products: items });
      }
    });
  }

  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-16">
      <Navbar />
      
      {/* Showroom Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <p className="uppercase tracking-[0.2em] text-gold text-xs font-semibold mb-4">Garmala Showroom</p>
        <h1 className="font-serif text-5xl md:text-8xl mb-6 tracking-wide leading-none">{category.title}</h1>
        <p className="text-foreground/75 max-w-2xl text-lg font-light leading-relaxed">{category.description}</p>
      </div>

      {/* Sticky Sub-Category Jumper (Only if we have sequential categories) */}
      {subcategoriesToRender.length > 1 && (
        <div className="sticky top-[78px] left-0 right-0 z-40 bg-background/85 backdrop-blur-md border-b border-border/40 py-4 mb-16 hidden md:block">
          <div className="max-w-7xl mx-auto px-6 flex gap-10 text-[10px] uppercase tracking-[0.25em] font-bold text-foreground/50">
            {subcategoriesToRender.map((subcat) => (
              <a 
                key={subcat.slug}
                href={`#${subcat.slug}`} 
                className="hover:text-gold transition-colors py-2 border-b-2 border-transparent hover:border-gold/50"
              >
                {subcat.title}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Sequential Showroom Tracks or Fallback Grid */}
      <section className="px-6 max-w-7xl mx-auto min-h-[50vh] flex flex-col gap-24 mt-12">
        {products.length > 0 ? (
          hasSubcategories && subcategoriesToRender.length > 0 ? (
            // Sequential horizontal sliders per subcategory
            subcategoriesToRender.map((subcat) => (
              <div 
                key={subcat.slug} 
                id={subcat.slug} 
                className="scroll-mt-36 border-t border-border/10 pt-16 first:border-0 first:pt-0"
              >
                <div className="flex justify-between items-baseline mb-12">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-2 block">Collection</span>
                    <h2 className="font-serif text-3xl md:text-4xl tracking-wide">{subcat.title}</h2>
                  </div>
                  <span className="text-[11px] uppercase tracking-widest text-foreground/45 font-medium">
                    {subcat.products.length} {subcat.products.length === 1 ? "Product" : "Products"}
                  </span>
                </div>
                
                <ProductHorizontalSlider products={subcat.products} />
              </div>
            ))
          ) : (
            // Fallback grid if no subcategories exist (preserves plumbing and wood default state)
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )
        ) : (
          <div className="py-24 text-center border border-border/30 border-dashed rounded-lg bg-surface/30">
            <p className="text-foreground/40 uppercase tracking-[0.2em] text-xs font-semibold">No products found in this showroom yet.</p>
          </div>
        )}
      </section>
      
      <Footer />
    </main>
  );
}
