"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2, FileText } from "lucide-react";
import { useCartStore } from "@/lib/store";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, updateQuantity, removeItem, totalPrice, totalItems } = useCartStore();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const formatPKR = (amount: number) => {
    return new Intl.NumberFormat('en-PK', { style: 'currency', currency: 'PKR', minimumFractionDigits: 0 }).format(amount);
  };

  const generatePDF = () => {
    if (items.length === 0) return;
    setIsGenerating(true);

    try {
      const doc = new jsPDF();
      
      // Header
      doc.setFont("helvetica", "bold");
      doc.setFontSize(24);
      doc.text("GARMALA STORE", 14, 20);
      
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.text("Official Showroom Quote", 14, 28);
      
      doc.setFontSize(10);
      doc.text(`Date: ${new Date().toLocaleDateString()}`, 140, 20);
      
      // Client Info
      doc.setFont("helvetica", "bold");
      doc.text("Client Information:", 14, 40);
      doc.setFont("helvetica", "normal");
      doc.text(`Name: ${name || "N/A"}`, 14, 46);
      doc.text(`Email: ${email || "N/A"}`, 14, 52);
      doc.text(`Phone: ${phone || "N/A"}`, 14, 58);

      // Table Data
      const tableColumn = ["Product", "Category", "Quantity", "Unit Price", "Total"];
      const tableRows: any[] = [];

      items.forEach(item => {
        const rawPriceStr = item.product.price.replace(/[^0-9.-]+/g, "");
        const unitPrice = Number(rawPriceStr) || 0;
        const total = unitPrice * item.quantity;
        
        tableRows.push([
          item.product.title,
          item.product.category_slug,
          item.quantity.toString(),
          formatPKR(unitPrice),
          formatPKR(total)
        ]);
      });

      autoTable(doc, {
        head: [tableColumn],
        body: tableRows,
        startY: 70,
        theme: 'grid',
        styles: { font: "helvetica", fontSize: 9 },
        headStyles: { fillColor: [20, 20, 20], textColor: [255, 255, 255] },
      });

      const finalY = (doc as any).lastAutoTable.finalY || 70;
      
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.text(`Total Estimate: ${formatPKR(totalPrice())}`, 14, finalY + 15);
      
      doc.setFont("helvetica", "italic");
      doc.setFontSize(8);
      doc.text("Note: This is an estimated quote and is subject to final confirmation by Garmala representatives.", 14, finalY + 30);

      doc.save(`Garmala_Quote_${new Date().getTime()}.pdf`);
    } catch (error) {
      console.error("Error generating PDF", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-surface border-l border-border z-50 flex flex-col shadow-2xl"
          >
            <div className="flex justify-between items-center p-6 border-b border-border">
              <h2 className="font-serif text-2xl">Your Quote List</h2>
              <button onClick={onClose} className="hover:text-gold transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {items.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-foreground/50 text-sm">
                  <p className="uppercase tracking-widest mb-4">Your list is empty</p>
                  <button onClick={onClose} className="text-gold border border-gold px-6 py-2 hover:bg-gold hover:text-black transition-colors">
                    Explore Showrooms
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.product.id} className="flex gap-4 items-start border-b border-border border-dashed pb-6">
                    <div className="w-20 h-24 bg-black overflow-hidden shrink-0">
                      <img src={item.product.hero_image || item.product.cover_image} alt={item.product.title} className="w-full h-full object-cover opacity-80" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-lg leading-tight mb-1">{item.product.title}</h3>
                      <p className="text-xs text-gold uppercase tracking-widest mb-3">{item.product.price}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 border border-border px-2 py-1">
                          <button 
                            onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                            className="text-foreground/50 hover:text-foreground"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="text-foreground/50 hover:text-foreground"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeItem(item.product.id)}
                          className="text-foreground/40 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 bg-[#0a0a0c] border-t border-border flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                  <h4 className="text-xs uppercase tracking-widest text-gold font-semibold">Client Details (Required for PDF)</h4>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-surface border border-border px-4 py-2 text-sm focus:outline-none focus:border-gold transition-colors w-full"
                  />
                  <div className="flex gap-2">
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-surface border border-border px-4 py-2 text-sm focus:outline-none focus:border-gold transition-colors w-full"
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-surface border border-border px-4 py-2 text-sm focus:outline-none focus:border-gold transition-colors w-full"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center py-4 border-t border-border mt-2">
                  <span className="text-sm uppercase tracking-widest text-foreground/70">Estimated Total</span>
                  <span className="font-serif text-xl">{formatPKR(totalPrice())}</span>
                </div>

                <button 
                  onClick={generatePDF}
                  disabled={isGenerating}
                  className="w-full bg-gold text-black py-4 uppercase tracking-widest text-xs font-bold hover:bg-gold-hover transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <FileText className="w-4 h-4" />
                  {isGenerating ? "Generating..." : "Download Quote PDF"}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
