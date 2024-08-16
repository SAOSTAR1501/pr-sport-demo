// src/app/blog/[slug]/page.tsx
import { getBlogPostBySlug } from "@/lib/api";
import Image from "next/image";
import { notFound } from "next/navigation";
import ShareButtons from "@/components/blog/ShareButtons";
import CommentSection from "@/components/blog/CommentSection";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="mb-4 text-gray-600">
        <span>{post.date}</span> | <span>{post.category}</span>
      </div>
      <Image
        src={post.coverImage}
        alt={post.title}
        width={1200}
        height={600}
        className="w-full h-auto rounded-lg shadow-lg mb-8"
      />
      <div
        className="prose max-w-none mb-8"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <ShareButtons
        url={`https://prsport.com/blog/${post.slug}`}
        title={post.title}
      />
      <CommentSection postSlug={post.slug} />
    </article>
  );
}
