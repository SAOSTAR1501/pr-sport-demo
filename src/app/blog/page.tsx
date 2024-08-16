// src/app/blog/page.tsx
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getBlogPosts, getBlogCategories } from "@/lib/api";
import Pagination from "@/components/blog/BlogPagination";
import BlogSidebar from "@/components/blog/BlogSidebar";

const POSTS_PER_PAGE = 6;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string; category?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const category = searchParams.category || "";

  const allPosts = await getBlogPosts();
  const categories = await getBlogCategories();

  const filteredPosts = category
    ? allPosts.filter((post) => post.category === category)
    : allPosts;

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog PR SPORT</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {paginatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
        <div className="md:w-1/3">
          <BlogSidebar
            categories={categories}
            popularPosts={allPosts.slice(0, 5)}
          />
        </div>
      </div>
    </div>
  );
}
