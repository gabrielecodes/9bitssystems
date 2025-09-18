"use server";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts, type Post } from "@/app/functions";
import { Plus } from "../components/plus";
import { serif } from "../layout";

export default async function Blog() {
  // fetch all the posts
  const posts = (await getAllPosts()) as Post[];

  return (
    <div className="h-full mb-20">
      <div className="mt-40 relative border-y border-border">
        <Plus className="-left-5 -top-5" />
        <Plus className="left-[calc(100%-1.25rem)] -top-5 z-10" />
        <Plus className="-left-5 top-[calc(100%-1.25rem)]" />
        <Plus className="left-[calc(100%-1.25rem)] top-[calc(100%-1.25rem)] z-10" />
        <h1 className={`${serif.className} ml-4 h-40 flex items-center`}>Blog</h1>
      </div>
      <div className="p-4 w-full flex flex-wrap crossed-lines-gradient">
        <div className="w-full h-full border border-neutral-300 bg-[url('/b3.jpg')]">
          {posts ? (
            posts.map((post, index) => <PostCard key={post.slug} post={post} index={index} />)
          ) : (
            <h3>No posts</h3>
          )}
        </div>
      </div>
    </div>
  );
}

function PostCard({ post, index }: { post: any; index: number }) {
  function isEven(num: number) {
    return num % 2 === 0;
  }

  return (
    <Link href={`/blog/${post.slug}`} className="w-full h-[28rem] flex flex-col bg-white group">
      <div className="w-full h-8 border-b border-border flex">
        <div className="w-[calc(2.25rem+1px)] h-full border-r border-border"></div>
        <div className="w-full h-full"></div>
        <div className="w-[calc(2.25rem-1px)] h-full border-l border-border"></div>
      </div>
      <div className="w-[calc(100%-4rem)] h-[24rem] mx-auto xl:p-8 p-4 relative border-x border-border flex xl:flex-row flex-col gap-x-6 bg-[url('/bg3.jpg')] overflow-hidden">
        <Plus className="size-6 group-hover:text-neutral-400 transition-all duration-200 ease-in-out -left-3 -top-3" />
        <Plus className="size-6 group-hover:text-neutral-400 transition-all duration-200 ease-in-out left-[calc(100%-0.75rem)] -top-3 z-10" />
        <Plus className="size-6 group-hover:text-neutral-400 transition-all duration-200 ease-in-out -left-3 top-[calc(100%-0.75rem)]" />
        <Plus className="size-6 group-hover:text-neutral-400 transition-all duration-200 ease-in-out left-[calc(100%-0.75rem)] top-[calc(100%-0.75rem)] z-10" />
        <div className="xl:w-1/2 w-full h-full flex flex-col justify-center xl:justify-normal">
          <h2 className="mb-4 leading-10">{post.frontmatter["title"]}</h2>
          <p>{post.frontmatter["subtitle"]}</p>
        </div>
        <div className="xl:w-1/2 w-full xl:h-full h-0 mb-2 border border-neutral-500 xl:visible invisible overflow-clip">
          <Image
            src={`/${post.frontmatter["image"]}`}
            alt={post.frontmatter["alt"]}
            width={376}
            height={173}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="w-full h-8 border-t border-border flex">
        <div className="w-[calc(2.25rem+1px)] h-full border-r border-border"></div>
        <div className="w-full h-full"></div>
        <div className="w-[calc(2.25rem-1px)] h-full border-l border-border"></div>
      </div>
    </Link>
  );
}
