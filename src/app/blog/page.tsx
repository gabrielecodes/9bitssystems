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
    <div className="xl:w-1/2 w-full h-full mb-20 border border-border">
      <div className="mt-40 relative border-y border-border">
        <Plus className="size-6 -left-3 -top-3" />
        <Plus className="size-6 left-[calc(100%-0.75rem)] -top-3 z-10" />
        <Plus className="size-6 -left-3 top-[calc(100%-0.75rem)]" />
        <Plus className="size-6 left-[calc(100%-0.75rem)] top-[calc(100%-0.75rem)] z-10" />
        <h1 className={`${serif.className} ml-4 h-40 flex items-center`}>Blog</h1>
      </div>
      <div className="p-4 w-full flex xl:flex-row flex-col flex-wrap gap-4">
        {posts ? posts.map((post) => <PostCard key={post.slug} post={post} />) : <h3>No posts</h3>}
      </div>
    </div>
  );
}

function PostCard({ post }: { post: any }) {
  return (
    <div className="xl:w-[calc(50%-.5rem)] w-full h-[28rem] bg-[url('/glass.jpg')] rounded-md group border border-border">
      <Link href={`/blog/${[post.slug]}`} className="bg-cover rounded-md block">
        <Image
          src={`/${post.frontmatter["image"]}`}
          alt={post.frontmatter["alt"]}
          width={384}
          height={384}
          className="w-full h-62 object-cover transition-all duration-200 ease-in-out rounded-t-md group-hover:blur-xs"
        />
        <div className="w-full h-full px-8 pb-8 py-4 flex flex-col justify-center xl:justify-normal">
          <h2 className="mb-4 leading-6 uppercase" style={{ fontWeight: 900, fontSize: "1rem" }}>
            {post.frontmatter["title"]}
          </h2>
          <p>{post.frontmatter["subtitle"]}</p>
        </div>
      </Link>
    </div>
  );
}
