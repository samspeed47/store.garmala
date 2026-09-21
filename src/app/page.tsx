import { getCategories } from "@/lib/googleSheets";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShowroomGrid from "@/components/ShowroomGrid";
import ShowroomIntro from "@/components/ShowroomIntro";

export default async function Home() {
  const categories = await getCategories();

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      <Hero />
      
      <section id="showrooms" className="px-6 md:px-12 max-w-7xl mx-auto relative z-20">
        <ShowroomIntro />
        <ShowroomGrid categories={categories} />
      </section>
      
      <Footer />
    </main>
  );
}
