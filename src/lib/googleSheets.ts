import Papa from 'papaparse';
import { dummyProducts } from "./dummyProducts";

const SHEET_ID = '1a977UnW_K7AmV-MDZ-GvDMciCxEwyjtlfeVk2So_wfc';
const CATEGORIES_GID = '0';

export interface Category {
  id: string;
  slug: string;
  title: string;
  description: string;
  image_url: string;
  gid: string;
}

export interface Product {
  id: string;
  slug: string;
  category_slug: string;
  category?: string;
  subcategory?: string;
  title: string;
  price: string;
  short_description: string;
  hero_image: string;
  cover_image?: string;
  gallery_images: string; // comma separated
  story_content: string; // JSON string or plain text paragraphs
  specifications: string; // JSON string mapping keys to values
  has_variants?: string; // "Yes" or "No"
  variant_name?: string; // E.g., "Brushed Gold", "Matte Black", "12-Inch"
  variant_type?: string; // "Color" or "Size"
  variant_value?: string; // Hex code (e.g. "#D4AF37") or text value (e.g. "12-Inch")
  is_default_variant?: string; // "Yes" or "No"
}

export interface ProductWithVariants extends Product {
  variants: Product[];
}

// Convert Google Drive share links to direct image links
export function parseDriveLink(url: string): string {
  if (!url) return '';
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://drive.google.com/uc?export=view&id=${match[1]}`;
  }
  return url.trim();
}

// Process a comma-separated list of drive links
export function parseGalleryLinks(urls: string): string[] {
  if (!urls) return [];
  return urls.split(',').map(url => parseDriveLink(url)).filter(Boolean);
}

async function fetchSheetCSV<T>(gid: string): Promise<T[]> {
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${gid}`;
  
  try {
    const response = await fetch(url, { next: { revalidate: 60 } }); // Cache for 1 minute for faster updates
    if (!response.ok) {
      console.warn(`Failed to fetch sheet data for GID ${gid}: ${response.statusText}`);
      return getMockData<T>(gid); // fallback to mock data if sheet is empty or errored
    }

    const csvText = await response.text();
    
    // Check if it's the default html error page (meaning tab doesn't exist or is empty)
    if (csvText.startsWith('<!DOCTYPE html>')) {
      return getMockData<T>(gid);
    }
    
    return new Promise((resolve, reject) => {
      Papa.parse<T>(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          // Robust check: Ensure at least one row has real data (id, slug, or title)
          const hasData = results.data && results.data.some((row: any) => row.id || row.slug || row.title);
          
          if (!hasData) {
            resolve(getMockData<T>(gid));
            return;
          }

          // Additional processing to fix drive links for specific fields
          const data = results.data.map((row: any) => {
            if (row.image_url) row.image_url = parseDriveLink(row.image_url);
            if (row.hero_image) row.hero_image = parseDriveLink(row.hero_image);
            // We map cover_image to hero_image for backward compatibility with previous components
            if (row.hero_image) row.cover_image = row.hero_image; 
            return row;
          });
          resolve(data as T[]);
        },
        error: (error: any) => reject(error),
      });
    });
  } catch (error) {
    console.error("Error fetching sheet", error);
    return getMockData<T>(gid);
  }
}

export async function getCategories(): Promise<Category[]> {
  return [
    { 
      id: '1', 
      slug: 'lighting', 
      title: 'Lighting Showroom', 
      description: 'Illuminate your space with architectural precision.', 
      image_url: 'https://images.unsplash.com/photo-1513506003901-1e6a229e9d15?q=80&w=2070&auto=format&fit=crop', 
      gid: '0' 
    },
    { 
      id: '2', 
      slug: 'plumbing', 
      title: 'Plumbing Showroom', 
      description: 'Elegant fixtures for modern sanctuaries.', 
      image_url: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2069&auto=format&fit=crop', 
      gid: '0' 
    },
    { 
      id: '3', 
      slug: 'wood', 
      title: 'Woodworks Showroom', 
      description: 'Mastercrafted organic textures and timeless grains.', 
      image_url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2064&auto=format&fit=crop', 
      gid: '0' 
    },
  ];
}

async function getRawProductsByCategory(categorySlug: string): Promise<Product[]> {
  const products = await fetchSheetCSV<Product>(CATEGORIES_GID);
  return products.filter(p => 
    p.category_slug === categorySlug || 
    (p as any).category === categorySlug ||
    p.category_slug?.toLowerCase() === categorySlug.toLowerCase() ||
    (p as any).category?.toLowerCase() === categorySlug.toLowerCase()
  );
}

export async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  const products = await getRawProductsByCategory(categorySlug);
  
  // Group by slug to find the default or first variant for showroom displays
  const uniqueProductsMap = new Map<string, Product>();
  products.forEach((product) => {
    const existing = uniqueProductsMap.get(product.slug);
    if (!existing) {
      uniqueProductsMap.set(product.slug, product);
    } else {
      if (product.is_default_variant?.toLowerCase() === "yes") {
        uniqueProductsMap.set(product.slug, product);
      }
    }
  });

  return Array.from(uniqueProductsMap.values()).map(p => ({ ...p, category_slug: categorySlug }));
}

export async function getProductBySlug(categorySlug: string, productSlug: string): Promise<ProductWithVariants | undefined> {
  const products = await getRawProductsByCategory(categorySlug);
  const matchingProducts = products.filter(p => p.slug === productSlug);
  if (matchingProducts.length === 0) return undefined;
  
  // Find default variant or fall back to the first item
  const defaultProduct = matchingProducts.find(p => p.is_default_variant?.toLowerCase() === 'yes') || matchingProducts[0];
  
  return {
    ...defaultProduct,
    category_slug: categorySlug,
    variants: matchingProducts.map(p => ({ ...p, category_slug: categorySlug }))
  };
}

// Fallback Mock Data Generators until the live sheet is populated
function getMockData<T>(gid: string): T[] {
  if (gid === CATEGORIES_GID) {
    // CATEGORIES_GID is '0', which represents the master products list
    return dummyProducts as any;
  }
  
  return [];
}
