import { CtaSignup } from "@/components/CtaSignup";
import { getSeoPage, getSeoPageSlugs, seoPages } from "@/lib/seo-pages";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getSeoPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage(slug);
  if (!page) return { title: "Not Found" };

  return {
    title: page.metaTitle,
    description: page.description,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.description,
      url: `https://selfetape.com/${page.slug}`,
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${page.title} — Self-e-Tape`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.description,
      images: ["/opengraph-image"],
    },
  };
}

export default async function SeoLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSeoPage(slug);
  if (!page) notFound();

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://selfetape.com" },
      { "@type": "ListItem", position: 2, name: page.title, item: `https://selfetape.com/${page.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <main className="seo-page">
        <section className="seo-hero">
          <Link href="/" className="seo-wordmark">Self<em>e</em>Tape</Link>
          <div className="section-label">{page.heroEyebrow}</div>
          <h1>{page.heroTitle}</h1>
          <p>{page.heroSubtitle}</p>
          <div className="seo-cta-row">
            <CtaSignup label={page.primaryCta} />
            <Link href="/blog" className="seo-secondary-link">Read the actor guides</Link>
          </div>
        </section>

        <section className="seo-section seo-two-col">
          <div>
            <div className="section-label">The problem</div>
            <h2>{page.problemTitle}</h2>
          </div>
          <div className="seo-copy-stack">
            {page.problemBody.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>

        <section className="seo-section seo-card-section">
          <div className="section-label">The Self-e-Tape answer</div>
          <h2>{page.solutionTitle}</h2>
          <div className="seo-benefit-grid">
            {page.solutionBullets.map((bullet) => (
              <div className="seo-benefit-card" key={bullet}>
                <span>✓</span>
                <p>{bullet}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="seo-section">
          <div className="section-label">Comparison</div>
          <h2>{page.comparisonTitle}</h2>
          <div className="seo-comparison-grid">
            {page.comparisons.map((item) => (
              <article className="seo-comparison-card" key={item.label}>
                <h3>{item.label}</h3>
                <p><strong>The catch:</strong> {item.drawback}</p>
                <p><strong>Self-e-Tape:</strong> {item.selfeTape}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="seo-section seo-faq">
          <div className="section-label">FAQ</div>
          <h2>Quick answers</h2>
          {page.faq.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </section>

        <section className="seo-section seo-related">
          <div className="section-label">Keep going</div>
          <h2>Related self-tape resources</h2>
          <div className="seo-related-links">
            {page.related.map((relatedSlug) => {
              const related = seoPages.find((item) => item.slug === relatedSlug);
              return related ? <Link key={related.slug} href={`/${related.slug}`}>{related.title}</Link> : null;
            })}
          </div>
        </section>

        <section className="cta-section seo-final-cta" id="join">
          <div className="cta-inner">
            <h2>Get early access before launch.</h2>
            <p>Join the actor beta list and get the Self-Tape Emergency Kit: a practical checklist for last-minute auditions.</p>
            <CtaSignup label="Send me the kit + early access" />
          </div>
        </section>
      </main>
    </>
  );
}
