// src/app/products/[id]/page.tsx
import { Suspense } from "react";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/product/ProductDetail";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import ErrorMessage from "@/components/ui/ErrorMessage";
import { mockProducts } from "@/mocks/productData";
import ProductReviews from "@/components/product/ProductReviews";
import ProductRating from "@/components/product/ProductRating";

async function getProduct(id: string) {
  // Giả lập độ trễ của API
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const product = mockProducts[id as keyof typeof mockProducts];
  if (!product) {
    return null;
  }
  return product;
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  let product;
  let error;

  try {
    product = await getProduct(params.id);
  } catch (e) {
    error = e instanceof Error ? e.message : "An unexpected error occurred";
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Suspense fallback={<LoadingSpinner />}>
        <ProductDetail product={product} />
        <ProductReviews productId={product.id} />
        <ClientSideProductRating productId={params.id} initialRating={10} />
      </Suspense>
    </div>
  );
}

// Tạo một component client-side riêng biệt cho ProductRating
import dynamic from "next/dynamic";

const ClientSideProductRating = dynamic(
  () => import("@/components/product/ClientSideProductRating"),
  {
    ssr: false,
  }
);
