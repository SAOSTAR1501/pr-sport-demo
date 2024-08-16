// src/components/home/HeroSection.tsx
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Chạy với đam mê, Mặc với phong cách
        </h1>
        <p className="text-xl mb-8">
          Khám phá bộ sưu tập mới nhất của chúng tôi
        </p>
        <Link
          href="/products"
          className="bg-primary text-white font-bold py-3 px-6 rounded-full hover:bg-primary-dark transition-colors"
        >
          Mua sắm ngay
        </Link>
      </div>
    </section>
  );
};
export default HeroSection;
