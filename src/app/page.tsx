import { Hero } from "./hero";
import { CustomMarquqee } from "./marquee";
import ContactForm from "./components/form";
import { Plus } from "./components/plus";
import Services from "./services";

export default function Home() {
  return (
    <main className="xl:mx-10 mx-2 select-none border-x border-border text-foreground">
      <Hero />
      <div className="w-full h-20 border-t border-border"></div>
      <CustomMarquqee />
      <Services />

      <div id="experience" className="w-full h-20"></div>
      <h2 className="w-fit px-2 text-center inline-block transform bg-foreground text-background font-semibold">
        Experience
      </h2>

      <div className="w-full h-20"></div>
      <div className="w-full h-96 xl:flex xl:justify-center">
        <div className="w-1/3 border-r border-border">
          <div className="h-40 w-full" />
          {/* */}
          <div className="mr-6 w-fit float-right">
            <h3 className="relative">
              <div className="w-4 h-4 top-3 -right-[calc(2rem+1px)] absolute rounded-full bg-background border border-foreground flex" />
              Senior Data Engineer<p className="ml-4 inline-block">Feb 2023 - Apr 2024</p>
            </h3>
            <ul className="list-disc *:flex [&_p]:ml-2 text-right">
              <li>
                Work: <p>Data Engineering</p>
              </li>
              <li>
                Provider: <p>GCP, AWS</p>
              </li>
              <li>
                Tools: <p>Airflow, BigQuery, Kubernetes, dbt </p>
              </li>
              <li>
                Languages: <p>Python, SQL</p>
              </li>
            </ul>
          </div>
          {/* */}
        </div>

        <div className="w-1/3 border-l border-border">
          {/* */}
          <div className="h-40 ml-6">
            <h3 className="relative">
              <div className="w-4 h-4 top-3 -left-[calc(2rem+1px)] absolute rounded-full bg-background border border-foreground flex" />
              Automation Manager<p className="ml-4 inline-block">Apr 2024 - Present</p>
            </h3>
            <ul className="list-disc *:flex [&_p]:ml-2">
              <li>
                Work: <p>Data Engineering & Analytics</p>
              </li>
              <li>
                Provider: <p>GCP</p>
              </li>
              <li>
                Tools: <p>Gemini, DocumentAI, SQL Server, Docker, Terraform</p>
              </li>
              <li>
                Languages: <p>Python, SQL</p>
              </li>
            </ul>
          </div>
          {/* */}
        </div>
      </div>

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

      <div id="contact" className="h-20 border-t border-border"></div>
      <h2 className="w-fit px-2 text-center inline-block transform bg-foreground text-background font-semibold">
        Contact Me
      </h2>

      <div className="h-screen mt-20 pb-20 xl:col-start-3 xl:col-span-4 gap-y-0 flex">
        <div className="w-full bg-[url('/glass.jpg')] bg-[42%_-7%] bg-cover flex justify-center items-center border border-border relative">
          <Plus className="size-6 -left-3 -top-3" />
          <Plus className="size-6 left-[calc(100%-0.75rem)] -top-3 z-10" />
          <Plus className="size-6 -left-3 top-[calc(100%-0.75rem)]" />
          <Plus className="size-6 left-[calc(100%-0.75rem)] top-[calc(100%-0.75rem)] z-10" />

          <div className="w-2/3 h-fit flex relative xl:overflow-visible overflow-x-clip ">
            <div className="w-full h-fit p-12 m-auto flex xl:flex-row flex-col items-start justify-center gap-x-4 backdrop-blur-md rounded-2xl bg-background/75">
              <div className="w-full h-full">
                <h2 className="mb-6 leading-10">
                  Let&apos;s talk about your idea. <br />
                  There are no obligations.
                </h2>
                <p className="mb-4">
                  I craft solutions that prioritize your goals, drawing on almost a decade of experience as a data
                  engineering and analytics in the financial and service industries. I build systems that enable your
                  teams to move faster — not lock them into complexity. Many businesses are dragged down by unreliable
                  technology and broken processes &mdash; I help you untangle the complexity and build systems that
                  actually work for you.
                </p>
              </div>
              <div className="w-full">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
