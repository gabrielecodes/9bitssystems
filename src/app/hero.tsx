import Link from "next/link";
import { cn } from "./utils";
import { serif } from "./layout";
import Plus from "./components/plus";

function Hero({ className }: { className?: string }) {
  return (
    <div className="col-start-3 col-span-4 flex flex-col justify-around">
      <div className="w-fit h-fit mx-auto xl:mt-32 mt-10 py-1 px-3 col-start-3 col-span-2 rounded-full bg-neutral-200 flex items-baseline gap-x-2">
        <span className="w-3 h-3 rounded-full bg-sky-500 animate-pulse"></span>
        <p>Consulting Services Within IT & Management</p>
      </div>
      <div
        className={cn(
          "w-full mt-10 py-10 flex flex-col items-center justify-center group border-y border-r border-neutral-200 relative bg-[url('/bg.jpg')]",
          className
        )}
      >
        <Plus className="-left-5 -top-5" />
        <Plus className="left-[calc(100%-1.25rem)] -top-5 z-10" />
        <Plus className="-left-5 top-[calc(100%-1.25rem)]" />
        <Plus className="left-[calc(100%-1.25rem)] top-[calc(100%-1.25rem)] z-10" />
        <h1 className="w-full mb-6 text-center leading-24 ">
          Scale <span className={`${serif.className}`}>Smarter</span>.
          <br />
          Build <span className={`${serif.className}`}>Faster</span>.
        </h1>
        <h3 className="w-[75%] text-center text-neutral-400">
          We help you build a solid technological foundation for your business &mdash; with reliable, secure and modern
          solutions
        </h3>
      </div>
      <div className="mt-10 xl:mt-20 w-1/2 flex xl:mx-auto xl:flex-row flex-col gap-y-4 col-start-4 col-span-2 gap-x-4 items-center justify-center">
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
    </div>
  );
}

export { Hero };
