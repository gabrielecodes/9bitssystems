import Link from "next/link";
import { cn } from "./utils";
import { serif } from "./layout";

function Hero({ className }: { className?: string }) {
  return (
    <>
      <div className={cn("w-full h-fit mt-10 xl:mt-40 col-start-3 col-span-4 flex flex-col items-center justify-center group", className)}>
        <div className="h-fit mb-6 py-1 px-3 col-start-3 col-span-2 rounded-full bg-neutral-200 flex items-baseline gap-x-2">
          <span className="w-3 h-3 rounded-full bg-sky-500 animate-pulse"></span>
          <p>Consulting Services Within IT & Management</p>
        </div>
        <h1 className="mb-6 text-center leading-24 text-8xl font-black">Scale <span className={`${serif.className}`}>Smarter</span>.<br /> Grow <span className={`${serif.className}`}>Faster</span>.</h1>
        <h3 className="w-2/3 text-center text-neutral-400">
          Supporting your businesses with reliable data, cloud, and automation solutions.
        </h3>
      </div>
      <div className="mt-10 w-full flex flex-col gap-y-4 col-start-4 col-span-2 gap-x-4 xl:grid xl:grid-cols-2 items-center justify-center">
        <div className="w-42 xl:w-full h-10 py-1 col-start-1 col-span-1 text-2xl text-center bg-foreground hover:bg-sky-400 transition-color duration-100 -skew-x-12 overflow-clip group relative cursor-pointer">
          <span className="w-full h-10 left-0 top-1 group-hover:top-20 group-hover:text-background transition-all duration-100 inline-block skew-x-12 absolute text-background">
            <Link href="#services" className="w-full h-full">
              Our Services
            </Link>
          </span>
          <Link href="#services" className="w-full h-full">
            <span className="w-full h-10 left-0 -top-20 group-hover:top-1 group-hover:text-background transition-all duration-100 inline-block skew-x-12 absolute">
              <span className="text-foreground">See More</span>
            </span>
          </Link>
        </div>
        <div className="w-42 xl:w-full  h-10 py-1 col-start-2 col-span-1 text-2xl text-center bg-foreground hover:bg-sky-400 transition-color duration-100 -skew-x-12 overflow-clip group relative cursor-pointer">
          <span className="w-full h-10 left-0 top-1 group-hover:top-20 group-hover:text-background transition-all duration-100 inline-block skew-x-12 absolute">
            <Link href="#contact" className="w-full h-full text-sky-400">
              Get in Touch
            </Link>
          </span>
          <Link href="#contact" className="w-full h-full">
            <span className="w-full h-10 left-0 -top-20 group-hover:top-1 group-hover:text-background transition-all duration-100 inline-block skew-x-12 absolute">
              <span className="text-foreground">Let&apos;s Talk</span>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

export { Hero };
