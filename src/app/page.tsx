import { Border } from "./components/border";
import { SectionInner } from "./components/sectioninner";
import { SectionOuter } from "./components/sectionouter";
import { Hero } from "./hero";
import { Squares } from "./components/squares";
import { Triangles } from "./components/triangles";
import { Star } from "./components/start";
import { CustomMarquqee } from "./marquee";
import { ReadMoreButton } from "./components/readmorebutton";
import ContactForm from "./components/form";
import { cn } from "./utils";

export default function Home() {
  return (
    <main className="select-none">
      <SectionOuter className="h-[50rem] border-t-0">
        <SectionInner>
          <Hero />
        </SectionInner>
      </SectionOuter>
      <Border />
      <SectionOuter className="mb-20 xl:mb-0">
        <SectionInner className="xl:h-fit gap-x-0">
          <div id="services" className="h-20 col-span-8"></div>
          <h2 className="h-20 ml-2 col-start-2 col-span-6">
            <span className="px-4 inline-block transform -skew-x-12 bg-neutral-800 text-background">
              <span className="font-semibold inline-block skew-x-12">Our Services</span>
            </span>
          </h2>
          {/* Service 1 */}
          <div className="max-w-4/5 xl:max-w-full xl:w-full xl:h-[34rem] h-[40rem] mt-20 p-6 col-start-2 col-span-2 border-y border-x xl:border-r xl:border-l-0 border-neutral-200 bg-background xl:flex xl:flex-col xl:justify-between">
            <div>
              <h2 className="mb-10">Data Strategy</h2>
              <div className="mb-10 flex items-center gap-x-6">
                <div className="w-full h-52 p-4 flex items-center justify-center bg-foreground relative group ">
                  <div className="bg-[url('/gradient1.png')] bg-[length:100%_100%] absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out"></div>
                  <Star />
                </div>
              </div>
            </div>
            <p>
              You&apos;ll gain a modern data infrastructure that supports your team decision making and extracts
              maximum value from your data—at speed and scale.
            </p>
            <ReadMoreButton />
          </div>
          {/* Service 2 */}
          <div className="max-w-4/5 xl:max-w-full xl:w-full xl:h-[34rem] h-[40rem] xl:mt-20 p-6 col-start-4 col-span-2 xl:border-y border-b border-x xl:border-r xl:border-l-0 border-neutral-200 bg-background xl:flex xl:flex-col xl:justify-between">
            <div>
              <h2 className="mb-10">Cloud Infrastructure</h2>
              <div className="mb-10 flex items-center gap-x-6">
                <div className="w-full h-52 p-4 flex items-center justify-center bg-foreground relative group">
                  <div className="bg-[url('/gradient2.png')] bg-[length:100%_100%] absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out"></div>
                  <Triangles />
                </div>
              </div>
            </div>
            <p>
              We architect a solid foundation for your business, delivering a secure and scalable back-end and
              establishing seamless integration with your workflows.
            </p>
            <ReadMoreButton />
          </div>
          {/* Service 3*/}
          <div className="max-w-4/5 xl:max-w-full xl:w-full xl:h-[34rem] h-[40rem] xl:mt-20 p-6 col-start-6 col-span-2 xl:border-y border-b border-x xl:border-r xl:border-l-0 border-neutral-200 bg-background xl:flex xl:flex-col xl:justify-between">
            <div>
              <h2 className="mb-10">Software Development</h2>
              <div className="mb-10 flex items-center gap-x-6">
                <div className="w-full h-52 p-4 flex items-center justify-center bg-foreground relative group">
                  <div className="bg-[url('/gradient3.png')] bg-[length:100%_100%] absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out"></div>
                  <Squares />
                </div>
              </div>
            </div>
            <p>
              Whether you&apos;re launching a new product or upgrading your tech
              stack, we deliver back-end solutions built for performance, security, and growth.
            </p>
            <ReadMoreButton />
          </div>
          {/* */}
        </SectionInner>
      </SectionOuter>
      <Border />
      <SectionOuter className="h-[46rem] xl:h-[44rem]">
        <SectionInner className="h-[46rem] xl:h-[44rem] gap-x-0">
          <div className="h-20 xl:col-span-8"></div>
          <h2 className="h-20 ml-2 col-start-2 col-span-6 flex items-center">
            <span className="px-4 inline-block transform -skew-x-12 bg-neutral-800 text-background">
              <span className="font-semibold inline-block skew-x-12">Why us?</span>
            </span>
          </h2>
          <div className="h-20 xl:col-span-8"></div>
          <h3 className="w-full xl:col-start-3 xl:col-span-3 flex items-start text-justify leading-8">
            We deliver tailored technological solutions so you have control, visibility, and security. We build
            systems that enable your teams to move faster—not lock them into complexity. Many businesses are dragged down by unreliable technology and broken processes &mdash; we help you untangle the complexity and build systems that actually work for you.
          </h3>
          <div className="h-16 col-span-8"></div>
          <p className="col-start-3 col-span-2 flex items-start text-justify">
            Our mission is to support businesses in automating and growing with confidence. We work alongside you to
            create thoughtful data strategies, build reliable cloud infrastructures, and develop systems that just
            work.
          </p>
          <p className="mt-8 xl:mt-0 col-start-6 col-span-2 flex items-start text-justify">
            Our approach begins with listening closely to your needs, ensuring every solution fits your real-world
            challenges. We combine proven technologies with thoughtful design, so you remain in control every step of
            the way.
          </p>
          <div className="h-0 xl:h-20 xl:col-span-8"></div>
          <CustomMarquqee />
          <div className="h-0 xl:h-40 xl:col-span-8"></div>
        </SectionInner>
      </SectionOuter>
      <Border />
      <SectionOuter className="h-[46rem] xl:h-[40rem]">
        <SectionInner className="gap-x-0 gap-y-0">
          <div id="contact" className="h-20 col-span-8"></div>

          <h2 className="h-20 ml-2 col-start-2 col-span-6 flex items-center">
            <span className="px-4 inline-block transform -skew-x-12 bg-neutral-800 text-background">
              <span className="font-semibold inline-block skew-x-12">Contact Us</span>
            </span>
          </h2>

          <div className="mt-20 xl:col-start-3 xl:col-span-4 gap-y-0">
            {/* <div className="invisible md:visible h-8 col-start-3 col-span-4 grid grid-cols-4 border-y border-neutral-200">
              <div className="w-full col-start-1 col-span-1 grid grid-cols-8 *:border-r *:border-neutral-200 *:last:border-r-0">
                {new Array(8).fill(null).map((_, index) => (
                  <div key={index} className="h-full"></div>
                ))}
              </div>
              <div className="w-full col-start-2 col-span-1 grid grid-cols-8 *:border-r *:border-neutral-200 *:last:border-r-0">
                {new Array(8).fill(null).map((_, index) => (
                  <div key={index} className="h-full"></div>
                ))}
              </div>
              <div className="w-full col-start-3 col-span-1 grid grid-cols-8 *:border-r *:border-neutral-200 *:last:border-r-0">
                {new Array(8).fill(null).map((_, index) => (
                  <div key={index} className="h-full"></div>
                ))}
              </div>
              <div className="w-full col-start-4 col-span-1 grid grid-cols-8 *:border-r *:border-neutral-200 *:last:border-r-0">
                {new Array(8).fill(null).map((_, index) => (
                  <div key={index} className="h-full"></div>
                ))}
              </div>
            </div> */}
            <div className="bg-background border-r border-y border-neutral-200 flex relative">

              <Plus className="-left-5 -top-5" />
              <Plus className="left-[calc(100%-1.25rem)] -top-5" />
              <Plus className="-left-5 top-[calc(100%-1.25rem)]" />
              <Plus className="left-[calc(100%-1.25rem)] top-[calc(100%-1.25rem)]" />

              <div className="p-10 flex items-center justify-center bg-neutral-100">
                <div className="w-full h-full">
                  <h2>Get in touch, there are no obligations.</h2>
                  <h3>Tell us about your idea.</h3>
                  <div className="w-full mt-8 border border-neutral-200 bg-background">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="invisible md:visible h-8 col-start-3 col-span-4 grid grid-cols-4 border-y border-neutral-200">
              <div className="w-full col-start-1 col-span-1 grid grid-cols-8 *:border-r *:border-neutral-200 *:last:border-r-0">
                {new Array(8).fill(null).map((_, index) => (
                  <div key={index} className="h-full"></div>
                ))}
              </div>
              <div className="w-full col-start-2 col-span-1 grid grid-cols-8 *:border-r *:border-neutral-200 *:last:border-r-0">
                {new Array(8).fill(null).map((_, index) => (
                  <div key={index} className="h-full"></div>
                ))}
              </div>
              <div className="w-full col-start-3 col-span-1 grid grid-cols-8 *:border-r *:border-neutral-200 *:last:border-r-0">
                {new Array(8).fill(null).map((_, index) => (
                  <div key={index} className="h-full"></div>
                ))}
              </div>
              <div className="w-full col-start-4 col-span-1 grid grid-cols-8 *:border-r *:border-neutral-200 *:last:border-r-0">
                {new Array(8).fill(null).map((_, index) => (
                  <div key={index} className="h-full"></div>
                ))}
              </div>
            </div> */}
          </div>
        </SectionInner>
      </SectionOuter>
    </main >
  );
}


function Plus({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#262626"
      className={cn("h-10 w-10 absolute", className)}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"></path></svg>
  )
}