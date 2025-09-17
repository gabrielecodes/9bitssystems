import fs from "fs/promises";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

export const POSTS_DIR = path.join(process.cwd(), "src", "content", "posts");

export type Post = {
  slug: string;
  frontmatter: Record<string, unknown>;
  content: React.ReactElement<unknown, string | any>;
};

export async function getPostData(slug: string) {
  const filePath = path.join(POSTS_DIR, slug);
  const source = await fs.readFile(filePath, "utf-8");

  const { content, frontmatter } = await compileMDX({
    source,
    options: {
      parseFrontmatter: true,
      // optionally: remarkPlugins, rehypePlugins, etc
      mdxOptions: {
        // any mdx plugin configuration
      },
    },
  });

  return {
    slug,
    frontmatter,
    content,
  };
}

export async function getAllPosts() {
  const files = await fs.readdir(POSTS_DIR);

  const posts = await Promise.all(
    files.map(async (filename) => {
      const data = await getPostData(filename);
      return data;
    })
  );

  return posts;
}
