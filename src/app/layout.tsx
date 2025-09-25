import { generateMetadata } from "./seo";
import { Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { Nav } from "./nav";
import { Footer } from "./footer";
import { Border } from "./components/border";

const serif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

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
      <body className={`${font.className} h-screen bg-background antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
