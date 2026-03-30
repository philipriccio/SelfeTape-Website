import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Self-e-Tape",
  description: "Tips, insights, and honest talk about self-taping from a working actor.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <nav>
        <div className="nav-inner">
          <Link href="/" className="nav-wordmark">
            Self<em>e</em>Tape
          </Link>
          <div className="nav-links">
            <Link href="/#story" className="nav-link">Our story</Link>
            <Link href="/#features" className="nav-link">Features</Link>
            <Link href="/blog" className="nav-link">Blog</Link>
            <Link href="/#join" className="nav-cta">Join Waitlist</Link>
          </div>
        </div>
      </nav>

      <div className="blog-header">
        <h1>Blog</h1>
      </div>

      <div className="blog-list">
        {posts.map((post) => (
          <div key={post.slug} className="blog-post-card">
            <Link href={`/blog/${post.slug}`}>
              <div className="blog-meta">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                · {post.author}
              </div>
              <h2>{post.title}</h2>
              <p className="blog-excerpt">{post.description}</p>
            </Link>
          </div>
        ))}
      </div>

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
