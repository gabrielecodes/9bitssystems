"use client";

import { useState, useEffect, useRef } from "react";
import { ReadMoreButton } from "./components/readmorebutton";
import { Plus } from "./components/plus";
import { Triangles } from "./components/triangles";
import { Star } from "./components/start";
import { Squares } from "./components/squares";
import { ServiceCard } from "./components/card";

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
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    console.log("Hovering");
    if (isHovering) {
      intervalRef.current = setInterval(() => {
        const str = generateRandomString(1500);
        setRandomString(str);
      }, 50);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovering]);

  return (
    <>
      <div id="services" className="h-20 col-span-8"></div>
      <h2 className="h-20 ml-2 col-start-2 col-span-6">
        <span className="px-4 inline-block transform -skew-x-12 bg-neutral-800 text-background">
          <span className="font-semibold inline-block skew-x-12">What I Do</span>
        </span>
      </h2>
      {/* Service 1*/}
      <div className="h-10 col-start-1 col-span-8"></div>
      <div className="h-full col-start-1 col-span-1 border-y border-neutral-200"></div>
      <div className="h-full p-8 col-start-2 col-span-6 bg-[url('/bg.jpg')] border border-l-0 border-neutral-200 flex gap-x-8 justify-between items-center relative">
        <Plus className="-left-5 -top-5" />
        <Plus className="left-[calc(100%-1.25rem)] -top-5 z-10" />
        <Plus className="-left-5 top-[calc(100%-1.25rem)]" />
        <Plus className="left-[calc(100%-1.25rem)] top-[calc(100%-1.25rem)] z-10" />

        <div
          className="max-w-4/5 xl:max-w-full xl:w-1/3 xl:h-full h-[40rem] xl:mt20 p-6 col-start-2 col-span-2 xl:border-y border-b border-x xl:border-x border-neutral-200 bg-background xl:flex xl:flex-col xl:justify-between relative group/container hover:-translate-y-1 hover:bg-white transition transform duration-200 ease-in-out shadow-lg hover:shadow-none"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <h2 className="mb-10">Data Strategy</h2>
          <ServiceCard
            background="bg-[url('/gradient1.png')] bg-[length:100%_100%]"
            className="mb-10"
            icon={<Star />}
            randomString={randomString}
          />
          <p className="mb-6">
            You&apos;ll gain a modern data infrastructure that supports your team decision making and extracts maximum
            value from your data—at speed and scale.
          </p>
          <ReadMoreButton />
        </div>
        {/* Service 2*/}
        <div
          className="max-w-4/5 xl:max-w-full xl:w-1/3 xl:h-full h-[40rem] xl:mt20 p-6 col-start-4 col-span-2 xl:border-y border-b border-x xl:border border-neutral-200 bg-background xl:flex xl:flex-col xl:justify-between relative group/container hover:-translate-y-1 hover:bg-white transition transform duration-200 ease-in-out shadow-lg hover:shadow-none"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <h2 className="mb-10">Cloud Infrastructure</h2>
          <ServiceCard
            background="bg-[url('/gradient2.png')] bg-[length:100%_100%]"
            className="mb-10"
            icon={<Triangles />}
            randomString={randomString}
          />
          <p className="mb-6">
            I architect a solid foundation for your business, delivering a secure and scalable back-end and
            establishing seamless integration with your workflows.
          </p>
          <ReadMoreButton />
        </div>
        {/* Service 3*/}
        <div
          className="max-w-4/5 xl:max-w-full xl:w-1/3 xl:h-full h-[40rem] xl:mt20 p-6 col-start-6 col-span-2 xl:border-y border-b border-x xl:border border-neutral-200 bg-background xl:flex xl:flex-col xl:justify-between relative group/container hover:-translate-y-1 hover:bg-white transition transform duration-200 ease-in-out shadow-lg hover:shadow-none"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <h2 className="mb-10">Software Development</h2>
          <ServiceCard
            background="bg-[url('/gradient3.png')] bg-[length:100%_100%]"
            className="mb-10"
            icon={<Squares />}
            randomString={randomString}
          />
          <p className="mb-6">
            Whether you&apos;re launching a new product or upgrading your tech stack, I deliver back-end solutions
            built for performance, security, and growth.
          </p>
          <ReadMoreButton />
        </div>
      </div>
      <div className="h-full w-full col-start-8 col-span-1 border-y border-neutral-200"></div>
      <div className="h-20 col-span-8"></div>
    </>
  );
}
