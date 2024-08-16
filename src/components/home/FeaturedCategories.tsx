// src/components/home/FeaturedProducts.tsx
import ProductCard from "../product/ProductCard";
import { mockProducts } from "@/mocks/productData";

const FeaturedProducts = () => {
  const featuredProducts = Object.values(mockProducts).slice(0, 4);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Sản phẩm nổi bật
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
