import type { MetadataRoute } from "next";
import { getAllPosts } from "./functions";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  const postUrls = posts.map((post) => ({
    url: `https://ninebitssystems.com/blog/${post.slug.replace(".md", "")}`,
    lastModified: new Date(post.frontmatter.date as string),
    changeFrequency: "weekly",
    priority: 0.7,
  })) as MetadataRoute.Sitemap;

  return [
    {
      url: "https://ninebitssystems.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
      videos: [
        {
          title: "background video",
          thumbnail_loc: "https://ninebitssystems.com/ai.jpg",
          description: "a background video",
          content_loc: "https://ninebitssystems.com/videos/bg-video.mp4",
        },
      ],
    },
    {
      url: "https://ninebitssystems.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://ninebitssystems.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...postUrls,
  ];
}
