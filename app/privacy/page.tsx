import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export default async function PrivacyPage() {
  const filePath = path.join(process.cwd(), "content/privacy.md");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content } = matter(fileContents);
  const processed = await remark().use(html).process(content);

  return (
    <>
      <nav>
        <div className="nav-inner">
          <Link href="/" className="nav-wordmark">Self<em>e</em>Tape</Link>
          <div className="nav-links">
            <Link href="/blog" className="nav-link">Blog</Link>
            <Link href="/#join" className="nav-cta">Join Waitlist</Link>
          </div>
        </div>
      </nav>
      <article className="blog-post">
        <Link href="/" className="blog-back">← Back to Home</Link>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: processed.toString() }} />
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
