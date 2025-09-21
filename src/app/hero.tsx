// import Link from "next/link";
import { serif } from "./layout";
import Image from "next/image";

function Hero() {
  return (
    <div className="xl:h-[calc(100vh-4rem)] xl:pt-40 flex flex-col relative">
      <div className="absolute inset-0 -z-10">
        <Image src="/pyramid.jpg" alt="Pyramid" fill style={{ objectFit: "cover", objectPosition: "center" }} />
      </div>
      <div className="w-fit h-fit mx-auto py-1 px-3 rounded-full bg-[#212121] flex items-baseline gap-x-2">
        <span className="w-3 h-3 rounded-full bg-blue animate-pulse"></span>
        <p>Consulting Services Within IT & Data</p>
      </div>
      <div className="xl:w-1/2 mt-10 py-10 flex flex-col mx-auto items-center justify-center group relative rounded-2xl xl:backdrop-blur-xl xl:border border-neutral-800">
        <h1 className="w-fit mb-6 text-center leading-24">
          Scale{" "}
          <span className={`${serif.className} relative`}>
            {/* <svg
              viewBox="0 0 55 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full block absolute z-0 bottom-0 left-0"
              stroke="#4f39f6"
              strokeWidth={2}
              fill="none"
            >
              <path d="M0 20 C12.5 18 37.5 16 50 20" />
            </svg> */}
            <span className="relative z-20">Smarter</span>
          </span>
          .
          <br />
          Build{" "}
          <span className={`${serif.className} relative`}>
            {/* <svg
              viewBox="0 0 45 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full block absolute z-0 bottom-0 left-0"
              stroke="#155dfc"
              strokeWidth={2}
              fill="none"
            >
              <path d="M0 20 C10 19 32 18 50 21" />
            </svg> */}
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
