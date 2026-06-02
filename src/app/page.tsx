import { getCategories } from "@/lib/googleSheets";
import Hero from "@/components/Hero";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShowroomGrid from "@/components/ShowroomGrid";

export default async function Home() {
  const categories = await getCategories();

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      <Hero />
      
      <section id="showrooms" className="py-32 px-6 max-w-7xl mx-auto relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-8">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-4">The Showrooms</h2>
            <p className="text-foreground/70 max-w-lg leading-relaxed">
              Step into meticulously designed environments. Each showroom is curated to inspire and elevate your architectural vision.
            </p>
          </div>
          <Link href="/about" className="uppercase text-xs tracking-widest text-gold hover:text-gold-hover border-b border-gold pb-1 transition-colors">
            Our Philosophy
          </Link>
        </div>

        <ShowroomGrid categories={categories} />
      </section>
      
      <Footer />
    </main>
  );
}
