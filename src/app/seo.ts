import type { Metadata } from "next";

export function generateMetadata() {
  const metadata: Metadata = {
    title: {
      default: "9 Bits Systems - Scale Smarter. Grow Faster.",
      template: "%s | 9 Bits Systems",
    },

    description:
      "9 Bits systems helps businesses automate and scale through data strategy, scalable cloud infrastructure, and reliable systems. From crafting data strategies to building growth-ready, secure environments, I turn chaotic data and systems into streamlined assets that drive productivity, reduce costs, and support business growth—without downtime or risk.",

    applicationName: "Nine Bits Systems",

    generator: "Next.js",

    publisher: "",

    keywords: [
      "IT automation services",
      "data strategy consulting",
      "scalable cloud infrastructure",
      "data strategy",
      "cloud systems reliability",
    ],

    // Open Graph metadata for rich previews on social media platforms like Facebook and LinkedIn.
    openGraph: {
      title: "9 Bits Systems - Scale Smarter. Grow Faster.",
      description:
        "9 Bits systems helps you automate and scale through data strategy, scalable cloud infrastructure, and reliable systems.",
      url: "https://www.ninebitssystems.com",
      siteName: "9 Bits Systems",
      images: [
        {
          url: "https://www.ninebitssystems.com/icon.png",
          width: 1200,
          height: 630,
          alt: "The logo of 9 bits systems",
        },
        // You can include multiple images for different sizes or purposes
      ],
      locale: "en_US",
      type: "website",
    },

    // Twitter Card metadata for rich previews on Twitter.
    twitter: {
      card: "summary_large_image",
      title: "9 Bits Systems - Scale Smarter. Grow Faster.",
      description:
        "9 Bits systems helps your business automate and scale through data strategy, scalable cloud infrastructure, and reliable systems.",
      images: ["https://www.ninebitssystems.com/icon.png"],
    },

    // Instructions for search engine crawlers.
    // 'index' allows the page to be indexed, 'follow' allows crawlers to follow links.
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },

    // Canonical URL to prevent duplicate content issues.
    alternates: {
      canonical: "https://www.ninebitssystems.com",
    },
  };
  return metadata;
}
