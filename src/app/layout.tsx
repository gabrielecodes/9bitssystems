import { getMetadata } from "./seo";
import { Manrope, DM_Mono } from "next/font/google";
// import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

// export const mono = DM_Mono({
//   weight: "400",
//   subsets: ["latin"],
// });

const font = Manrope({
  weight: "variable",
  subsets: ["latin"],
});

const metadata: Metadata = getMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>{children}</body>
    </html>
  );
}
