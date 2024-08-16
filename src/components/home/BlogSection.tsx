import Image from "next/image";
import Link from "next/link";

// src/components/home/BlogSection.tsx
const BlogSection = () => {
  const blogPosts = [
    {
      title: "5 bí quyết để chạy bộ hiệu quả hơn",
      excerpt:
        "Khám phá những tips hữu ích giúp bạn cải thiện kỹ thuật chạy bộ và đạt được mục tiêu của mình.",
      image: "/images/blog-1.jpg",
      link: "/blog/5-running-tips",
    },
    {
      title: "Chọn giày chạy bộ phù hợp với bạn",
      excerpt:
        "Hướng dẫn chi tiết về cách chọn giày chạy bộ phù hợp với form chân và mục đích sử dụng của bạn.",
      image: "/images/blog-2.jpg",
      link: "/blog/choose-running-shoes",
    },
    {
      title: "Dinh dưỡng cho người chạy bộ",
      excerpt:
        "Tìm hiểu về chế độ dinh dưỡng cân bằng giúp bạn duy trì năng lượng và cải thiện sức bền khi chạy bộ.",
      image: "/images/blog-3.jpg",
      link: "/blog/nutrition-for-runners",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Bài viết mới nhất
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link key={index} href={post.link} className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600">{post.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/blog"
            className="inline-block bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-primary-dark transition-colors"
          >
            Xem tất cả bài viết
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
