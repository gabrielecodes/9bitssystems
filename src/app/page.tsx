import { Border } from "./components/border";
import { SectionInner } from "./components/sectioninner";
import { SectionOuter } from "./components/sectionouter";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { Nav } from "./nav";
import { BlackPixels } from "./components/blackpixels";
import { Squares } from "./components/squares";
import { Triangles } from "./components/triangles";
import { Star } from "./components/start";
import { CustomMarquqee } from "./marquee";
import Link from "next/link";

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
            <div id="services" className="h-20 col-span-8"></div>
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
                  <div className="bg-[url('/gradient1.png')] bg-[length:100%_100%] absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out"></div>
                  <Star />
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
                  <div className="bg-[url('/gradient2.png')] bg-[length:100%_100%] absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out"></div>
                  <Triangles />
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
                  <div className="bg-[url('/gradient3.png')] bg-[length:100%_100%] absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out"></div>
                  <Squares />
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
            <h3 className="col-start-5 col-span-3 flex items-center text-justify leading-8">
              We deliver tailored technological solutions so you have control, visibility, and security. We build
              systems that enable your teams to move faster—not lock them into complexity.
            </h3>
            <div className="h-16 col-span-8"></div>
            <p className="col-start-3 col-span-2 flex items-start text-justify">
              Our mission is to support businesses in automating and growing with confidence. We work alongside you to
              create thoughtful data strategies, build reliable cloud infrastructures, and develop systems that just
              work.
            </p>
            <p className="col-start-6 col-span-2 flex items-start text-justify">
              Our approach begins with listening closely to your needs, ensuring every solution fits your real-world
              challenges. We combine proven technologies with thoughtful design, so you remain in control every step of
              the way.
            </p>
            <CustomMarquqee />
            <div className="h-40 col-span-8"></div>
          </SectionInner>
        </SectionOuter>
      </main>
      <BlackPixels />
      <Footer />
    </>
  );
}
