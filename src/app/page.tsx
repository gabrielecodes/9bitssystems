"use client";

import { Border } from "./components/border";
import { SectionInner } from "./components/sectioninner";
import { SectionOuter } from "./components/sectionouter";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { Nav } from "./nav";

import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from "./components/marquee";
import Image from "next/image";
import Link from "next/link";
import { BlackPixels } from "./components/blackpixels";

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
              <span className="px-4 inline-block transform -skew-x-12 bg-neutral-800 text-background shadow">
                <span className="font-semibold inline-block skew-x-12">Our Services</span>
              </span>
            </h2>
            {/* Service 1 */}
            <div className="h-[34rem] mt-20 p-6 col-start-2 col-span-2 border-y border-r border-neutral-200 bg-background">
              <h2 className="mb-10">Data Strategy</h2>
              <div className="mb-10 flex items-center gap-x-6">
                <div className="w-full h-52 p-4 flex items-center justify-center bg-foreground relative group ">
                  <div className="group-hover:bg-[url('/gradient1.png')] bg-[length:100%_100%] absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  <Image
                    className="size-24 z-10"
                    decoding="async"
                    loading="lazy"
                    width="96"
                    height="96"
                    sizes="48px"
                    src="https://framerusercontent.com/images/CBVjTh7pyGAj1FZ0ptr3Ph5IWYo.svg"
                    alt="Icon"
                  ></Image>
                </div>
              </div>
              <p className="backdrop-blur-lg">
                You&apos;ll gain a modern data infrastructure that supports your team decision making and extracts
                maximum value from your data—at speed and scale.
              </p>
              <p className="h-20 ml-2 col-start-2 col-span-6 flex items-center">
                <Link
                  href={"#"}
                  className="font-semibold border-b border-transparent hover:border-b hover:border-b-foreground"
                >
                  &#8627; Read More
                </Link>
              </p>
            </div>
            {/* Service 2 */}
            <div className="h-[34rem] mt-20 p-6 col-start-4 col-span-2 border-y border-r border-neutral-200 bg-background">
              <h2 className="mb-10">Cloud Infrastructure</h2>
              <div className="mb-10 flex items-center gap-x-6">
                <div className="w-full h-52 p-4 flex items-center justify-center bg-foreground relative group">
                  <div className="group-hover:bg-[url('/gradient2.png')] bg-[length:100%_100%] absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  <Image
                    className="size-24 z-10"
                    decoding="async"
                    loading="lazy"
                    width="96"
                    height="96"
                    sizes="48px"
                    src="https://framerusercontent.com/images/5bR7Rvf7TDMaFqBptkkXvZTHgs.svg"
                    alt="Icon"
                  ></Image>
                </div>
              </div>
              <p className="backdrop-blur-lg">
                We architect a solid foundation for your business, delivering a secure and scalable back-end and
                establishing seamless integration with your development workflows.
              </p>
              <p className="h-20 ml-2 col-start-2 col-span-6 flex items-center">
                <Link
                  href={"#"}
                  className="font-semibold border-b border-transparent hover:border-b hover:border-b-foreground"
                >
                  &#8627; Read More
                </Link>
              </p>
            </div>
            {/* Service 3*/}
            <div className="h-[34rem] mt-20 p-6 col-start-6 col-span-2 border-y border-r border-neutral-200 bg-background">
              <h2 className="mb-10">Software Development</h2>
              <div className="mb-10 flex items-center gap-x-6">
                <div className="w-full h-52 p-4 flex items-center justify-center bg-foreground relative group">
                  <div className="group-hover:bg-[url('/gradient3.png')] bg-[length:100%_100%] absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  <Image
                    className="size-24 z-10"
                    decoding="async"
                    loading="lazy"
                    width="96"
                    height="96"
                    sizes="48px"
                    src="https://framerusercontent.com/images/ZSjYh6efOX7SXRdKPn5JEqEQU4.svg"
                    alt="Icon"
                  ></Image>
                </div>
              </div>
              <p className="backdrop-blur-lg">
                Build your presence on the internet. Whether you&apos;re launching a new product or upgrading your tech
                stack, we deliver back-end solutions built for performance, security, and growth.
              </p>
              <p className="h-20 ml-2 col-start-2 col-span-6 flex items-center">
                <Link
                  href={"#"}
                  className="font-semibold border-b border-transparent hover:border-b hover:border-b-foreground"
                >
                  &#8627; Read More
                </Link>
              </p>
            </div>
            {/* */}
          </SectionInner>
        </SectionOuter>
        <Border />
        <SectionOuter>
          <SectionInner className="gap-x-0">
            <div className="h-20 col-span-8"></div>
            <h2 className="h-20 ml-2 col-start-2 col-span-6 flex items-center">
              <span className="px-4 inline-block transform -skew-x-12 bg-neutral-800 text-background shadow">
                <span className="font-semibold inline-block skew-x-12">Why us?</span>
              </span>
            </h2>
            <div className="h-20 col-span-8"></div>
            <h3 className="col-start-5 col-span-3 flex items-center text-justify">
              We deliver tailored technological solutions so you have control, visibility, and security. We build
              systems that enable your teams to move faster—not lock them into complexity.
            </h3>
            <div className="h-16 col-span-8"></div>
            <p className="col-start-3 col-span-2 flex items-start text-justify">
              Our goal is to help businesses automate and scale, delivering data strategies, solid cloud
              infrastructures, and reliable systems. From crafting data roadmaps to building secure environments, we
              turn chaotic data and systems into streamlined assets that drive productivity, reduce costs, and support
              10x business growth—minimizing complexity and risk.
            </p>
            <p className="col-start-6 col-span-2 flex items-start text-justify">
              We aim at delivering the best. That means proven technologies, clean architectures, and solutions tailored
              to your real-world challenges. We build with intention, so you stay in control. Whether it&apos;s gaining
              visibility across your data stack, scaling operations with confidence, or securing your cloud environment,
              our focus is on long-term impact.
            </p>
            <Marq />
            <div className="h-40 col-span-8"></div>
          </SectionInner>
        </SectionOuter>
      </main>
      <BlackPixels />
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
