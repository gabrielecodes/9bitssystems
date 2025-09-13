import { getMetadata } from "./seo";
// import { Figtree } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

// const font = Figtree({
//   weight: "variable",
//   subsets: ["latin"],
// });

const metadata: Metadata = getMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`$ antialiased`}>{children}</body>
    </html>
  );
}
