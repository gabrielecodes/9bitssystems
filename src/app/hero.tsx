import { cn } from "./utils";

function Hero({ className }: { className?: string }) {
  return (
    <>
      <div className={cn("w-full h-fit mt-40 col-start-3 col-span-4 flex flex-col items-center group", className)}>
        <h1 className="mb-6 text-center leading-24 text-8xl font-black">Scale Smarter. Grow Faster.</h1>
        <h3 className="w-2/3 text-center text-neutral-400">
          <span className="w-fit px-2 text-black inline-block transform -skew-x-12 bg-sky-400">
            <span className="inline-block transform skew-x-12">10x</span>
          </span>{" "}
          your business through data strategy, scalable cloud infrastructure, and reliable automation.
        </h3>
      </div>
      <div className="h-10 py-1 col-start-4 text-2xl text-center bg-foreground hover:bg-sky-400 transition-color duration-100 -skew-x-12 overflow-clip group relative cursor-pointer">
        <span className="w-full h-10 left-0 top-1 group-hover:top-20 group-hover:text-background transition-all duration-100 inline-block skew-x-12 absolute text-background">
          Our Services
        </span>
        <span className="w-full h-10 left-0 -top-20 group-hover:top-1 group-hover:text-background transition-all duration-100 inline-block skew-x-12 absolute">
          <span className="text-foreground">See More</span>
        </span>
      </div>
      <div className="h-10 py-1 col-start-5 text-2xl text-center bg-foreground hover:bg-sky-400 transition-color duration-100 -skew-x-12 overflow-clip group relative cursor-pointer">
        <span className="w-full h-10 left-0 top-1 group-hover:top-20 group-hover:text-background transition-all duration-100 inline-block skew-x-12 absolute text-background">
          Get in Touch
        </span>
        <span className="w-full h-10 left-0 -top-20 group-hover:top-1 group-hover:text-background transition-all duration-100 inline-block skew-x-12 absolute">
          <span className="text-foreground">Let&apos;s Talk</span>
        </span>
      </div>
    </>
  );
}

export { Hero };

function ArrowRightUp() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={32} fill="white" stroke="white">
      <path d="M13.0508 12.361L7.39395 18.0179L5.97974 16.6037L11.6366 10.9468L6.68684 5.99707H18.0006V17.3108L13.0508 12.361Z"></path>
    </svg>
  );
}
