import { cn } from "../utils";
import { Instrument_Serif } from "next/font/google";


const serif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

export default function Experience() {
  return (
    <section id="about" className="xl:p-20 px-2 text-foreground">
      <h1 className={`${serif.className} my-20 w-fit px-2 text-center inline-block transform bg-foreground text-background font-semibold`} >
        Experience
      </h1>

      <div className="w-full h-20" />
      <div className="xl:w-full mx-auto xl:flex xl:flex-col hidden">
        <TopColumn />
        <div className="h-20 w-full" />
        <BottomColumn />
      </div>
      <div className="xl:hidden">
        <AllExperience />
      </div>
    </section>
  );
}

function TopColumn() {
  return (
    <div id="bottom-column" className="xl:w-full w-0 flex gap-x-4 justify-start items-center border-b border-border">
      <Experience1 className="w-[32rem] h-50 pl-6 border-l border-border" />
      <Experience3 className="w-[32rem] h-50 pl-6 border-l border-border" />
      <Experience5 className="w-[32rem] h-50 pl-6 border-l border-border" />
    </div>
  );
}

function BottomColumn() {
  return (
    <div id="top-column" className="xl:w-full xl:h-fit xl:mx-0 mx-2 flex gap-x-4">
      <div className="w-[32rem] h-50" />
      <Experience2 className="w-[32rem] h-50 pl-6" />
      <Experience4 className="w-[32rem] h-50 pl-6" />
    </div>
  );
}

function Experience1({ className }: { className?: string }) {
  return (
    <div id="exp1" className={cn("xl:mb-0 mb-4", className)}>
      <h3 className="relative">
        <div className="w-4 h-4 top-3 -left-[calc(2rem+1px)] absolute rounded-full bg-background border border-foreground flex" />
        Automation Manager<p className="ml-4 inline-block">Apr 2024 - Present</p>
      </h3>
      <ul className="list-disc *:flex [&_p]:ml-2">
        <li>
          Work <p>Proj. Management, LLM Powered Data Integration & Microservice Development.</p>
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
  );
}

function Experience2({ className }: { className?: string }) {
  return (
    <div id="exp2" className={cn("xl:mb-0 mb-4", className)}>
      <h3 className="relative">
        <div className="w-4 h-4 top-3 -left-[calc(2rem+1px)] absolute rounded-full bg-background border border-foreground xl:block hidden" />
        Senior Data Engineer<p className="ml-4 inline-block">Feb 2023 - Mar 2024</p>
      </h3>
      <ul className="list-disc *:flex [&_p]:ml-2 text-right">
        <li>
          Work: <p>Data Integration, Data Models</p>
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
  );
}

function Experience3({ className }: { className?: string }) {
  return (
    <div id="exp3" className={cn("xl:mb-0 mb-4", className)}>
      <h3 className="relative">
        <div className="w-4 h-4 top-3 -left-[calc(2rem+1px)] absolute rounded-full bg-background border border-foreground xl:block hidden" />
        Senior Data Engineer & Analyst<p className="ml-4 inline-block">Jun 2020 - Feb 2023</p>
      </h3>
      <ul className="list-disc *:flex [&_p]:ml-2">
        <li>
          Work: <p>Data Integration & Data Products. Reporting & Dashboards. Apple Pay Integration.</p>
        </li>
        <li>
          Provider: <p>GCP, AWS</p>
        </li>
        <li>
          Tools: <p>Airflow, BigQuery, Docker</p>
        </li>
        <li>
          Languages: <p>Python, SQL</p>
        </li>
      </ul>
    </div>
  );
}

function Experience4({ className }: { className?: string }) {
  return (
    <div id="exp4" className={cn("xl:mb-0 mb-4", className)}>
      <h3 className="relative">
        <div className="w-4 h-4 top-3 -left-[calc(2rem+1px)] absolute rounded-full bg-background border border-foreground xl:block hidden" />
        Data Scientist<p className="ml-4 inline-block">Feb 2019 - Jun 2020</p>
      </h3>
      <ul className="list-disc *:flex [&_p]:ml-2">
        <li>
          Work: <p>Credit Risk Analysis, Statistical Models</p>
        </li>
        <li>
          Tools: <p>SAS</p>
        </li>
        <li>
          Languages: <p>Python, SQL</p>
        </li>
      </ul>
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
