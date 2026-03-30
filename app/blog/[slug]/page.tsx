import { getPostBySlug, getAllPostSlugs } from "@/lib/blog";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} — Self-e-Tape`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <nav>
        <div className="nav-inner">
          <Link href="/" className="nav-wordmark">
            Self<em>e</em>Tape
          </Link>
          <div className="nav-links">
            <Link href="/blog" className="nav-link">Blog</Link>
            <Link href="/#join" className="nav-cta">Join Waitlist</Link>
          </div>
        </div>
      </nav>

      <article className="blog-post">
        <Link href="/blog" className="blog-back">← Back to Blog</Link>
        <h1>{post.title}</h1>
        <div className="blog-meta">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          · {post.author}
        </div>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }}
        />
      </article>

      <footer>
        <div className="footer-wordmark">Self<em>e</em>Tape</div>
        <div className="footer-tagline">Built by an actor. For actors.</div>
        <div className="footer-links">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <a href="mailto:hello@selfetape.com">Contact</a>
        </div>
        <div className="footer-copy">© 2026 Self-e-Tape. Made in Toronto.</div>
      </footer>
    </>
  );
}
