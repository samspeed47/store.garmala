import { getProductBySlug } from "@/lib/googleSheets";
import { notFound } from "next/navigation";
import ProductInteractivePage from "@/components/ProductInteractivePage";

export default async function ProductPage({ params }: { params: Promise<{ category: string, slug: string }> }) {
  const resolvedParams = await params;
  const product = await getProductBySlug(resolvedParams.category, resolvedParams.slug);

  if (!product || product.category_slug !== resolvedParams.category) {
    notFound();
  }

  return <ProductInteractivePage initialProduct={product} />;
}
