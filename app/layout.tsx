import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  axes: ["opsz"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Self-e-Tape — The self-tape app built by an actor, for actors.",
    template: "%s | Self-e-Tape",
  },
  description:
    "The all-in-one self-tape app for actors. Import your sides, choose a reader voice, rehearse, record, edit your audio, and submit — all from your phone. Built by a working actor who got tired of the midnight scramble.",
  keywords: [
    "self tape app",
    "self-tape app",
    "selftape app",
    "self tape app for actors",
    "audition recording app",
    "self tape without a reader",
    "self tape reader app",
    "actor self tape",
    "self tape audition app",
    "how to record a self tape",
    "best self tape app",
    "self tape tips",
    "audition app for actors",
    "acting audition app",
    "self tape editing app",
    "record audition on phone",
    "self tape audio fix",
    "self tape lighting",
    "rehearse lines app",
    "run lines app",
    "line reader app actors",
    "scene partner app",
  ],
  authors: [{ name: "Philip Riccio", url: "https://selfetape.com" }],
  creator: "Philip Riccio",
  publisher: "Self-e-Tape",
  metadataBase: new URL("https://selfetape.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Self-e-Tape — Your whole self-tape workflow. One app.",
    description:
      "The self-tape app built by an actor, for actors. Import sides, choose a reader, record, edit, submit. No studio. No favours.",
    type: "website",
    url: "https://selfetape.com",
    siteName: "Self-e-Tape",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Self-e-Tape — Your whole self-tape workflow. One app.",
    description:
      "The self-tape app built by an actor, for actors. Import sides, choose a reader, record, edit, submit.",
    creator: "@philipriccio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add Google Search Console verification when ready
    // google: "verification-code",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Self-e-Tape",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "iOS",
  description:
    "The all-in-one self-tape app for actors. Import your sides, choose a reader voice, rehearse, record, edit your audio, and submit — all from your phone.",
  url: "https://selfetape.com",
  author: {
    "@type": "Person",
    name: "Philip Riccio",
    jobTitle: "Actor, Director, Producer",
    url: "https://selfetape.com",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free to download with optional Residuals Program",
  },
  featureList: [
    "Import sides from any PDF",
    "Natural reader voices",
    "Rehearse mode",
    "Video recording with framing guides",
    "Audio enhancement suite",
    "Lighting correction",
    "Multi-scene assembly",
    "One-tap export",
  ],
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Self-e-Tape",
  url: "https://selfetape.com",
  logo: "https://selfetape.com/favicon-192.png",
  founder: {
    "@type": "Person",
    name: "Philip Riccio",
  },
  description:
    "Self-e-Tape is the self-tape app built by a working actor for actors. Your whole audition workflow in one app.",
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://selfetape.com",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
