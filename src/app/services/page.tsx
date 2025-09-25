"use client";

import { useMotionTemplate, useMotionValue, motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { ReadMoreButton } from "../components/readmorebutton";
import { Plus } from "../components/plus";
import { Triangles } from "../components/triangles";
import { Star } from "../components/start";
import { Squares } from "../components/squares";
import { Instrument_Serif } from "next/font/google";

const serif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export default function Services() {
  const [randomString, setRandomString] = useState("");
  const [isHovering, setIsHovering] = useState<boolean>(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isHovering) {
      intervalRef.current = setInterval(() => {
        const str = generateRandomString(8000);
        setRandomString(str);
      }, 50);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovering]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section id="services" className="h-fit xl:p-10 px-2 text-foreground">
      <h1
        className={`${serif.className} my-20 w-fit px-2 text-center inline-block transform bg-foreground text-background font-semibold`}
      >
        Services
      </h1>

      <div className="w-fit mx-auto flex xl:flex-row flex-col items-center justify-between relative border border-border">
        <Plus className="size-6 -left-3 -top-3 z-100" />
        <Plus className="size-6 left-[calc(100%-0.75rem)] -top-3 z-100" />
        <Plus className="size-6 -left-3 top-[calc(100%-0.75rem)] z-100" />
        <Plus className="size-6 left-[calc(100%-0.75rem)] top-[calc(100%-0.75rem)] z-100" />

        <div
          onMouseMove={handleMouseMove}
          className="group/card w-full h-full relative bg-transparent flex xl:flex-row flex-col items-baseline justify-center overflow-clip"
        >
          <div className="pointer-events-none">
            <div className="absolute inset-0 [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-sky-500 opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
              style={style}
            />
            <motion.div
              className="absolute inset-0 opacity-0 mix-blend-overlay group-hover/card:opacity-100"
              style={style}
            >
              <span className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
                {randomString}
              </span>
            </motion.div>
          </div>

          <div className="h-full p-12 flex xl:flex-row flex-col xl:gap-x-4 gap-y-4 xl:gap-y-0 items-center">
            <div className="xl:w-96 w-full h-full xl:p-8 bg-background/75 relative z-20 group/container overflow-hidden">
              <Star className="mb-8 static flex mx-auto" />
              <h3 className="mb-6 font-black">
                DATA STRATEGY
              </h3>
              <p className="mb-4">
                You&apos;ll gain a modern data infrastructure that supports your team decision making and extracts
                maximum value from your data—at speed and scale.
              </p>
              <ReadMoreButton className="left-[80%] xl:left-[115%]" />
            </div>

            <div className="xl:w-96 w-full h-full xl:p-8 bg-background/75 relative z-20 group/container overflow-hidden">
              <Triangles className="mb-8 static flex mx-auto" />
              <h3 className="mb-6 font-black">
                CLOUD INFRASTRUCTURE
              </h3>
              <p className="mb-4">
                I architect a solid foundation for your business, with a secure and scalable back-end and establishing
                seamless integration with your workflows.
              </p>
              <ReadMoreButton className="left-[80%] xl:left-[115%]" />
            </div>

            <div className="xl:w-96 w-full xl:p-8 bg-background/75 relative z-20 group/container overflow-hidden">
              <Squares className="mb-8 static flex mx-auto" />
              <h3 className="mb-6 font-black">
                BACKEND SOFTWARE
              </h3>
              <p className="mb-4">
                Whether you&apos;re launching a new product or upgrading your tech stack, I deliver back-end solutions
                built for performance, security, and growth.
              </p>
              <ReadMoreButton className="left-[80%] xl:left-[115%]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
