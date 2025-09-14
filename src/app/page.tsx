"use client";

import { Border } from "./components/border";
import { SectionInner } from "./components/sectioninner";
import { SectionOuter } from "./components/sectionouter";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { Nav } from "./nav";
import { mono } from "./layout";

import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from "./components/marquee";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="w-full min-h-screen select-none">
        <SectionOuter>
          <SectionInner>
            <Hero />
          </SectionInner>
        </SectionOuter>
        <Border />
        <SectionOuter>
          <SectionInner className="gap-x-0">
            <div className="h-20 col-span-8"></div>
            <h2 className="h-20 ml-2 col-start-2 col-span-6 flex items-center">
              <span className="px-4 inline-block transform -skew-x-12 bg-sky-400">
                <span className="font-semibold inline-block skew-x-12">How We Work &#8628;</span>
              </span>
            </h2>
            <div className="h-20 col-span-8"></div>
            <h3 className="col-start-5 col-span-3 flex items-center text-justify">
              We deliver tailored solutions so you have control, visibility, and security. We build systems that enable
              your teams to move faster—not lock them into complexity.
            </h3>
            <div className="h-16 col-span-8"></div>
            <p className="col-start-3 col-span-2 flex items-start text-justify">
              Our goal is to help businesses automate and scale, delivering data strategies, solid cloud
              infrastructures, and reliable systems. From crafting data roadmaps to building secure environments, we
              turn chaotic data and systems into streamlined assets that drive productivity, reduce costs, and support
              10x business growth—minimizing complexity and risk.
            </p>
            <p className="col-start-6 col-span-2 flex items-start text-justify">
              Our approach is simple: deliver only the best. That means proven technologies, clean architectures, and
              solutions tailored to your real-world challenges. We build with intention, so you stay in control. Whether
              it&apos;s gaining visibility across your data stack, scaling operations with confidence, or securing your
              cloud environment, our focus is on long-term impact.
            </p>
            <div className="h-40 col-span-8"></div>
          </SectionInner>
        </SectionOuter>
        <Border />
        <div className="w-full mb-20 grid grid-cols-8">
          <div className="h-20 col-span-8"></div>
          <div className="h-fit col-start-2 col-end-8">
            <h2 className="ml-2 col-start-2 col-span-6 flex items-center">
              <span className="px-4 inline-block transform -skew-x-12 bg-sky-400">
                <span className="font-semibold inline-block skew-x-12">Our Tech &#8628;</span>
              </span>
            </h2>
          </div>
          <Marq />
        </div>
        <Border />
        <SectionOuter>
          <SectionInner className="gap-x-0">
            <div className="h-20 col-span-8"></div>
            <h2 className="h-20 ml-2 col-start-2 col-span-6 flex items-center">
              <span className="px-4 inline-block transform -skew-x-12 bg-sky-400">
                <span className="font-semibold inline-block skew-x-12">Our Services &#8628;</span>
              </span>
            </h2>
            <h1 className="h-[20rem] mt-20 mx-2 col-start-2 col-span-2 flex items-center rounded-md bg-neutral-300 hover:bg-sky-500 transition-color duration-200"></h1>
            <h1 className="h-[20rem] mt-36 mx-2 col-start-4 col-span-2 flex items-center rounded-md bg-neutral-300 hover:bg-sky-500 transition-color duration-200"></h1>
            <h1 className="h-[20rem] mt-52 mx-2 col-start-6 col-span-2 flex items-center rounded-md bg-neutral-300 hover:bg-sky-500 transition-color duration-200"></h1>
          </SectionInner>
        </SectionOuter>
      </main>
      <Footer />
    </>
  );
}

const Marq = () => (
  <div className="h-32 mt-20 col-start-2 col-end-8 flex size-full items-center justify-center bg-background">
    <Marquee>
      <MarqueeFade side="left" />
      <MarqueeFade side="right" />
      <MarqueeContent pauseOnHover={false}>
        {new Array(10).fill(null).map((_, index) => (
          <MarqueeItem className="h-32 w-32" key={index}>
            <div className="w-full h-full bg-neutral-300"></div>
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </Marquee>
  </div>
);
