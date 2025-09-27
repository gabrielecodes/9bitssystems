import { Instrument_Serif } from "next/font/google";
import BackgroundVideo from "./components/backgroundvideo";

const serif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

function Hero() {
  return (
    <section className="w-full h-full xl:p-10 p-2 flex xl:flex-row flex-col relative">
      <BackgroundVideo />
      <div className="xl:w-1/2 w-full xl:h-full h-1/2 flex xl:flex-col flex-row justify-between">
        <p className="xl:w-3/5 w-1/2 text-xl font-medium" style={{ lineHeight: "1.5rem" }}>
          Hi, I&apos;m Gabriele. I&apos;m a{" "}
          <span className={`${serif.className} mx-1 inline-block`} style={{ fontSize: "2rem" }}>
            data engineer
          </span>{" "}
          and{" "}
          <span className={`${serif.className} mx-1 inline-block`} style={{ fontSize: "2rem" }}>
            arcihtect
          </span>{" "}
          helping businesses build a solid technological foundation &mdash; with reliable, secure, and modern solutions.
        </p>
        <div className="xl:w-3/5 w-1/2">
          <p className="leading-6">
            My goal is to support businesses in automating and growing with confidence, building{" "}
            <span className={`${serif.className} mx-1 inline-block`} style={{ fontSize: "2rem" }}>
              smarter
            </span>{" "}
            and scaling{" "}
            <span className={`${serif.className} mx-1 inline-block`} style={{ fontSize: "2rem" }}>
              faster
            </span>
            . I work alongside you to create thoughtful data strategies, build reliable cloud infrastructures, and
            develop systems that serve real needs.
          </p>
        </div>
      </div>
      <div className="xl:w-1/2 xl:h-full h-1/2 flex flex-col items-end justify-end relative">
        <p className="absolute bottom-12">I&apos;ve called this space</p>
        <span className="styro text-5xl scale-x-250 tracking-wide absolute bottom-0 right-18">NINE BITS</span>
      </div>
    </section>
  );
}

export { Hero };
