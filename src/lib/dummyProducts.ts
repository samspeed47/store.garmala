import { Product } from "./googleSheets";

export interface DummyProduct extends Product {
  subcategory?: string;
}

export const dummyProducts: DummyProduct[] = [
  // ==========================================
  // LIGHTING SHOWROOM
  // ==========================================

  // --- Premium Chandeliers ---
  {
    id: "lit-pc-1",
    slug: "aurea-cascading-chandelier",
    category_slug: "lighting",
    subcategory: "premium-chandeliers",
    title: "Aurea Cascading Chandelier",
    price: "PKR 650,000",
    short_description: "A breathtaking cascading statement piece crafted from warm brushed brass and precision-cut frosted crystal.",
    hero_image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=2000&auto=format&fit=crop",
    cover_image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=2000&auto=format&fit=crop",
    gallery_images: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=2000&auto=format&fit=crop,https://images.unsplash.com/photo-1513506003901-1e6a229e9d15?q=80&w=2000&auto=format&fit=crop",
    story_content: JSON.stringify([
      { type: "text", content: "The Aurea Chandelier is born from a philosophy of weightlessness. Hand-finished brass arms extend organically, supporting hand-polished crystal rods that diffuse light into a celestial glow." },
      { type: "image", url: "https://images.unsplash.com/photo-1507676184212-d0330a151f84?q=80&w=2000&auto=format&fit=crop", caption: "Forged in brushed brass with extreme attention to structural detail." }
    ]),
    specifications: JSON.stringify({
      "Material": "Solid Brass, Premium K9 Crystal",
      "Dimensions": "Diameter: 42\" | Height: 58\"",
      "Light Source": "Dimmable LED G9 (Included)",
      "Finish": "Brushed Champagne Gold",
      "Weight": "28 kg"
    }),
    has_variants: "No"
  },
  {
    id: "lit-pc-2",
    slug: "solas-floating-ring",
    category_slug: "lighting",
    subcategory: "premium-chandeliers",
    title: "Solas Floating Halo",
    price: "PKR 780,000",
    short_description: "Concentric, gravity-defying luminous rings suspended by micro-cables, casting an ethereal, shadowless glow.",
    hero_image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?q=80&w=2000&auto=format&fit=crop",
    cover_image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?q=80&w=2000&auto=format&fit=crop",
    gallery_images: "https://images.unsplash.com/photo-1513506003901-1e6a229e9d15?q=80&w=2000&auto=format&fit=crop",
    story_content: JSON.stringify([
      { type: "text", content: "Designed for grand entryways and double-height ceilings, Solas floats with delicate architectural grace. Its seamless aluminum body houses state-of-the-art dimmable LEDs that generate a warm, enveloping ambient crown." }
    ]),
    specifications: JSON.stringify({
      "Material": "Aero-grade Aluminum, Acrylic",
      "Dimensions": "3 Concentric Rings: 32\", 24\", 16\"",
      "Voltage": "220V (Dimmable)",
      "Color Temp": "3000K Warm White"
    }),
    has_variants: "No"
  },
  {
    id: "lit-pc-3",
    slug: "elysian-grand-crystal",
    category_slug: "lighting",
    subcategory: "premium-chandeliers",
    title: "Elysian Grand Chandelier",
    price: "PKR 1,150,000",
    short_description: "An opulent tribute to classic European artistry, modernly reimagined with multi-tiered geometric crystal prisms.",
    hero_image: "https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?q=80&w=2000&auto=format&fit=crop",
    cover_image: "https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?q=80&w=2000&auto=format&fit=crop",
    gallery_images: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=2000&auto=format&fit=crop",
    story_content: JSON.stringify([
      { type: "text", content: "The Elysian reimagines traditional glass crafting. Featuring over three hundred custom-molded prisms, it splits white light into a soft spectrum of luxury." }
    ]),
    specifications: JSON.stringify({
      "Material": "Polished Nickel, K9 Crystal",
      "Dimensions": "D: 50\" | H: 65\"",
      "Bulbs": "18 x E14 LED (Max 4W)"
    }),
    has_variants: "No"
  },

  // --- Room Chandeliers ---
  {
    id: "lit-rc-1",
    slug: "neoteric-brass-hoop",
    category_slug: "lighting",
    subcategory: "room-chandeliers",
    title: "Neoteric Hoop Chandelier",
    price: "PKR 245,000",
    short_description: "Understated luxury for dining and living spaces, featuring interlocking brushed brass hoops and delicate glass orbs.",
    hero_image: "https://images.unsplash.com/photo-1513506003901-1e6a229e9d15?q=80&w=2000&auto=format&fit=crop",
    cover_image: "https://images.unsplash.com/photo-1513506003901-1e6a229e9d15?q=80&w=2000&auto=format&fit=crop",
    gallery_images: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=2000&auto=format&fit=crop",
    story_content: JSON.stringify([
      { type: "text", content: "Designed for mid-sized rooms, the Neoteric Hoop balance is striking. It creates a bold focal point without visually crowding the room, perfect for refined dining environments." }
    ]),
    specifications: JSON.stringify({
      "Material": "Mild Steel, Opal Glass",
      "Dimensions": "W: 36\" | H: 24\"",
      "Suspension": "Adjustable rod up to 48\""
    }),
    has_variants: "No"
  },
  {
    id: "lit-rc-2",
    slug: "lumiere-orb-cluster",
    category_slug: "lighting",
    subcategory: "room-chandeliers",
    title: "Lumiere Orb Cluster",
    price: "PKR 185,000",
    short_description: "A whimsical collection of cloud-like hand-blown frosted glass spheres suspended at varying heights.",
    hero_image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=2000&auto=format&fit=crop",
    cover_image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=2000&auto=format&fit=crop",
    gallery_images: "https://images.unsplash.com/photo-1513506003901-1e6a229e9d15?q=80&w=2000&auto=format&fit=crop",
    story_content: JSON.stringify([
      { type: "text", content: "Bringing a soft, organic texture to contemporary interiors, the Lumiere Cluster mimics morning mist. Light is scattered gently through sandblasted glass shells." }
    ]),
    specifications: JSON.stringify({
      "Material": "Blown Glass, Matte Black Steel",
      "Orbs": "7 Glass Orbs (Various sizes)",
      "Bulbs": "G4 Dimmable LED"
    }),
    has_variants: "No"
  },

  // --- Wall Lights ---
  {
    id: "lit-wl-1",
    slug: "sconce-aurelia",
    category_slug: "lighting",
    subcategory: "wall-lights",
    title: "Sconce Aurelia",
    price: "PKR 48,000",
    short_description: "An elegant fluted brass wall light that reflects indirect light, creating soft, architectural shadows.",
    hero_image: "https://images.unsplash.com/photo-1507676184212-d0330a151f84?q=80&w=2000&auto=format&fit=crop",
    cover_image: "https://images.unsplash.com/photo-1507676184212-d0330a151f84?q=80&w=2000&auto=format&fit=crop",
    gallery_images: "https://images.unsplash.com/photo-1513506003901-1e6a229e9d15?q=80&w=2000&auto=format&fit=crop",
    story_content: JSON.stringify([
      { type: "text", content: "Aurelia turns walls into dynamic canvases. The hand-textured metal reflects warm light back, creating a gentle wash of luminance ideal for corridors and bedrooms." }
    ]),
    specifications: JSON.stringify({
      "Material": "Solid Fluted Brass",
      "Dimensions": "W: 6\" | H: 18\" | Depth: 4\"",
      "Mounting": "Wall bracket included"
    }),
    has_variants: "No"
  },
  {
    id: "lit-wl-2",
    slug: "eclipse-wall-washer",
    category_slug: "lighting",
    subcategory: "wall-lights",
    title: "Eclipse Wall Washer",
    price: "PKR 55,000",
    short_description: "Dual circular metal disks representing a lunar eclipse, creating a stunning indirect ring of soft glow.",
    hero_image: "https://images.unsplash.com/photo-1513506003901-1e6a229e9d15?q=80&w=2000&auto=format&fit=crop",
    cover_image: "https://images.unsplash.com/photo-1513506003901-1e6a229e9d15?q=80&w=2000&auto=format&fit=crop",
    gallery_images: "",
    story_content: JSON.stringify([
      { type: "text", content: "The Eclipse sconce makes light the hero. The front plate remains in shadow while a perfect, warm halo of light bursts out from behind, adding modern drama." }
    ]),
    specifications: JSON.stringify({
      "Material": "Anodized Aluminum",
      "Diameter": "12 Inches",
      "LED": "10W Integrated 2700K"
    }),
    has_variants: "No"
  },

  // --- Stair Lights ---
  {
    id: "lit-sl-1",
    slug: "recessed-step-dot",
    category_slug: "lighting",
    subcategory: "stair-lights",
    title: "Recessed Step Dot",
    price: "PKR 12,500",
    short_description: "A compact, low-glare pathway and stair light, recessed flush into the wall to cast a gentle floorward beam.",
    hero_image: "https://images.unsplash.com/photo-1513506003901-1e6a229e9d15?q=80&w=2000&auto=format&fit=crop",
    cover_image: "https://images.unsplash.com/photo-1513506003901-1e6a229e9d15?q=80&w=2000&auto=format&fit=crop",
    gallery_images: "",
    story_content: JSON.stringify([
      { type: "text", content: "Seamlessly integrates with drywalls. Step Dot guides steps in dark pathways without spilling any harsh light vertically, ensuring perfect safety and night-time aesthetics." }
    ]),
    specifications: JSON.stringify({
      "Material": "Diecast Aluminum",
      "Dimensions": "Diameter: 2\" | Depth: 1.5\"",
      "IP Rating": "IP65 Waterproof (Indoor/Outdoor)"
    }),
    has_variants: "No"
  },
  {
    id: "lit-sl-2",
    slug: "linear-step-finder",
    category_slug: "lighting",
    subcategory: "stair-lights",
    title: "Linear Pathfinder Step",
    price: "PKR 19,000",
    short_description: "Sleek architectural horizontal slit light casting direct pathway down-lighting, ideal for floating stairs.",
    hero_image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=2000&auto=format&fit=crop",
    cover_image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=2000&auto=format&fit=crop",
    gallery_images: "",
    story_content: JSON.stringify([
      { type: "text", content: "A long, minimalist slit of warm light. Perfect when installed alongside individual treads on floating stairs, highlighting structural depths." }
    ]),
    specifications: JSON.stringify({
      "Material": "Powder Coated Steel",
      "Dimensions": "W: 8\" | H: 1.5\"",
      "CRI": "90+ High Color Rendering"
    }),
    has_variants: "No"
  },

  // --- Accessory Lights ---
  {
    id: "lit-al-1",
    slug: "apex-leather-desk-lamp",
    category_slug: "lighting",
    subcategory: "accessory-lights",
    title: "Apex Leather Desk Lamp",
    price: "PKR 68,000",
    short_description: "An architect-grade adjustable task light, finished with warm saddle-stitched Italian leather accents.",
    hero_image: "https://images.unsplash.com/photo-1507676184212-d0330a151f84?q=80&w=2000&auto=format&fit=crop",
    cover_image: "https://images.unsplash.com/photo-1507676184212-d0330a151f84?q=80&w=2000&auto=format&fit=crop",
    gallery_images: "",
    story_content: JSON.stringify([
      { type: "text", content: "Crafted for study sanctuaries, the Apex Desk Lamp provides precision-focused illumination. Highly adjustable heavy hinges deliver frictionless positioning." }
    ]),
    specifications: JSON.stringify({
      "Material": "Carbon Steel, Full-Grain Leather",
      "Dimensions": "H: 22\" | Reach: 18\"",
      "Switch": "Touch dimmer on base"
    }),
    has_variants: "No"
  },
  {
    id: "lit-al-2",
    slug: "onyx-table-pillar",
    category_slug: "lighting",
    subcategory: "accessory-lights",
    title: "Onyx Table Pillar",
    price: "PKR 85,000",
    short_description: "A monolithic cylinder of solid white onyx marble that glows from within, showcasing natural veins.",
    hero_image: "https://images.unsplash.com/photo-1513506003901-1e6a229e9d15?q=80&w=2000&auto=format&fit=crop",
    cover_image: "https://images.unsplash.com/photo-1513506003901-1e6a229e9d15?q=80&w=2000&auto=format&fit=crop",
    gallery_images: "",
    story_content: JSON.stringify([
      { type: "text", content: "No two pillars are identical. The translucent quality of pure onyx permits light to pierce the rock, highlighting beautiful mineral ribbons." }
    ]),
    specifications: JSON.stringify({
      "Material": "Solid Veined Onyx Stone",
      "Dimensions": "D: 5\" | H: 14\"",
      "Light Temp": "2200K (Candlelight Glow)"
    }),
    has_variants: "No"
  },

  // --- Modern Lights ---
  {
    id: "lit-ml-1",
    slug: "helix-kinetic-pendant",
    category_slug: "lighting",
    subcategory: "modern-lights",
    title: "Helix Kinetic Pendant",
    price: "PKR 320,000",
    short_description: "A continuous spiral design floating on micro-suspension cords, providing seamless 360-degree linear illumination.",
    hero_image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?q=80&w=2000&auto=format&fit=crop",
    cover_image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?q=80&w=2000&auto=format&fit=crop",
    gallery_images: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=2000&auto=format&fit=crop",
    story_content: JSON.stringify([
      { type: "text", content: "The Helix twists beautifully in mid-air. Crafted using advanced extrusion techniques, it yields dynamic shadows and forms a sculptural centerpiece." }
    ]),
    specifications: JSON.stringify({
      "Material": "Satin Anodized Aluminum",
      "Length": "60 Inches",
      "LED Power": "45W High Efficiency"
    }),
    has_variants: "No"
  },
  {
    id: "lit-ml-2",
    slug: "flux-floating-ring",
    category_slug: "lighting",
    subcategory: "modern-lights",
    title: "Flux Floating Ring",
    price: "PKR 210,000",
    short_description: "An off-axis elliptical band finished in matte charcoal, throwing light both upwards and downwards.",
    hero_image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=2000&auto=format&fit=crop",
    cover_image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=2000&auto=format&fit=crop",
    gallery_images: "",
    story_content: JSON.stringify([
      { type: "text", content: "Flux breaks away from boring flat ceiling shapes. Its subtle elliptical skew catches the eye, creating depth in contemporary, open-plan spaces." }
    ]),
    specifications: JSON.stringify({
      "Material": "Silicon, Aluminum Alloy",
      "Dimensions": "Diameter: 30\" | Tilt Angle: 15°",
      "Color Temp": "Dimmable 2700K - 5000K"
    }),
    has_variants: "No"
  },

  // --- Garden Lights ---
  {
    id: "lit-gl-1",
    slug: "aero-solar-bollard",
    category_slug: "lighting",
    subcategory: "garden-lights",
    title: "Aero Solar Bollard",
    price: "PKR 22,500",
    short_description: "A sleek, carbon-finished solar-powered pathfinder bollard, casting low-glare warm ground illumination.",
    hero_image: "https://images.unsplash.com/photo-1513506003901-1e6a229e9d15?q=80&w=2000&auto=format&fit=crop",
    cover_image: "https://images.unsplash.com/photo-1513506003901-1e6a229e9d15?q=80&w=2000&auto=format&fit=crop",
    gallery_images: "",
    story_content: JSON.stringify([
      { type: "text", content: "Designed for high-end landscape integration. Aero harvests solar energy seamlessly via an integrated top crystalline panel, yielding absolute wireless architectural beauty." }
    ]),
    specifications: JSON.stringify({
      "Material": "Anodized Structural Aluminum",
      "Dimensions": "D: 4\" | H: 24\"",
      "IP Rating": "IP67 Weatherproof",
      "Battery Life": "Up to 12 Hours on full charge"
    }),
    has_variants: "No"
  },
  {
    id: "lit-gl-2",
    slug: "terra-spotlight-accent",
    category_slug: "lighting",
    subcategory: "garden-lights",
    title: "Terra Spotlight Accent",
    price: "PKR 34,000",
    short_description: "A solid brass heavy-duty garden spike spotlight, engineered for high-CRI uplighting on trees and wall structures.",
    hero_image: "https://images.unsplash.com/photo-1507676184212-d0330a151f84?q=80&w=2000&auto=format&fit=crop",
    cover_image: "https://images.unsplash.com/photo-1507676184212-d0330a151f84?q=80&w=2000&auto=format&fit=crop",
    gallery_images: "",
    story_content: JSON.stringify([
      { type: "text", content: "Terra turns structural foliage into breathtaking nighttime focal points. Fully sealed solid brass naturally patinates over time, blending directly into nature." }
    ]),
    specifications: JSON.stringify({
      "Material": "Solid Tumbled Brass",
      "Dimensions": "W: 3\" | H: 8\"",
      "Power Source": "Low Voltage 12V AC/DC",
      "Lumens": "350lm (Dimmable)"
    }),
    has_variants: "No"
  },

  // ==========================================
  // PLUMBING SHOWROOM FALLBACKS
  // ==========================================
  {
    id: "plu-1",
    slug: "matte-onyx-faucet",
    category_slug: "plumbing",
    title: "Onyx Sanctuary Faucet",
    price: "PKR 125,000",
    short_description: "Minimalist industrial design meets unparalleled water control.",
    hero_image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop",
    cover_image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop",
    gallery_images: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2000&auto=format&fit=crop",
    story_content: JSON.stringify([
      { type: "text", content: "Stripped of all ornamentation, the Onyx Faucet delivers a pure, unadulterated flow of water." }
    ]),
    specifications: JSON.stringify({ "Material": "Solid Brass", "Finish": "Matte Onyx Black", "Flow Rate": "1.2 GPM" }),
    has_variants: "Yes",
    variant_name: "Matte Onyx Black",
    variant_type: "Color",
    variant_value: "#121212",
    is_default_variant: "Yes"
  },
  {
    id: "plu-1-gold",
    slug: "matte-onyx-faucet",
    category_slug: "plumbing",
    title: "Onyx Sanctuary Faucet",
    price: "PKR 145,000",
    short_description: "A luxurious statement faucet, hand-polished in warm champagne gold.",
    hero_image: "https://images.unsplash.com/photo-1609766918498-bc4232a1d24f?q=80&w=2000&auto=format&fit=crop",
    cover_image: "https://images.unsplash.com/photo-1609766918498-bc4232a1d24f?q=80&w=2000&auto=format&fit=crop",
    gallery_images: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2000&auto=format&fit=crop",
    story_content: JSON.stringify([
      { type: "text", content: "Crafted with premium warm tones, the gold edition matches master bathroom architectures." }
    ]),
    specifications: JSON.stringify({ "Material": "Solid Brass", "Finish": "Brushed Champagne Gold", "Flow Rate": "1.2 GPM" }),
    has_variants: "Yes",
    variant_name: "Brushed Champagne Gold",
    variant_type: "Color",
    variant_value: "#d4af37",
    is_default_variant: "No"
  },

  // ==========================================
  // WOODWORKS SHOWROOM FALLBACKS
  // ==========================================
  {
    id: "wd-1",
    slug: "walnut-fluted-panel",
    category_slug: "wood",
    title: "Walnut Fluted Panel",
    price: "PKR 45,000",
    short_description: "Acoustic and aesthetic perfection in American Walnut.",
    hero_image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2064&auto=format&fit=crop",
    cover_image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2064&auto=format&fit=crop",
    gallery_images: "",
    story_content: JSON.stringify([
      { type: "text", content: "Hand-finished panels that bring organic warmth to any architectural space." }
    ]),
    specifications: JSON.stringify({ "Material": "American Walnut", "Dimensions": "H: 2400mm x W: 600mm" }),
    has_variants: "No"
  }
];
