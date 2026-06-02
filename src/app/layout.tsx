import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Garmala Store | Luxury Living",
  description: "A premium, immersive ecommerce experience for architectural and interior design products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${playfair.variable} ${outfit.variable} antialiased`}>
      <body className="min-h-screen bg-background text-foreground font-sans selection:bg-gold selection:text-black">
        {children}
      </body>
    </html>
  );
}
