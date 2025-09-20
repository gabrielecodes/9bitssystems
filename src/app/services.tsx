"use client";

import { useMotionTemplate, useMotionValue, motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { ReadMoreButton } from "./components/readmorebutton";
import { Plus } from "./components/plus";
import { Triangles } from "./components/triangles";
import { Star } from "./components/start";
import { Squares } from "./components/squares";

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
        const str = generateRandomString(11000);
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
    <>
      <div id="services" className="h-20"></div>

      <h2 className="w-fit px-2 text-center inline-block transform bg-foreground text-background font-semibold">
        Services
      </h2>

      <div className="h-10"></div>
      {/* Service 1*/}
      <div className="h-[80vh] flex xl:flex-row flex-col items-baseline xl:gap-x-8 justify-between border-y border-border relative">
        <Plus className="size-6 -left-3 -top-3" />
        <Plus className="size-6 left-[calc(100%-0.75rem)] -top-3 z-10" />
        <Plus className="size-6 -left-3 top-[calc(100%-0.75rem)]" />
        <Plus className="size-6 left-[calc(100%-0.75rem)] top-[calc(100%-0.75rem)] z-10" />

        <div
          onMouseMove={handleMouseMove}
          className="group/card w-full h-full relative overflow-hidden bg-transparent flex xl:flex-row flex-col items-baseline justify-center"
        >
          <div className="pointer-events-none">
            <div className="absolute inset-0 [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-700 opacity-0  group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
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
          <div className="h-full flex xl:flex-row flex-col xl:gap-x-4 items-center">
            {/* */}

            <div className="xl:w-96 w-full rounded-xl p-8 bg-background/75 border border-border relative z-20 group/container overflow-clip">
              <Star className="mb-8 static flex mx-auto" />
              <h2 className="mb-6 uppercase" style={{ fontSize: "1em", fontWeight: "900" }}>
                Data Strategy
              </h2>
              <p className="">
                You&apos;ll gain a modern data infrastructure that supports your team decision making and extracts
                maximum value from your data—at speed and scale.
              </p>
              <ReadMoreButton />
            </div>

            <div className="xl:w-96 w-full rounded-xl p-8 bg-background/75 border border-border relative z-20 group/container overflow-clip">
              <Triangles className="mb-8 static flex mx-auto" />
              <h2 className="mb-6 uppercase" style={{ fontSize: "1em", fontWeight: "900" }}>
                Cloud Infrastructure
              </h2>
              <p className="">
                I architect a solid foundation for your business, delivering a secure and scalable back-end and
                establishing seamless integration with your workflows.
              </p>
              <ReadMoreButton />
            </div>

            <div className="xl:w-96 w-full rounded-xl p-8 bg-background/75 border border-border relative z-20 group/container overflow-clip">
              <Squares className="mb-8 static flex mx-auto" />
              <h2 className="mb-6 uppercase" style={{ fontSize: "1em", fontWeight: "900" }}>
                Software Development
              </h2>
              <p className="">
                Whether you&apos;re launching a new product or upgrading your tech stack, I deliver back-end solutions
                built for performance, security, and growth.
              </p>
              <ReadMoreButton />
            </div>
          </div>
          {/* */}
        </div>
      </div>
      <div className="h-full w-full col-start-8 col-span-1"></div>
      <div className="h-20"></div>
    </>
  );
}
