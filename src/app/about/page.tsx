import { cn } from "../utils";
import { Instrument_Serif } from "next/font/google";


const serif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

export default function Experience() {
  return (
    <section id="about" className="w-full xl:h-screen xl:p-10 px-2 xl:flex xl:flex-col text-foreground selection:bg-blue-neon selection:text-background">
      <h1 className={`${serif.className} my-20 w-fit px-2 text-center inline-block transform bg-foreground text-background font-semibold`} >
        About
      </h1>

      <div className="xl:w-full xl:h-20 xl:block hidden" />
      <div className="xl:w-full flex xl:flex-row flex-col gap-x-20">
        <div className="w-1/2 flex gap-x-2">
          <h3>Tools:</h3>
          <div className="h-fit flex flex-wrap gap-2">
            <Tool name="BigQuery" />
            <Tool name="Kubernetes" />
            <Tool name="Argo" />
            <Tool name="PostgreSQL" />
            <Tool name="SQL Server" />
            <Tool name="Redis" />
            <Tool name="Cloud Composer" />
            <Tool name="Cloud Functions" />
            <Tool name="Storage" />
            <Tool name="Cloud Run" />
            <Tool name="IAM" />
            <Tool name="Pub/Sub" />
            <Tool name="Docker" />
            <Tool name="Podman" />
            <Tool name="Airflow" />
            <Tool name="dbt" />
            <Tool name="EKS" />
            <Tool name="ECS" />
            <Tool name="EC2" />
            <Tool name="S3" />
            <Tool name="Cloud Logs" />
            <Tool name="CloudWatch" />
            <Tool name="Metabase" />
          </div>
        </div>
        <div className="w-1/2 flex gap-x-2">
          <h3>Languages:</h3>
          <div className="h-fit flex flex-wrap gap-2">
            <Tool name="Python" />
            <Tool name="SQL" />
            <Tool name="Typescript" />
            <Tool name="Rust" />
            <Tool name="Terraform" />
          </div>
        </div>
      </div>

      <div className="xl:w-full xl:h-1/2 mx-auto xl:flex hidden xl:flex-col items-end justify-end">
        <div>
          <div id="top-row" className="xl:w-full h-1/2 w-0 mb-4 grid grid-cols-6 justify-start items-end border-b border-border">
            <Experience5 className="col-start-1 w-[32rem] h-28 pl-6 border-l border-border" />
            <Experience3 className="col-start-3 w-[32rem] h-28 pl-6 border-l border-border" />
            <Experience1 className="col-start-5 w-[32rem] h-28 pl-6 border-l border-border" />
          </div>

          <div id="bottom-row" className="xl:w-full h-1/2 w-0 mb-4 grid grid-cols-6 justify-start items-top">
            <Experience4 className="col-start-2 w-[32rem] h-28 pl-6" />
            <Experience2 className="col-start-4 w-[32rem] h-28 pl-6" />
          </div>
        </div>
      </div>
      <div className="xl:hidden">
        <AllExperience />
      </div>
    </section>
  );
}

function Experience1({ className }: { className?: string }) {
  return (
    <div id="exp1" className={cn("xl:mb-0 mb-4", className)}>
      <h3 className="relative">
        <div className="w-4 h-4 top-3 -left-[calc(2rem+1px)] absolute rounded-full bg-background border border-foreground flex" />
        Automation Manager<p className="ml-4 inline-block">Apr 2024 - Present</p>
      </h3>
      <p>Proj. Management, LLM Powered Data Integration & Microservice Development.</p>
    </div>
  );
}

function Experience2({ className }: { className?: string }) {
  return (
    <div id="exp2" className={cn("xl:mb-0 mb-4 relative", className)}>
      <span className="col-start-1 h-8 w-[1px] bg-border absolute -left-[2px] -top-4"></span>
      <h3 className="relative">
        <div className="w-4 h-4 top-3 -left-[calc(2rem+1px)] absolute rounded-full bg-background border border-foreground xl:block hidden" />
        Senior Data Engineer<p className="ml-4 inline-block">Feb 2023 - Mar 2024</p>
      </h3>
      <p>Data Integration, Data Models</p>
    </div >
  );
}

function Experience3({ className }: { className?: string }) {
  return (
    <div id="exp3" className={cn("xl:mb-0 mb-4", className)}>
      <h3 className="relative">
        <div className="w-4 h-4 top-3 -left-[calc(2rem+1px)] absolute rounded-full bg-background border border-foreground xl:block hidden" />
        Senior Data Engineer & Analyst<p className="ml-4 inline-block">Jun 2020 - Jan 2023</p>
      </h3>
      <p>Data Integration & Data Products. Reporting & Dashboards. Apple Pay Feature Data Integration.</p>
    </div>
  );
}

function Experience4({ className }: { className?: string }) {
  return (
    <div id="exp4" className={cn("xl:mb-0 mb-4 relative", className)}>
      <span className="col-start-1 h-8 w-[1px] bg-border absolute -left-[2px] -top-4"></span>
      <h3 className="relative">
        <div className="w-4 h-4 top-3 -left-[calc(2rem+1px)] absolute rounded-full bg-background border border-foreground xl:block hidden" />
        Data Scientist<p className="ml-4 inline-block">Feb 2019 - Jun 2020</p>
      </h3>
      <p>
        Credit Risk Analysis, Statistical Models
      </p>
    </div>
  );
}

function Experience5({ className }: { className?: string }) {
  return (
    <div id="exp5" className={cn("xl:mb-0 mb-4", className)}>
      <h3 className="relative">
        <div className="w-4 h-4 top-3 -left-[calc(2rem+1px)] absolute rounded-full bg-background border border-foreground xl:block hidden" />
        Ph.D. Engineering<p className="ml-4 inline-block">2012 - 2017</p>
      </h3>
    </div>
  );
}


function AllExperience() {
  return (
    <div id="left-column" className="w-full mx-2 flex flex-col gap-y-4">
      <Experience1 />
      <Experience2 />
      <Experience3 />
      <Experience4 />
      <Experience5 />
    </div>
  );
}


function Tool({ name }: { name: string }) {
  return (
    <p className="h-10 px-2 py-1 rounded-md border border-border">{name}</p>
  )
}