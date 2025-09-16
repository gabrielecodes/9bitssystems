import React from "react";
import Link from "next/link";
import { getAllPosts } from "../utils";


export type Params = {
  params: {
    slug: string;
  };
};

export default function Blog() {
  return (
    <section className="xl:mx-0 mx-4 xl:grid xl:grid-cols-8">
      <div></div>
      <div className="border-r border-neutral-200"></div>
      <div className="col-start-3 col-span-4">
        <BlogList />
      </div>
      <div className="border-l border-neutral-200"></div>
      <div></div>
      <div></div>
    </section>

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


async function BlogList() {
  // fetch all the posts
  const posts = await getAllPosts();

  return (
    <div className="h-full">
      <h1>Blog</h1>
      <div className="h-20 w-full"></div>
      <div className="w-full flex flex-wrap">
        {posts.map((post, index) => <PostCard key={post.slug} post={post} index={index} />)}
      </div>
    </div>
  )
}


function PostCard({ post, index }: { post: any, index: number }) {

  function isEven(num: number) {
    console.log(num % 2 === 0)
    return num % 2 === 0
  }

  return (
    <Link href={`/blog/${post.slug}`} className={`${isEven(index) ? 'mr-4' : ''} mb-4 w-full xl:w-[calc(50%-0.5rem)] h-[28rem] p-4 bg-neutral-200 flex flex-col border border-neutral-500`}>
      <div className="h-86 mb-2 border border-neutral-500">Image</div>
      <div className="h-full flex flex-col justify-between">
        <h2>{post.title}</h2>
        <p>{post.excerpt}</p>
      </div>
    </Link>
  )
}

