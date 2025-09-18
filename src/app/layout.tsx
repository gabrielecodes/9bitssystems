import { getMetadata } from "./seo";
import { Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { Nav } from "./nav";
import { Footer } from "./footer";

export const serif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
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
      <body className={`${font.className} bg-[url('/bg3.jpg')] antialiased -mt-14`}>
        <Nav />
        {children}
        <div className="w-full h-20 bg-[url('/bg3.jpg')]"></div>
        {/* <div className="w-full h-40 grid grid-cols-8 *:border-r *:border-border">
          {new Array(8).fill(null).map((_, idx) => (
            <div key={idx}></div>
          ))}
        </div> */}
        <Footer />
      </body>
    </html>
  );
}
