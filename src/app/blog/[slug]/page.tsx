"use server";

import { notFound } from "next/navigation";
import { getPostData, type Params, type Post } from "@/app/functions";
import Plus from "@/app/components/plus";

export default async function Blog({ params }: Params) {
  const { slug } = await params;
  const post = (await getPostData(slug)) as Post;

  if (!post) return notFound();

  return (
    <article className="mt-40">
      <h1 className="p-4 mb-8 border-y border-neutral-200 relative checkerboard-border" style={{ fontSize: "48px" }}>
        <Plus className="-left-5 -top-5" />
        <Plus className="left-[calc(100%-1.25rem)] -top-5" />
        <Plus className="-left-5 top-[calc(100%-1.25rem)]" />
        <Plus className="left-[calc(100%-1.25rem)] top-[calc(100%-1.25rem)]" />
        {post.frontmatter["title"] as string}
      </h1>
      <div className="w-full px-4 mb-8">
        <h3 className="mb-2">{post.frontmatter["excerpt"] as string}</h3>
        <p className="text-end">{post.frontmatter["date"] as string}</p>
      </div>
      <div className="px-4 [&>h3]:mt-6 [&>h3]:mb-4 ">{post.content}</div>
    </article>
  );
}
