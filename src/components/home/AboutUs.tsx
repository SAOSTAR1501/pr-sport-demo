import Image from "next/image";
import Link from "next/link";

// src/components/home/AboutUs.tsx
const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Về chúng tôi</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/images/about-us.jpg"
              alt="Về PR SPORT"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg mb-4">
              PR SPORT là điểm đến hàng đầu cho những người yêu thích chạy bộ và
              thể thao. Chúng tôi cung cấp các sản phẩm chất lượng cao từ các
              thương hiệu uy tín, giúp bạn nâng cao hiệu suất và tận hưởng niềm
              đam mê chạy bộ.
            </p>
            <p className="text-lg mb-4">
              Với đội ngũ nhân viên giàu kinh nghiệm và am hiểu về chạy bộ,
              chúng tôi cam kết mang đến cho bạn những lời khuyên chuyên nghiệp
              và sản phẩm phù hợp nhất với nhu cầu của bạn.
            </p>
            <Link
              href="/about"
              className="inline-block bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-primary-dark transition-colors"
            >
              Tìm hiểu thêm
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
