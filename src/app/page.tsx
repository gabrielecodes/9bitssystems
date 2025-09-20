import { Hero } from "./hero";
import { CustomMarquqee } from "./marquee";
import ContactForm from "./components/form";
import { Plus } from "./components/plus";
import Services from "./services";

export default function Home() {
  return (
    <main className="xl:mx-10 mx-2 select-none bg-[url('/bg3.jpg')] border-x border-border">
      <Hero />
      <CustomMarquqee />
      <Services />

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

      <div id="contact" className="h-20 xl:col-span-8"></div>
      <h2 className="w-fit px-2 text-center inline-block transform bg-foreground text-background font-semibold">
        Contact Me
      </h2>

      <div className="mt-20 xl:col-start-3 xl:col-span-4 gap-y-0 flex justify-center">
        <div className="w-1/2 bg-background border border-neutral-200 flex relative xl:overflow-visible overflow-x-clip">
          <Plus className="-left-5 -top-5" />
          <Plus className="left-[calc(100%-1.25rem)] -top-5" />
          <Plus className="-left-5 top-[calc(100%-1.25rem)]" />
          <Plus className="left-[calc(100%-1.25rem)] top-[calc(100%-1.25rem)]" />
          <div className="w-full p-10 flex items-start justify-center gap-x-10 bg-neutral-100">
            <div className="w-full h-full">
              <h2 className="mb-4">Tell me about your idea, there are no obligations.</h2>
              <p>
                I craft solutions that prioritize your goals, drawing on almost a decade of experience as a data
                engineering and analytics in the financial and service industries. I build systems that enable your
                teams to move faster — not lock them into complexity. Many businesses are dragged down by unreliable
                technology and broken processes &mdash; I help you untangle the complexity and build systems that
                actually work for you.
              </p>
            </div>
            <div className="w-full border border-border bg-background">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
