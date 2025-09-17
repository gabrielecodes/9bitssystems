import { getMetadata } from "./seo";
import { Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { Nav } from "./nav";
import { Footer } from "./footer";

export const serif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
});

const font = Manrope({
  weight: "variable",
  subsets: ["latin"],
});

export const metadata: Metadata = getMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-[url('/bg.jpg')] antialiased -mt-14`}>
        <Nav />
        {children}
        <div className="w-full h-40 grid grid-cols-8 *:border-r *:border-neutral-200">
          {new Array(8).fill(null).map((_, idx) => (
            <div key={idx}></div>
          ))}
        </div>
        <Footer />
      </body>
    </html>
  );
}
