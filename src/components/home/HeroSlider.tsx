// src/components/home/HeroSlider.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const HeroSlider = () => {
  const slides = [
    {
      image: "/images/hero-1.jpg",
      title: "Chạy với đam mê",
      subtitle: "Khám phá bộ sưu tập mới nhất của chúng tôi",
      link: "/products",
    },
    {
      image: "/images/hero-2.jpg",
      title: "Trang bị chuyên nghiệp",
      subtitle: "Nâng cao hiệu suất với trang thiết bị tốt nhất",
      link: "/products",
    },
    {
      image: "/images/hero-3.jpg",
      title: "Cùng nhau chinh phục",
      subtitle: "Tham gia cộng đồng chạy bộ của chúng tôi",
      link: "/community",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      className="h-[600px]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="h-full bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="container mx-auto px-4 text-white">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                {slide.title}
              </h2>
              <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
              <Link
                href={slide.link}
                className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-dark transition-colors"
              >
                Khám phá ngay
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
