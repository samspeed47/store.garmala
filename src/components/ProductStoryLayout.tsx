"use client";

import { motion } from "framer-motion";

type StoryBlock = {
  type: 'text' | 'image';
  content?: string;
  url?: string;
  caption?: string;
};

export default function ProductStoryLayout({ storyContent }: { storyContent: string }) {
  let blocks: StoryBlock[] = [];
  try {
    blocks = JSON.parse(storyContent);
  } catch (e) {
    // Fallback if not valid JSON
    blocks = [{ type: 'text', content: storyContent }];
  }

  return (
    <div className="w-full flex flex-col gap-32 py-20">
      {blocks.map((block, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full"
        >
          {block.type === 'text' && (
            <div className="max-w-3xl mx-auto px-6 text-center">
              <p className="font-serif text-2xl md:text-4xl leading-relaxed text-foreground/90">
                "{block.content}"
              </p>
            </div>
          )}
          {block.type === 'image' && (
            <div className="w-full max-w-6xl mx-auto px-6">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface">
                <img 
                  src={block.url} 
                  alt={block.caption || "Product Story Image"} 
                  className="w-full h-full object-cover"
                />
              </div>
              {block.caption && (
                <p className="text-center mt-4 text-xs uppercase tracking-widest text-foreground/50">
                  {block.caption}
                </p>
              )}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
