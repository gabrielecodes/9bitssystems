"use server";

import { notFound } from "next/navigation";
import { getPostData, type Post } from "@/app/functions";

export default async function Blog({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = (await getPostData(slug)) as Post;

  if (!post) return notFound();

  const dateArr = new Date(post.frontmatter["date"] as string).toDateString().split(" ");
  dateArr.shift();
  const date = dateArr.join(" ");

  return (
    <article className="xl:w-2/5 px-4 mx-auto flex flex-col w-full text-foreground">
      <div className="xl:h-40 h-10"></div>
      <div className="mb-10 items-center xl:border-b xl:border-border">
        <h1 className="leading-14">{post.frontmatter["title"] as string}</h1>
        <div className="py-8 flex items-center justify-between relative">
          <div>Written by {post.frontmatter["author"] as string}</div>
          <p className="text-end">{date}</p>
        </div>
      </div>
      <h2 className="w-fit py-8">{post.frontmatter["excerpt"] as string}</h2>
      <div id="post-content" className="pt-6 pb-10 [&>h3]:mt-6 [&>h3]:mb-4 [&>p]:mb-4 *:l:ml-4">
        {post.content}
      </div>
    </article>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = (await getPostData(slug)) as Post;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.ninebitssystems.com/blog/${slug}`,
    },
    url: `https://www.ninebitssystems.com/blog/${slug}`,
    headline: post.frontmatter["title"],
    image: ["https://www.ninebitssystems.com/public/" + post.frontmatter["image"]],
    datePublished: post.frontmatter["date"],
    dateModified: post.frontmatter["date"],
    author: {
      "@type": "Person",
      name: post.frontmatter["author"],
    },
    publisher: {
      "@type": "Organization",
      name: "Nine Bits Systems",
      logo: {
        "@type": "ImageObject",
        url: "https://www.ninebitssystems.com/icon.png",
      },
    },
    title: post.frontmatter["title"],
    description: post.frontmatter["excerpt"],
  };
}
