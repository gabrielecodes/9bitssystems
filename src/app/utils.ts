import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import fs from 'fs/promises';
import path from 'path';
import matter from "gray-matter";


export const POSTS_DIR = path.join(process.cwd(), 'src', 'content', 'posts');

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Params = {
  params: {
    slug: string;
  };
};

export async function getPostData(slug: string) {
  const filePath = path.join(POSTS_DIR, slug + ".md");
  const rawContent = await fs.readFile(filePath, 'utf-8');
  const { data, content } = matter(rawContent);

  return {
    slug,
    ...data,
    content,
  };
}

export async function getAllPosts() {
  const files = await fs.readdir(POSTS_DIR);

  const posts = await Promise.all(
    files.map(async (filename) => {
      const filePath = path.join(POSTS_DIR, filename);
      const rawContent = await fs.readFile(filePath, 'utf-8');
      const { data, content } = matter(rawContent);

      const slug = filename.replace(/\.md$/, '');

      return {
        slug,
        ...data,
        content,
      };
    })
  );

  return posts;
}