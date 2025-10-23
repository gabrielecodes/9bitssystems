import Link from "next/link";
import { LinkedIn } from "../components/linkedin";
import { cn } from "../utils";
import { Instrument_Serif } from "next/font/google";

const serif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

export default function Experience() {
  return (
    <section
      id="about"
      className="xl:p-10 text-foreground xl:flex flex-col justify-end selection:bg-blue-neon selection:text-background"
    >
      <h1
        className={`${serif.className} w-fit px-2 text-center inline-block transform bg-foreground text-background font-semibold`}
      >
        About
      </h1>

      <div className="my-20 h-full xl:flex flex-col items-end">
        <div className="w-full xl:h-1/2 xl:block hidden"></div>
        <div className="xl:w-full xl:h-full gap-x-8 px-4 flex flex-col items-center">
          <h2 className="xl:w-2/5 w-full mb-10">Want to work with me? I specialize in Data Engineering and Cloud Architecture</h2>
          <p className="xl:w-2/5 w-full mb-10">These are some of the technologies I use</p>
          {/* */}
          <div className="xl:w-2/5 w-full select-none mb-8">
            <h3 className="mb-4">Cloud</h3>
            <div className="ml-4 mb-2 flex flex-wrap gap-x-2">
              <h4>AWS:</h4>
              <Tool name="EKS" />
              <Tool name="ECS" />
              <Tool name="EC2" />
              <Tool name="Networking" />
              <Tool name="S3" />
              <Tool name="IAM" />
              <Tool name="CloudWatch" />
            </div>
            <div className="ml-4 flex flex-wrap gap-x-2">
              <h4>GCP:</h4>
              <Tool name="BigQuery" />
              <Tool name="Composer" />
              <Tool name="Functions" />
              <Tool name="Storage" />
              <Tool name="Pub/Sub" />
              <Tool name="Run" />
              <Tool name="Logs" />
              <Tool name="IAM" />
            </div>
          </div>

          <div className="xl:w-2/5 w-full select-none mb-8">
            <h3 className="mb-4">Data Integration & Modeling</h3>
            <div className="h-fit flex flex-wrap gap-2">
              <div className="flex flex-wrap gap-x-2">
                <Tool name="dbt" />
                <Tool name="BigQuery" />
                <Tool name="SQL Server" />
                <Tool name="PostgreSQL" />
                <Tool name="Airflow" />
                <Tool name="Beam" />
                <Tool name="Spark" />
                <Tool name="Custom Pipelines (Kubernetes)" />
                <Tool name="Redis" />
                <Tool name="Batch Processes" />
                <Tool name="ETL/ELT" />
                <Tool name="Metabase" />
              </div>
            </div>
          </div>

          <div className="xl:w-2/5 w-full select-none mb-8">
            <h3 className="mb-4">DevOps</h3>
            <div className="h-fit flex flex-wrap gap-2">
              <div className="flex flex-wrap gap-x-2">
                <Tool name="Git" />
                <Tool name="GitHub Actions" />
                <Tool name="Kubernetes" />
                <Tool name="Argo" />
                <Tool name="Docker" />
                <Tool name="Podman" />
                <Tool name="Infrastructure-as-Code" />
              </div>
            </div>
          </div>

          <div className="xl:w-2/5 w-full select-none mb-8">
            <h3 className="mb-4">AI/ML Integrations</h3>
            <div className="h-fit flex flex-wrap gap-2">
              <Tool name="Gemini" />
              <Tool name="ChatGPT" />
              <Tool name="Claude" />
            </div>
          </div>

          <div className="xl:w-2/5 w-full select-none mb-8">
            <h3 className="mb-4">Programming & Tools</h3>
            <div className="h-fit flex flex-wrap gap-2">
              <Tool name="Python" />
              <Tool name="Flask" />
              <Tool name="FastAPI" />
              <Tool name="Slack" />
              <Tool name="SQL" />
              <Tool name="Terraform" />
              <Tool name="Bash & Scripting" />
              <Tool name="Typescript" />
              <Tool name="Rust" />
            </div>
          </div>

          <div className="xl:w-2/5 w-full select-none mb-8">
            <h3 className="mb-4">Other</h3>
            <div className="h-fit flex flex-wrap gap-2">
              <Tool name="Mentoring" />
              <Tool name="Agile" />
              <Tool name="Project Ownership" />
              <Tool name="Dashboard & Reporting" />
            </div>
          </div>
        </div>
        {/* */}

        <div className="xl:w-2/5 w-full xl:h-full gap-x-2 mx-auto flex items-center">
          <p className="w-fit">Find a summary of my CV here:</p>
          <Link href={"https://www.linkedin.com/in/gabriele-costanza/"} target="_blank">
            <LinkedIn />
          </Link>
        </div>


        {/* <div className="mt-40 mx-auto xl:flex hidden xl:flex-col items-end justify-end">
          <div id="top-row" className="xl:w-full w-0 grid grid-cols-7 justify-start items-end border-b border-border">
            <Experience5 className="col-start-1 w-[28rem] h-34 pl-10" />
            <Experience4 className="col-start-3 w-[28rem] h-34 pl-10" />
            <Experience2 className="col-start-5 w-[28rem] h-34 pl-10" />
          </div>

          <div id="bottom-row" className="xl:w-full h-1/2 w-0 mb-4 grid grid-cols-7 justify-start items-top">
            <Experience0 className="col-start-2 w-[28rem] h-34 pt-4 pl-10" />
            <Experience3 className="col-start-4 w-[28rem] h-34 pt-4 pl-10" />
            <Experience1 className="col-start-6 w-[28rem] h-34 pt-4 pl-10" />
          </div>
        </div> */}
      </div>

      {/* <div className="xl:hidden">
        <AllExperience />
      </div> */}
    </section>
  );
}

function Experience1({ className }: { className?: string }) {
  return (
    <div id="exp1" className={cn("xl:mb-0 mb-4 relative group overflow-hidden", className)}>
      <span className="h-12 w-[1px] bg-border absolute z-0 left-[15px] -top-4 xl:block hidden" />
      {/* <div className="xl:block hidden w-[26rem]l h-full absolute z-10 rounded-md left-10 -top-full group-hover:top-6 bg-background transition-all duration-300 ease-in-out">
        I became part of an awesome team in a sunny, warm corner of France—good vibes, great croissants, and LLM-powered
        data pipelines.
      </div> */}
      <h3 className="relative">
        <div className="w-4 h-4 top-3 -left-[calc(2rem+1px)] absolute rounded-full bg-background border border-foreground flex group-hover:bg-blue-neon group-hover:border-blue-neon transition-color duration-300 ease-in-out" />
        Automation Manager<p className="xl:ml-4 inline-block">Apr 2024 - Present</p>
      </h3>
      <p>Proj. Management, LLM Powered Data Integration & Microservice Development.</p>
    </div>
  );
}

function Experience2({ className }: { className?: string }) {
  return (
    <div id="exp2" className={cn("xl:mb-0 mb-4 relative group overflow-hidden", className)}>
      <span className="h-[105%] w-[1px] bg-border absolute z-0 left-[15px] top-6 xl:block hidden" />
      {/* <div className="w-[26rem] h-full absolute z-10 rounded-md left-10 -top-full group-hover:top-2 bg-background transition-all duration-300 ease-in-out">
        I had a great time providing guidance for our GCP architecture and keeping out Kubernetes cluster running all
        while being a regular at the many Friday bar initiatives.
      </div> */}
      <h3 className="relative">
        <div className="w-4 h-4 top-3 -left-[calc(2rem+1px)] absolute rounded-full bg-background border border-foreground flex group-hover:bg-blue-neon group-hover:border-blue-neon transition-color duration-300 ease-in-out" />
        Senior Data Engineer<p className="xl:ml-4 inline-block">Feb 2023 - Mar 2024</p>
      </h3>
      <p>Data Integration, Data Models</p>
    </div>
  );
}

function Experience3({ className }: { className?: string }) {
  return (
    <div id="exp3" className={cn("xl:mb-0 mb-4 relative group overflow-hidden", className)}>
      <span className="h-12 w-[1px] bg-border absolute z-0 left-[15px] -top-4 xl:block hidden" />
      {/* <div className="xl:block hidden w-[26rem] h-full absolute z-10 rounded-md left-10 -top-full group-hover:top-6 bg-background transition-all duration-300 ease-in-out">
        Working at a bubbling fintech startup, I doubled the dbt repository size, implemented models for the Apple Pay
        App feature and architected multiple Airflow DAGs as a data engineer.
      </div> */}
      <h3 className="relative">
        <div className="w-4 h-4 top-3 -left-[calc(2rem+1px)] absolute rounded-full bg-background border border-foreground flex group-hover:bg-blue-neon group-hover:border-blue-neon transition-color duration-300 ease-in-out" />
        Sr. Data Eng. & Analyst<p className="xl:ml-4 inline-block">Jun 2020 - Jan 2023</p>
      </h3>
      <p>Data Integration & Data Products. Reporting & Dashboards. Apple Pay Feature Data Integration.</p>
    </div>
  );
}

function Experience4({ className }: { className?: string }) {
  return (
    <div id="exp4" className={cn("xl:mb-0 mb-4 relative group overflow-hidden", className)}>
      <span className="h-[105%] w-[1px] bg-border absolute z-0 left-[15px] top-6 xl:block hidden" />
      {/* <div className="xl:block hidden w-[26rem] h-full absolute z-10 rounded-md left-10 -top-full group-hover:top-2 bg-background transition-all duration-300 ease-in-out">
        I continue to work with data and statistical models for a bank. Great learning experience.
      </div> */}
      <h3 className="relative">
        <div className="w-4 h-4 top-3 -left-[calc(2rem+1px)] absolute rounded-full bg-background border border-foreground flex group-hover:bg-blue-neon group-hover:border-blue-neon transition-color duration-300 ease-in-out" />
        Data Scientist<p className="ml-4 inline-block">Feb 2019 - May 2020</p>
      </h3>
      <p>Credit Risk Analysis, Statistical Models</p>
    </div>
  );
}

function Experience0({ className }: { className?: string }) {
  return (
    <div id="exp4" className={cn("xl:mb-0 mb-4 relative group overflow-hidden", className)}>
      <span className="h-12 w-[1px] bg-border absolute z-0 left-[15px] -top-6 xl:block hidden" />
      {/* <div className="xl:block hidden  w-[26rem] h-full absolute z-10 rounded-md left-10 -top-full group-hover:top-6 bg-background transition-all duration-300 ease-in-out">
        First assignment after completing my studies. I start out as aspiring data scientist working with Tensorflow and
        Torch.
      </div> */}
      <h3 className="relative">
        <div className="w-4 h-4 top-3 -left-[calc(2rem+1px)] absolute rounded-full bg-background border border-foreground xl:flex group-hover:bg-blue-neon group-hover:border-blue-neon transition-color duration-300 ease-in-out" />
        Data Scientist<p className="ml-4 inline-block">Oct 2017 - Jan 2019</p>
      </h3>
      <p>Data Scientist, ML models (Tensorflow, Torch)</p>
    </div>
  );
}

function Experience5({ className }: { className?: string }) {
  return (
    <div id="exp5" className={cn("xl:mb-0 mb-4 relative group overflow-hidden", className)}>
      <span className="h-[105%] w-[1px] bg-border absolute z-0 left-[15px] top-6 xl:block hidden" />
      {/* <div className="xl:block hidden w-[26rem]l h-full absolute z-10 rounded-md left-10 -top-full group-hover:top-2 bg-background transition-all duration-300 ease-in-out">
        Great times & friends. Ph.D. in Electromagnetic Field Theory.
      </div> */}
      <h3 className="relative">
        <div className="w-4 h-4 top-3 -left-[calc(2rem+1px)] absolute rounded-full bg-background border border-foreground flex group-hover:bg-blue-neon group-hover:border-blue-neon transition-color duration-300 ease-in-out" />
        Ph.D. Engineering<p className="ml-4 inline-block">2012 - 2017</p>
      </h3>
    </div>
  );
}

function AllExperience() {
  return (
    <div id="left-column" className="w-full px-4 flex flex-col gap-y-4 xl:border-0 border-t border-border">
      <h2 className="mt-4">Curriculum</h2>
      <Experience1 />
      <Experience2 />
      <Experience3 />
      <Experience4 />
      <Experience0 />
      <Experience5 />
    </div>
  );
}

function Tool({ name }: { name: string }) {
  return (
    <span className="h-10 px-2 py-1 rounded-md text-[#d4d4d4] border border-border select-none cursor-cursor">
      {name}
    </span>
  );
}
