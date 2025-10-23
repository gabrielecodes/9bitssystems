import Link from "next/link";
import { Instrument_Serif } from "next/font/google";
import { Plus } from "../components/plus";

const serif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

const projects = [
  {
    url: "https://github.com/gabrielecodes/airflow_rds_terraform",
    title: "Terraform Config: Airflow + Postgres RDS instance on AWS",
    subtitle: "Terraform AWS Infrastructure for Airflow with an RDS Postgres Instance"
  },
  {
    url: "https://github.com/gabrielecodes/aws_s3_cloudfront_deployment",
    title: "AWS S3 + Cloudfront Terraform Configuration for Static Site",
    subtitle: "Basic terraform config for a static site with certificate"
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full xl:h-fit xl:p-10 xl:flex xl:flex-col text-foreground selection:bg-blue-neon selection:text-background"
    >
      <h1
        className={`${serif.className} w-fit px-2 text-center inline-block transform bg-foreground text-background font-semibold`}
      >
        Projects
      </h1>

      <h2 className="xl:w-2/5 w-full xl:mt-40 mt-10 mb-10 xl:mx-auto ml-4">Some samples from projects I worked on</h2>
      <div className="xl:w-2/5 mt-10 mx-auto xl:flex xl:flex-row relative xl:border-t border-border">
        <Plus className="size-6 -left-3 -top-3 xl:block hidden" />
        <Plus className="size-6 left-[calc(100%-0.75rem)] -top-3 z-10 xl:block hidden" />

        <div className="px-4 w-full">
          {projects && projects.map((project) => <ProjectCard key={project.url} project={project} />)}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: any }) {
  return (
    <div className="w-full my-2 xl:px-8 xl:py-2 p-6 rounded-md relative group overflow-hidden xl:border-0 border border-border">
      <div className="absolute w-full h-full bg-foreground right-full top-0 rounded-md group-hover:right-0 transition-all duration-300 ease-in-out z-[-1]" />
      <Link href={project.url} rel="noopener noreferrer" target="_blank">
        <div className="py-4 flex flex-col justify-center">
          <h2 className="mb-2 leading-8 uppercase mix-blend-exclusion" style={{ fontWeight: 900, fontSize: "1.2rem" }}>
            {project["title"]}
          </h2>
          <p className="mix-blend-exclusion">{project["subtitle"]}</p>
        </div>
      </Link>
    </div>
  );
}