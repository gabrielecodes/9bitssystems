import { Border } from "./components/border";
import { SectionInner } from "./components/sectioninner";
import { SectionOuter } from "./components/sectionouter";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { Nav } from "./nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="w-full min-h-screen select-none">
        <SectionOuter className="h-[40rem]">
          <SectionInner>
            <Hero />
          </SectionInner>
        </SectionOuter>
        <Border />
        <SectionOuter className="h-[28rem]">
          <SectionInner>
            <h1 className="col-start-3 col-span-3 flex items-center">What we Do &#8628;</h1>
            <p className="col-start-5 col-span-2 flex items-center">
              We help businesses automate and scale through data strategy, scalable cloud infrastructure, and reliable
              systems. From crafting data roadmaps to building growth-ready, secure environments, we turn chaotic data
              and systems into streamlined assets that drive productivity, reduce costs, and support 10x business
              growth—minimizing complexity and risk.
            </p>
          </SectionInner>
        </SectionOuter>
        <Border />
        <SectionOuter className="h-[40rem]">
          <SectionInner className="gap-x-0">
            <h1 className="h-[20rem] mt-20 mx-2 col-start-2 col-span-2 flex items-center rounded-md bg-neutral-300 hover:bg-sky-500"></h1>
            <h1 className="h-[20rem] mt-36 mx-2 col-start-4 col-span-2 flex items-center rounded-md bg-neutral-300 hover:bg-sky-500"></h1>
            <h1 className="h-[20rem] mt-52 mx-2 col-start-6 col-span-2 flex items-center rounded-md bg-neutral-300 hover:bg-sky-500"></h1>
          </SectionInner>
        </SectionOuter>
      </main>
      <Footer />
    </>
  );
}
