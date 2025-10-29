/* eslint-disable react/jsx-key */

import Link from "next/link";
import { Instrument_Serif } from "next/font/google";
import { Plus } from "../components/plus";
import Aws from "../components/icons/aws";
import Terraform from "../components/icons/terraform";
import Clickhouse from "../components/icons/clickhouse";
import Metabase from "../components/icons/metabase";
import Ansible from "../components/icons/ansible";
import Airflow from "../components/icons/airflow";
import ArrowRight from "../components/icons/arrowright";
import Bash from "../components/icons/bash";
import Jinja from "../components/icons/jinja";
import Python from "../components/icons/python";

const serif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

const projects = [
  {
    url: "https://github.com/gabrielecodes/aws_tf_clickhouse",
    title: "A Highly available and fault-tolerant ClickHouse cluster with Metabase BI (WIP)",
    subtitle: "AWS Infrastructure for a multi-node Clickhouse Data Warehouse for BI",
    tags: [
      <Aws className="size-8" stroke="white" fill="white" />,
      <Terraform className="size-8" stroke="white" />,
      <Clickhouse className="size-8" stroke="white" fill="white" />,
      <Metabase className="size-8" stroke="white" fill="white" />,
      <Ansible className="size-9" stroke="white" fill="white" />,
      <Jinja className="size-9" stroke="black" fill="white" />,
      <Bash className="size-9" stroke="black" fill="white" />,
      <Python className="size-9" stroke="black" fill="white" />
    ]
  },
  {
    url: "https://github.com/gabrielecodes/airflow_rds_terraform",
    title: "Airflow Setup with a Postgres RDS instance on AWS",
    subtitle: "Terraform AWS Infrastructure for Airflow with an RDS Postgres Instance",
    tags: [
      <Aws className="size-8" stroke="white" fill="white" />,
      <Terraform className="size-8" stroke="white" />,
      <Airflow className="size-8" stroke="white" fill="white" />,
    ]
  },
  {
    url: "https://github.com/gabrielecodes/aws_s3_cloudfront_deployment",
    title: "AWS S3 With Cloudfront CDN: Terraform Configuration",
    subtitle: "Basic terraform config for a static site with certificate",
    tags: [
      <Aws className="size-8" stroke="white" fill="white" />,
      <Terraform className="size-8" stroke="white" />,
    ]
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
          {projects && projects.map((project, idx) => <ProjectCard key={idx} project={project} />)}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: any }) {
  return (
    <div className="w-full my-2 xl:px-8 xl:py-2 p-6 rounded-md relative group overflow-hidden xl:border-0 border border-border group">
      <div className="w-8 h-8 flex items-center justify-center text-background absolute left-full bottom-0 rounded-full bg-blue-neon transition-all duration-200 ease-in-out group-hover:left-[92%]">
        <Link href={project.url} rel="noopener noreferrer" target="_blank">
          <ArrowRight className="size-6 -rotate-45" />
        </Link>
      </div>
      {/* <div className="absolute w-full h-full bg-foreground right-full top-0 rounded-md group-hover:right-0 transition-all duration-300 ease-in-out z-[-1]" /> */}

      <div className="py-4 flex flex-col justify-center">
        <h2 className="mb-2 leading-8 mix-blend-exclusion" style={{ fontWeight: 900, fontSize: "1.2rem" }}>
          {project["title"]}
        </h2>
        {/* <p className="mix-blend-exclusion">{project["subtitle"]}</p> */}
      </div>

      <ul className="w-full flex flex-wrap gap-x-4">
        {project.tags && project.tags.map((tag: React.ReactNode, idx: number) => <li key={idx}>{tag}</li>)}
      </ul>
    </div >
  );
}