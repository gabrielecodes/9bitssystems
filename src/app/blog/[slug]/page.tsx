import { notFound } from 'next/navigation';
import { getPostData, type Params } from '@/app/utils';

export default async function Blog({ params }: Params) {
  const post = await getPostData(params.slug) as any;

  if (!post) return notFound();

  return (
    <article>
      <h1 style={{ fontSize: "48px" }}>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  )
}


