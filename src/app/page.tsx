import { Hero } from "./hero";
import { CustomMarquqee } from "./marquee";
import ContactForm from "./components/form";
import { Plus } from "./components/plus";
import Services from "./services/page";
import Experience from "./experience";
import Contact from "./contact";


export default function Home() {
  return (
    <main className="xl:p-20 px-2 flex text-foreground h-screen">
      <Hero />
      {/* <CustomMarquqee />
      <Services />
      <Experience /> */}

      {/* <div className="h-fit"></div>
      <h2 className="w-fit px-2 text-center inline-block transform bg-foreground text-background font-semibold">
        How I Work
      </h2>
      <div className="h-20 xl:col-span-8"></div>
      <div className="h-full col-start-2 col-span-6 grid grid-cols-6 crossed-lines-gradient border-y border-neutral-200">
        <div className="my-8 p-8 col-start-2 col-span-4 bg-white border-y border-r border-neutral-200 shadow-lg">
          <h3 className="w-full xl:col-start-3 xl:col-span-3 flex items-start text-justify leading-8">
            I craft solutions that prioritize your goals, drawing on over a decade of experience as a data strategist
            across diverse industries, including fintech. I build systems that enable your teams to move faster — not
            lock them into complexity. Many businesses are dragged down by unreliable technology and broken processes
            &mdash; I help you untangle the complexity and build systems that actually work for you.
          </h3>
          <div className="h-16 col-span-8"></div>
          <div className="flex items-center gap-x-8">
            <p className="col-start-3 col-span-2 flex items-start text-justify">
              My goal is to support businesses in automating and growing with confidence. I work alongside you to create
              thoughtful data strategies, build reliable cloud infrastructures, and develop systems that just work.
            </p>
            <p className="mt-8 xl:mt-0 col-start-6 col-span-2 flex items-start text-justify">
              My approach begins with listening closely to your needs, ensuring every solution fits your real-world
              challenges. I combine proven technologies with thoughtful design, so you remain in control every step of
              the way.
            </p>
          </div>
        </div>
      </div> */}

      {/* <Contact /> */}
    </main>
  );
}
