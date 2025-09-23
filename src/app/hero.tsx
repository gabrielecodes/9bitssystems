"use client";

import { useEffect, useRef } from "react";
import { Instrument_Serif } from "next/font/google";
import Image from "next/image";

export const serif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  // function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
  //   const { left, top } = e.currentTarget.getBoundingClientRect();
  //   mousePos.current = {
  //     x: e.clientX - left,
  //     y: e.clientY - top,
  //   };
  // }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const elem = imageRef.current;
  //     if (elem) {
  //       const baseLeft = 720;
  //       const dynamicLeft = baseLeft + mousePos.current.x * 0.1;

  //       const baseTop = 0;
  //       const dynamicTop = baseTop + mousePos.current.y * 0.1;

  //       elem.style.left = `${dynamicLeft}px`;
  //       elem.style.top = `${dynamicTop}px`;
  //     }
  //   }, 20);

  //   return () => clearInterval(interval); // cleanup on unmount
  // }, []);

  return (
    <div className="xl:h-[calc(100vh-4rem)] py-20 xl:py-0 flex items-center justify-center overflow-clip">
      {/* <div className="w-fit h-fit mx-auto py-1 px-3 rounded-full bg-[#212121] flex items-baseline gap-x-2">
        <span className="w-3 h-3 rounded-full bg-blue animate-pulse"></span>
        <p>Consulting Services Within IT & Data</p>
      </div> */}
      <div className="xl:w-1/2 xl:p-8 flex flex-col mx-auto items-center justify-center z-10">
        <h1 className="text-center leading-24">
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
          . Build{" "}
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
          I&apos;m a data engineer and architect. With nearly a decade of experience I help businesses build a reliable
          and modern technological foundation.
        </h3>
      </div>
      <div ref={imageRef} className="inset-0 -z-10">
        <Image src="/abstract2.jpg" alt="Abstract Art" fill className="xl:object-contain object-fit" />
      </div>
    </div>
  );
}

export { Hero };
