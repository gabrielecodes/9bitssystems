import type { Metadata } from "next";

export function getMetadata() {
  const metadata: Metadata = {
    title: {
      default: "9 Bits Systems - Scale Smarter. Grow Faster.",
      template: "%s | 9 Bits Systems",
    },

    description:
      "We help businesses automate and scale through data strategy, scalable cloud infrastructure, and reliable systems. From crafting data roadmaps to building growth-ready, secure environments, we turn chaotic data and systems into streamlined assets that drive productivity, reduce costs, and support 10x business growth—without downtime or risk.",

    keywords: [
      "IT automation services",
      "data strategy consulting",
      "scalable cloud infrastructure",
      "business data roadmap",
      "cloud systems reliability",
    ],

    // Open Graph metadata for rich previews on social media platforms like Facebook and LinkedIn.
    openGraph: {
      title: "9 Bits Systems - Scale Smarter. Grow Faster.",
      description:
        "We help businesses automate and scale through data strategy, scalable cloud infrastructure, and reliable systems.",
      url: "[https://www.your-app-url.com](https://www.your-app-url.com)",
      siteName: "9 Bits Systems",
      images: [
        {
          url: "[https://www.your-app-url.com/og-image.jpg](https://www.your-app-url.com/og-image.jpg)",
          width: 1200,
          height: 630,
          alt: "A descriptive alt text for your Open Graph image",
        },
        // You can include multiple images for different sizes or purposes
      ],
      locale: "en_US",
      type: "website",
    },

    // Twitter Card metadata for rich previews on Twitter.
    twitter: {
      card: "summary_large_image",
      site: "@your-twitter-handle",
      creator: "@your-twitter-handle",
      title: "9 Bits Systems - Scale Smarter. Grow Faster.",
      description:
        "9 Bits systems helps your business automate and scale through data strategy, scalable cloud infrastructure, and reliable systems.",
      images: [
        "[https://www.your-app-url.com/twitter-card-image.jpg](https://www.your-app-url.com/twitter-card-image.jpg)",
      ],
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
      canonical: "[https://www.your-app-url.com](https://www.your-app-url.com)",
    },
  };
  return metadata;
}
