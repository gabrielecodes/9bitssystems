import type { Metadata } from "next";

export function generateMetadata() {
  const metadata: Metadata = {
    title: {
      default: "Nine Bits Systems - Data Engineering and Cloud Infrastructure",
      template: "%s | 9 Bits Systems",
    },

    description:
      "Nine Bits systems provides Data Engineering and Cloud Infrastructure consulting services, helping businesses scale their data and cloud infrastructures. I craft data architectures and build reliable and secure environments that drive productivity, reduce costs, and support business growth, without downtime or risk.",

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
      title: "Nine Bits Systems - Data Engineering and Cloud Infrastructure",
      description:
        "Nine Bits Systems provides Data Engineering and Cloud Infrastructure consulting services, helping businesses scale their data and cloud infrastructure",
      url: "https://www.ninebitssystems.com",
      siteName: "Nine Bits Systems",
      images: [
        {
          url: "https://www.ninebitssystems.com/icon.png",
          width: 1200,
          height: 630,
          alt: "The logo of Nine bits systems",
        },
        // You can include multiple images for different sizes or purposes
      ],
      locale: "en_US",
      type: "website",
    },

    // Twitter Card metadata for rich previews on Twitter.
    twitter: {
      card: "summary_large_image",
      title: "Nine Bits Systems - Data Engineering and Cloud Infrastructure",
      description:
        "Nine Bits Systems provides Data Engineering and Cloud Infrastructure consulting services, helping businesses scale their data and cloud infrastructure",
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
