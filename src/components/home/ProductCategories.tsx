// src/components/home/ProductCategories.tsx
import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    name: "Giày chạy bộ",
    image: "/images/category-shoes.jpg",
    link: "/products?category=shoes",
  },
  {
    name: "Quần áo",
    image: "/images/category-clothes.jpg",
    link: "/products?category=clothes",
  },
  {
    name: "Phụ kiện",
    image: "/images/category-accessories.jpg",
    link: "/products?category=accessories",
  },
];

const ProductCategories = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Danh mục sản phẩm
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link key={index} href={category.link} className="group">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
