"use server";

import { notFound } from "next/navigation";
import { getPostData, type Post } from "@/app/functions";
import { Plus } from "@/app/components/plus";
import Head from "next/head";
import { Metadata } from "next";



export default async function Blog({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = (await getPostData(slug)) as Post;

  if (!post) return notFound();

  const dateArr = new Date(post.frontmatter["date"] as string).toDateString().split(" ");
  dateArr.shift();
  const date = dateArr.join(" ");

  return (
    <article className="xl:w-1/2 mx-auto flex flex-col w-full text-foreground">
      <div className="xl:h-40 h-10"></div>
      <h1
        className="h-40 px-20 flex items-center border-b border-border relative leading-14"
        style={{ fontSize: "48px" }}
      >
        {/* <Plus className="-left-5 -top-5" />
        <Plus className="left-[calc(100%-1.25rem)] -top-5" />
        <Plus className="-left-5 top-[calc(100%-1.25rem)]" />
        <Plus className="left-[calc(100%-1.25rem)] top-[calc(100%-1.25rem)]" /> */}
        {post.frontmatter["title"] as string}
      </h1>
      <div className="w-fit xl:px-20 py-10">
        <div className="overflow-clip">
          <div className="p-8 text-2xl tracking-tight relative">
            {/* <Plus className="-left-5 -top-5" />
            <Plus className="left-[calc(100%-1.25rem)] -top-5 z-10" />
            <Plus className="-left-5 top-[calc(100%-1.25rem)] z-10" />
            <Plus className="left-[calc(100%-1.25rem)] top-[calc(100%-1.25rem)] z-10" /> */}
            {post.frontmatter["excerpt"] as string}
          </div>
          <div className="overflow-clip">
            <div className="xl:p-8 flex xl:flex-row flex-col items-center justify-between relative">
              {/* <Plus className="-left-5 top-[calc(100%-1.25rem)] z-10" />
              <Plus className="left-[calc(100%-1.25rem)] top-[calc(100%-1.25rem)] z-10" /> */}
              <div>Written by {post.frontmatter["author"] as string}</div>
              <p className="text-end">{date}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="post-content"
        className="xl:px-20 px-2 pt-6 pb-10 [&>h2]:mt-6 [&>h2]:mb-4 [&>h3]:mt-6 [&>h3]:mb-4 [&>p]:mb-4 *:l:ml-4"
      >
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