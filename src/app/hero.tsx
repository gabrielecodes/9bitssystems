// import Link from "next/link";
import { serif } from "./layout";

function Hero() {
  return (
    <div className="h-screen xl:pt-40 flex flex-col bg-[url('/glass3.jpg')] bg-cover">
      <div className="w-fit h-fit mx-auto py-1 px-3 rounded-full bg-[#212121] flex items-baseline gap-x-2">
        <span className="w-3 h-3 rounded-full bg-sky-500 animate-pulse"></span>
        <p>Consulting Services Within IT & Management</p>
      </div>
      <div className="w-1/2 mt-10 mx-auto py-10 flex flex-col items-center justify-center group relative backdrop-blur-sm rounded-2xl bg-background/20">
        {/* <Plus className="-left-5 -top-5" />
        <Plus className="left-[calc(100%-1.25rem)] -top-5 z-10" />
        <Plus className="-left-5 top-[calc(100%-1.25rem)]" />
        <Plus className="left-[calc(100%-1.25rem)] top-[calc(100%-1.25rem)] z-10" /> */}
        <h1 className="w-fit mb-6 text-center leading-24">
          Scale{" "}
          <span className={`${serif.className} relative`}>
            <svg
              viewBox="0 0 55 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full block absolute z-0 bottom-0 left-0"
              stroke="#00a6f4"
              strokeWidth={2}
              fill="none"
            >
              <path d="M0 20 C12.5 18 37.5 16 50 20" />
            </svg>
            <span className="relative z-20">Smarter</span>
          </span>
          .
          <br />
          Build{" "}
          <span className={`${serif.className} relative`}>
            <svg
              viewBox="0 0 45 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full block absolute z-0 bottom-0 left-0"
              stroke="#00a6f4"
              strokeWidth={2}
              fill="none"
            >
              <path d="M0 20 C10 19 32 18 50 21" />
            </svg>
            <span className="relative z-20">Faster</span>
          </span>
          .
        </h1>
        <h3 className="xl:w-3/4 w-full text-center text-neutral-300">
          I help businesses build a solid technological foundation &mdash; with reliable, secure, and modern solutions.
        </h3>
      </div>
    </div>
  );
}

export { Hero };
