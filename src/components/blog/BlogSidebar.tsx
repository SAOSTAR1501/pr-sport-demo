// src/components/blog/BlogSidebar.tsx
import Link from "next/link";

interface BlogSidebarProps {
  categories: string[];
  popularPosts: {
    slug: string;
    title: string;
  }[];
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({
  categories,
  popularPosts,
}) => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Danh mục</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <Link
                href={`/blog?category=${encodeURIComponent(category)}`}
                className="hover:text-primary"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Bài viết phổ biến</h3>
        <ul className="space-y-2">
          {popularPosts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogSidebar;
