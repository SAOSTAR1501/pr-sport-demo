// src/app/page.tsx
import dynamic from "next/dynamic";
import HeroSlider from "@/components/home/HeroSlider";
import FeaturedProducts from "@/components/home/FeaturedCategories";
import ProductCategories from "@/components/home/ProductCategories";
import AboutUs from "@/components/home/AboutUs";

const BlogSection = dynamic(() => import("@/components/home/BlogSection"), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <FeaturedProducts />
      <ProductCategories />
      <AboutUs />
      <BlogSection />
    </main>
  );
}
