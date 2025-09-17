"use server";

import { notFound } from "next/navigation";
import { getPostData, type Post } from "@/app/functions";
import { Plus } from "@/app/components/plus";
import Head from "next/head";
import { serif } from "@/app/layout";

export default async function Blog({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = (await getPostData(slug)) as Post;

  if (!post) return notFound();

  const dateArr = new Date(post.frontmatter["date"] as string).toDateString().split(" ");
  dateArr.shift();
  const date = dateArr.join(" ");

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://www.ninebitssystems.com/blog/${post.slug}`,
            },
            headline: post.frontmatter["title"],
            image: ["https://www.ninebitssystems.com/public/" + post.frontmatter["image"]],
            datePublished: post.frontmatter["date"],
            dateModified: post.frontmatter["date"],
            publisher: {
              "@type": "Organization",
              name: "Nine Bits Systems",
              logo: {
                "@type": "ImageObject",
                url: "https://www.ninebitssystems.com/icon.png",
              },
            },
            description: post.frontmatter["excerpt"],
          })}
        </script>
      </Head>
      <article className="mt-40 border-b border-neutral-200">
        <h1
          className={`h-40 py-4 px-20 mb-8 flex items-center border-y border-neutral-200 relative checkerboard-border ${serif.className}`}
          style={{ fontSize: "48px" }}
        >
          <Plus className="-left-5 -top-5" />
          <Plus className="left-[calc(100%-1.25rem)] -top-5" />
          <Plus className="-left-5 top-[calc(100%-1.25rem)]" />
          <Plus className="left-[calc(100%-1.25rem)] top-[calc(100%-1.25rem)]" />
          {post.frontmatter["title"] as string}
        </h1>
        <div className="w-full px-20 mb-8">
          <p className="pb-2" style={{ fontSize: "24px", letterSpacing: "-0.03em" }}>
            {post.frontmatter["excerpt"] as string}
          </p>
          <p className="text-end">{date}</p>
        </div>
        <div
          id="post-content"
          className="px-20 pb-10 [&>h2]:mt-6 [&>h2]:mb-4 [&>h3]:mt-6 [&>h3]:mb-4 [&>p]:mb-4 *:l:ml-4"
        >
          {post.content}
        </div>
      </article>
    </>
  );
}
