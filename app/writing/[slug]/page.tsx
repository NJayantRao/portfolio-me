import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getPostBySlug, posts } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-32 pb-28">
      <div className="mx-auto w-full max-w-2xl px-6 sm:px-8">
        <Link
          href="/#writing"
          className="mono inline-flex items-center gap-2 text-xs tracking-wide text-muted-foreground uppercase transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" /> Back to writing
        </Link>

        <span className="mono mt-8 block text-xs tracking-widest text-signal uppercase">
          {post.topic}
        </span>
        <h1 className="mt-4 text-4xl font-medium tracking-tight text-balance sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>

        {post.content ? (
          <div className="mt-12 flex flex-col gap-5 border-t border-border pt-10 text-base leading-relaxed text-muted-foreground">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-xl border border-dashed border-border p-8 text-center">
            <p className="mono text-xs tracking-widest text-signal uppercase">
              Coming Soon
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              This article is still being written. Check back soon.
            </p>
          </div>
        )}
      </div>
    </article>
  );
}
