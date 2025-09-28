"use server";

import React from "react";
import Link from "next/link";
import { getAllPosts, type Post } from "@/app/functions";
import { Plus } from "../components/plus";
import { Instrument_Serif } from "next/font/google";

const serif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

export default async function Blog() {
  // fetch all the posts
  const posts = (await getAllPosts()) as Post[];

  return (
    <section
      id="blog"
      className="w-full xl:h-screen xl:p-10 xl:flex xl:flex-col text-foreground selection:bg-blue-neon selection:text-background"
    >
      <h1
        className={`${serif.className} w-fit px-2 text-center inline-block transform bg-foreground text-background font-semibold`}
      >
        Blog
      </h1>

      <div className="xl:w-1/2 xl:mt-40 mt-10 mx-auto xl:flex xl:flex-row relative xl:border-t border-border">
        <Plus className="size-6 -left-3 -top-3 xl:block hidden" />
        <Plus className="size-6 left-[calc(100%-0.75rem)] -top-3 z-10 xl:block hidden" />

        <div className="px-4 w-full">
          {posts ? posts.map((post) => <PostCard key={post.slug} post={post} />) : <h3>No posts</h3>}
        </div>
      </div>
    </section>
  );
}

function PostCard({ post }: { post: any }) {
  return (
    <div className="w-full my-2 xl:px-8 xl:py-2 p-6 rounded-md relative group overflow-hidden xl:border-0 border border-border">
      <div className="absolute w-full h-full bg-foreground right-full top-0 rounded-md group-hover:right-0 transition-all duration-300 ease-in-out z-[-1]" />
      <Link href={`/blog/${[post.slug]}`} className="xl:flex xl:flex-row flex-col xl:gap-x-8">
        <div className="w-4/5 h-full pb-4">
          <h2 className="leading-8 uppercase mix-blend-exclusion" style={{ fontWeight: 900, fontSize: "1.2rem" }}>
            {post.frontmatter["title"]}
          </h2>
          <p className="mix-blend-exclusion">{post.frontmatter["subtitle"]}</p>
        </div>
        <div className="w-2/5 xl:text-right">
          <p className="mix-blend-exclusion">{post.frontmatter["date"]}</p>
        </div>
      </Link>
    </div>
  );
}
