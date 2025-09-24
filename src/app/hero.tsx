// import Link from "next/link";
import Image from "next/image";
import { Manrope, Instrument_Serif } from "next/font/google";


const serif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

function Hero() {
  return (
    <section className="w-full h-full flex">
      <div className="w-1/2 h-full flex flex-col justify-between">
        <h1 className="w-3/5 text-xl font-medium" style={{ fontWeight: 400, fontSize: "1.1rem" }}>
          I&apos;m a <span className={`${serif.className} mx-1 inline-block`} style={{ fontSize: "2rem" }}>data engineer</span> and <span className={`${serif.className} mx-1 inline-block`} style={{ fontSize: "2rem" }}>arcihtect</span> helping businesses build a solid technological foundation &mdash; with
          reliable, secure, and modern solutions.
        </h1>
        <div className="w-3/5">
          <p>
            My goal is to support businesses in automating and growing with confidence, building <span className={`${serif.className} mx-1 inline-block`} style={{ fontSize: "2rem" }}>smarter</span> and scaling <span className={`${serif.className} mx-1 inline-block`} style={{ fontSize: "2rem" }}>faster</span>. I work alongside you to
            create thoughtful data strategies, build reliable cloud infrastructures, and develop systems that
            serve real needs.
          </p>
        </div>
      </div>
    </section>
  );
}

export { Hero };
