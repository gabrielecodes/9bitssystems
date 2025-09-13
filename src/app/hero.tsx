import { cn } from "./utils";

function Hero({ className }: { className?: string }) {
  return (
    <>
      <div className="w-full mt-48 col-start-3 col-span-4 flex flex-col items-center">
        <h1>Scale Smarter. Grow Faster.</h1>
        <h3 className="w-2/3 text-center text-neutral-400">
          <span className="px-1 text-black bg-sky-400 skew-6">10x</span> your business through data strategy, scalable
          cloud infrastructure, and reliable automation.
        </h3>
      </div>
      <div className="w-full"></div>
      <div className="w-full"></div>
    </>
  );
}

export { Hero };
