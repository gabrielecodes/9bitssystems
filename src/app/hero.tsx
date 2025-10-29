import { Instrument_Serif } from "next/font/google";
import BackgroundVideo from "./components/backgroundvideo";
// import Image from "next/image";
import Link from "next/link";

const serif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

function Hero() {
  return (
    <section className="h-screen xl:p-48 p-2 flex xl:flex-row flex-col relative xl:gap-x-10 justify-center">
      <BackgroundVideo />
      <div className="xl:w-1/3 w-full xl:h-full h-3/4 flex flex-col justify-between">
        <div className="xl:mt-30 mt-0">
          <div className="w-full mb-6 text-xl font-medium" style={{ lineHeight: "1.6rem" }}>
            <div className="text-2xl font-black">I&apos;m Gabriele,</div> a{" "}
            <span className={`${serif.className} mx-1 inline-block`} style={{ fontSize: "1.8rem" }}>
              data engineer
            </span>{" "}
            and{" "}
            <span className={`${serif.className} mx-1 inline-block`} style={{ fontSize: "1.8rem" }}>
              cloud architect
            </span>{" "}
            helping businesses build solid technological foundations &mdash; with reliable, secure, and modern
            solutions.
          </div>
          <div className="flex gap-x-4 w-fit">
            <Link href={"#contact"} className="mt-2 px-3 py-2 bg-blue-neon rounded-md text-background font-semibold">
              Let&apos;s Talk
            </Link>
            <Link
              href={"#services"}
              className="mt-2 px-3 py-2 bg-background text-foreground rounded-md border border-border font-semibold"
            >
              What I Do
            </Link>
          </div>
        </div>
        <div className="w-full">
          <p className="leading-6">
            I support businesses in automating, growing{" "}
            <span className={`${serif.className} mx-1 inline-block`} style={{ fontSize: "1.8rem" }}>
              smarter
            </span>{" "}
            and scaling{" "}
            <span className={`${serif.className} mx-1 inline-block`} style={{ fontSize: "1.8rem" }}>
              faster. {" "}
            </span>
            With nearly a decade of experience, I build
            <span className={`${serif.className} mx-1 inline-block`} style={{ fontSize: "1.8rem" }}>
              data integrations
            </span>
            and
            <span className={`${serif.className} mx-1 inline-block`} style={{ fontSize: "1.8rem" }}>
              cloud
            </span>{" "}
            <span className={`${serif.className} mx-1 inline-block`} style={{ fontSize: "1.8rem" }}>
              infrastructures,{" "}
            </span>
            developing systems that serve real needs.
          </p>
        </div>
      </div>
      <div className="xl:w-1/3 xl:h-full h-1/4 xl:flex xl:flex-col items-end justify-end relative hidden">
        {/* <div className="w-[5%] h-full absolute top-0 left-0 z-50 bg-gradient-to-r from-background"></div>
        <div className="w-full h-[15%] transform absolute top-10 right-0 z-50 bg-gradient-to-b from-background"></div>*/}
        {/* <div className="w-full h-[10%] transform absolute -bottom-10 z-50 bg-background"></div> */}
        {/* <div className="w-full h-full transform -translate-x-40 absolute top-0 left-0 z-20 bg-[radial-gradient(circle,transparent_50%,black_90%)]"></div> */}
        {/* <Image
          className="h-full absolute transform right-0 z-0 -bottom-10 object-cover xl:block hidden"
          src="/self2.png"
          alt="Profile picture of self"
          priority
          width={330}
          height={200}
        /> */}
        {/* <p className="absolute bottom-12 z-50">Welcome to</p> */}
        <span className="styro text-5xl scale-x-250 tracking-wide absolute bottom-0 right-18 z-50">NINE BITS</span>
      </div>
    </section>
  );
}

export { Hero };
