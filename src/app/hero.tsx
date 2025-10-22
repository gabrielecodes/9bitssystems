import { Instrument_Serif } from "next/font/google";
import BackgroundVideo from "./components/backgroundvideo";
import Link from "next/link";

const serif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

function Hero() {
  return (
    <section className="h-screen xl:p-48 p-2 flex xl:flex-row flex-col relative">
      <BackgroundVideo />
      <div className="xl:w-1/2 w-full xl:h-full h-3/4 flex flex-col justify-between">
        <div>
          <p className="xl:w-3/5 w-full text-xl font-medium" style={{ lineHeight: "1.6rem" }}>
            <span className="xl:inline-block hidden xl:w-20"></span><span className="text-2xl font-black">I&apos;m Gabriele</span>, a{" "}
            <span className={`${serif.className} mx-1 inline-block`} style={{ fontSize: "2rem" }}>
              data engineer
            </span>{" "}
            and{" "}
            <span className={`${serif.className} mx-1 inline-block`} style={{ fontSize: "2rem" }}>
              cloud architect
            </span>{" "}
            helping businesses build solid technological foundations &mdash; with reliable, secure, and modern solutions.
          </p>
          <div className="flex gap-x-4 w-fit">
            <Link href={"#contact"} className="mt-2 px-3 py-2 bg-blue-neon rounded-md text-background font-semibold">
              Let&apos;s Talk
            </Link>
            <Link href={"#services"} className="mt-2 px-3 py-2 bg-background text-foreground rounded-md border border-border font-semibold">
              What I Do
            </Link>
          </div>
        </div>
        <div className="xl:w-3/5 w-full">
          <p className="leading-6">
            I support businesses in automating and growing with confidence, building{" "}
            <span className={`${serif.className} mx-1 inline-block`} style={{ fontSize: "2rem" }}>
              smarter
            </span>{" "}
            and scaling{" "}
            <span className={`${serif.className} mx-1 inline-block`} style={{ fontSize: "2rem" }}>
              faster
            </span>
            . With nearly a decade of experience, I to create thoughtful
            <span className={`${serif.className} mx-1 inline-block`} style={{ fontSize: "2rem" }}>
              data integrations
            </span>
            and build reliable
            <span className={`${serif.className} mx-1 inline-block`} style={{ fontSize: "2rem" }}>
              cloud infrastructures
            </span>, developing systems that serve real needs.
          </p>
        </div>
      </div>
      <div className="xl:w-1/2 xl:h-full h-1/4 flex flex-col items-end justify-end relative">
        <p className="absolute bottom-12">Welcome to</p>
        <span className="styro text-5xl scale-x-250 tracking-wide absolute bottom-0 right-18">NINE BITS</span>
      </div>
    </section>
  );
}

export { Hero };
