import { Border } from "./components/border";
import { SectionInner } from "./components/sectioninner";
import { SectionOuter } from "./components/sectionouter";
import { Hero } from "./hero";
import { CustomMarquqee } from "./marquee";
import ContactForm from "./components/form";
import { Plus } from "./components/plus";
import Services from "./services";

export default function Home() {
  return (
    <main className="select-none">
      <SectionOuter className="h-[50rem] border-t-0">
        <SectionInner>
          <Hero />
        </SectionInner>
      </SectionOuter>
      <Border />
      <SectionOuter className="mb-20 xl:mb-0 xl:h-[70rem]">
        <SectionInner className="xl:h-fit gap-x-0">
          <Services />
        </SectionInner>
      </SectionOuter>
      <Border />
      <SectionOuter>
        <SectionInner className="gap-x-0 xl:px-0 px-3">
          <div className="h-20 xl:col-span-8"></div>
          <h2 className="h-20 ml-2 col-start-2 col-span-6 flex items-center">
            <span className="px-4 inline-block transform -skew-x-12 bg-neutral-800 text-background">
              <span className="font-semibold inline-block skew-x-12">Why me?</span>
            </span>
          </h2>
          <div className="h-20 xl:col-span-8"></div>
          <div className="h-full col-start-2 col-span-6 grid grid-cols-6 crossed-lines-gradient border-y border-neutral-200">
            <div className="my-8 p-8 col-start-2 col-span-4 bg-white border-y border-r border-neutral-200 shadow-lg">
              <h3 className="w-full xl:col-start-3 xl:col-span-3 flex items-start text-justify leading-8">
                I craft solutions that prioritize your goals, drawing on over a decade of experience as a data strategist
                across diverse industries, including fintech.
                I build systems that enable your teams to move faster — not lock them into complexity. Many businesses are
                dragged down by unreliable technology and broken processes &mdash; I help you untangle the complexity and
                build systems that actually work for you.
              </h3>
              <div className="h-16 col-span-8"></div>
              <div className="flex items-center gap-x-8">
                <p className="col-start-3 col-span-2 flex items-start text-justify">
                  My goal is to support businesses in automating and growing with confidence. I work alongside you
                  to create thoughtful data strategies, build reliable cloud infrastructures, and develop systems that
                  just work.
                </p>
                <p className="mt-8 xl:mt-0 col-start-6 col-span-2 flex items-start text-justify">
                  My approach begins with listening closely to your needs, ensuring every solution fits your real-world
                  challenges. I combine proven technologies with thoughtful design, so you remain in control every step
                  of the way.
                </p>
              </div>
            </div>
          </div>
          <CustomMarquqee />
        </SectionInner>
      </SectionOuter>
      <Border />
      <SectionOuter>
        <SectionInner className="gap-x-0 gap-y-0">
          <div id="contact" className="h-20 col-span-8"></div>
          <h2 className="h-20 ml-2 col-start-2 col-span-6 flex items-center">
            <span className="px-4 inline-block transform -skew-x-12 bg-neutral-800 text-background">
              <span className="font-semibold inline-block skew-x-12">Contacts</span>
            </span>
          </h2>

          <div className="mt-20 xl:col-start-3 xl:col-span-4 gap-y-0">
            <div className="w-full bg-background border-r border-y border-neutral-200 flex relative xl:overflow-visible overflow-x-clip">
              <Plus className="-left-5 -top-5" />
              <Plus className="left-[calc(100%-1.25rem)] -top-5" />
              <Plus className="-left-5 top-[calc(100%-1.25rem)]" />
              <Plus className="left-[calc(100%-1.25rem)] top-[calc(100%-1.25rem)]" />
              <div className="w-full p-10 flex items-center justify-center bg-neutral-100">
                <div className="w-full h-full">
                  <h2>Get in touch, there are no obligations.</h2>
                  <h3>Tell us about your idea.</h3>
                  <div className="w-full mt-8 border border-neutral-200 bg-background">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionInner>
      </SectionOuter>
    </main>
  );
}
