import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface py-20 px-6 border-t border-border mt-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="font-serif text-3xl mb-6">GARMALA</h2>
          <p className="text-sm text-foreground/70 max-w-sm leading-relaxed">
            Curating the finest architectural elements and interior finishes for spaces that demand distinction.
          </p>
        </div>
        <div>
          <h3 className="uppercase text-xs tracking-widest text-gold mb-6 font-semibold">Collections</h3>
          <ul className="flex flex-col gap-4 text-sm text-foreground/80">
            <li><Link href="/lighting" className="hover:text-gold transition-colors">Lighting</Link></li>
            <li><Link href="/plumbing" className="hover:text-gold transition-colors">Plumbing & Sanitary</Link></li>
            <li><Link href="/flooring" className="hover:text-gold transition-colors">Flooring</Link></li>
            <li><Link href="/hardware" className="hover:text-gold transition-colors">Architectural Hardware</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="uppercase text-xs tracking-widest text-gold mb-6 font-semibold">Company</h3>
          <ul className="flex flex-col gap-4 text-sm text-foreground/80">
            <li><Link href="/about" className="hover:text-gold transition-colors">Our Philosophy</Link></li>
            <li><Link href="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
            <li><Link href="/trade" className="hover:text-gold transition-colors">Trade Program</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-foreground/50">
        <p>&copy; {new Date().getFullYear()} Garmala Store. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-foreground">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
