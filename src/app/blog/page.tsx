"use server"

import React from "react";
import Link from "next/link";
import { getAllPosts, type Post } from '@/app/functions';

export default async function Blog() {
  // fetch all the posts
  const posts = await getAllPosts() as Post[];

  return (
    <div className="h-full">
      <h1>Blog</h1>
      <div className="h-20 w-full"></div>
      <div className="w-full flex flex-wrap">
        {posts ? posts.map((post, index) => <PostCard key={post.slug} post={post} index={index} />) : <h3>No posts</h3>}
      </div>
    </div>
  )
}

export type Article = {
  title: string,
  subtitle: string
}

const articles: Article[] = [
  {
    title: "Top 3 Career Myths in Data Engineering",
    subtitle: "Beyond the hype — focus on what’s real and avoid burning out"
  },
  {
    title: "Modern Data Stack: What You Need to Know",
    subtitle: "A breakdown of the tools powering today’s cloud-native data platforms"
  },
  {
    title: "Streaming vs. Batch Processing",
    subtitle: "Choosing the right data processing approach for your use case"
  },
  {
    title: "Orchestrating Data Workflows with Airflow",
    subtitle: "A guide to managing complex dependencies in your data pipelines"
  },
  {
    title: "Introduction to Data Lakes and Lakehouses",
    subtitle: "How organizations are unifying storage and compute for big data workloads"
  },
  {
    title: "Scaling Data Transformations with dbt",
    subtitle: "How analytics engineering is changing the way teams work with data"
  }
];


function PostCard({ post, index }: { post: any, index: number }) {

  function isEven(num: number) {
    return num % 2 === 0
  }

  return (
    <Link href={`/blog/${post.slug}`} className={`${isEven(index) ? 'mr-4' : ''} mb-4 w-full xl:w-[calc(50%-0.5rem)] h-[24rem] p-4 bg-neutral-200 flex flex-col border border-neutral-500`}>
      <div className="h-1/2 mb-2 border border-neutral-500">Image</div>
      <div className="h-1/2 flex flex-col">
        <h2 className="mb-4 leading-10">{post.frontmatter["title"]}</h2>
        <p>{post.frontmatter["excerpt"]}</p>
      </div>
    </Link>
  )
}

