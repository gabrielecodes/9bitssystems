import { generateMetadata } from "./seo";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { Nav } from "./nav";

const font = Manrope({
  weight: "variable",
  subsets: ["latin"],
});

export const metadata: Metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} w-screen bg-background antialiased overflow-x-hidden`}>
        <Nav />
        <main className="text-foreground selection:bg-blue-neon selection:text-background overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
