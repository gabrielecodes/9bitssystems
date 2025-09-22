import { cn } from "./utils";

export default function Experience() {
  return (
    <section id="about" className="w-full">
      <div className="w-full h-20"></div>
      <h2 className="w-fit px-2 text-center inline-block transform bg-foreground text-background font-semibold">
        Experience
      </h2>

      <div className="w-full h-20"></div>
      <div className="xl:w-2/3 mx-auto xl:flex xl:justify-center hidden ">
        <LeftColumn />
        <RightColumn />
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
      <ul className="list-disc *:flex [&_p]:ml-2">
        <li>
          Work: <p>Proj. Management, LLM Powered Data Integration & Microservice Development.</p>
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
        <div className="w-4 h-4 top-3 -right-[calc(2rem+1px)] absolute rounded-full bg-background border border-foreground xl:block hidden" />
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
        <div className="w-4 h-4 top-3 -right-[calc(2rem+1px)] absolute rounded-full bg-background border border-foreground xl:block hidden" />
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

function LeftColumn() {
  return (
    <div id="left-column" className="xl:w-1/2 w-full xl:mx-0 mx-2 xl:border-r xl:border-border">
      <Experience2 className="float-right mr-6 w-fit h-50 mt-50" />
      <Experience4 className="float-right mr-6 w-fit h-50 mt-50 " />
    </div>
  );
}

function RightColumn() {
  return (
    <div id="right-column" className="xl:w-1/2 w-0 xl:border-l xl:border-border justify-end xl:visible invisible">
      <Experience1 className=" w-fit h-50 ml-6" />
      <Experience3 className=" w-fit h-50 mt-50 ml-6" />
      <Experience5 className=" w-fit h-50 mt-50 ml-6" />
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
