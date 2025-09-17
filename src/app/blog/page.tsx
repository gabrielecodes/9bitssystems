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
    <div className="h-full">
      <div className="mt-40 relative border-y border-border bg-[repeating-linear-gradient(135deg,_#e5e5e5_0px,_#e5e5e5_2px,_transparent_2px,_transparent_10px)]">
        <Plus className="-left-5 -top-5" />
        <Plus className="left-[calc(100%-1.25rem)] -top-5 z-10" />
        <Plus className="-left-5 top-[calc(100%-1.25rem)]" />
        <Plus className="left-[calc(100%-1.25rem)] top-[calc(100%-1.25rem)] z-10" />
        <h1 className={`${serif.className} ml-4 h-40 flex items-center`}>Blog</h1>
      </div>
      <div className="h-20 w-full"></div>
      <div className="w-full flex flex-wrap">
        {posts ? posts.map((post, index) => <PostCard key={post.slug} post={post} index={index} />) : <h3>No posts</h3>}
      </div>
    </div>
  );
}

function PostCard({ post, index }: { post: any; index: number }) {
  function isEven(num: number) {
    return num % 2 === 0;
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`${
        isEven(index) ? "mr-4" : ""
      } mb-4 w-full xl:w-[calc(50%-0.5rem)] h-[28rem] p-4 bg-background hover:bg-white shadow-lg hover:shadow-none transition transform hover:-translate-y-1 duration-200 ease-in-out flex flex-col border border-neutral-500`}
    >
      <div className="h-1/2 mb-2 border border-neutral-500">
        <Image
          src={`/${post.frontmatter["image"]}`}
          alt={post.frontmatter["alt"]}
          width={376}
          height={173}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="h-1/2 flex flex-col">
        <h2 className="mb-4 leading-10">{post.frontmatter["title"]}</h2>
        <p>{post.frontmatter["subtitle"]}</p>
      </div>
    </Link>
  );
}
