"use client";
import { useMotionValue, MotionValue } from "motion/react";
import React, { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "motion/react";
import { cn } from "../utils";

export const EvervaultCard = ({
  icon,
  background,
  className,
}: {
  icon: React.ReactNode;
  background?: string;
  className?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    const str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
    const currentTarget = event.currentTarget;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - left);
    mouseY.set(event.clientY - top);

    const str = generateRandomString(1500);
    setRandomString(str);
  }

  return (
    <div className={cn("w-full bg-foreground aspect-square flex items-center justify-center relative", className)}>
      <div
        onMouseMove={handleMouseMove}
        className="group/card w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full"
      >
        <CardPattern mouseX={mouseX} mouseY={mouseY} randomString={randomString} background={background} />
        <div className="relative z-10 flex items-center justify-center">
          <div className="relative h-44 w-44 flex items-center justify-center text-white font-bold text-4xl">
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
};

export function CardPattern({
  mouseX,
  mouseY,
  randomString,
  background,
}: {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  randomString: string;
  background?: string;
}) {
  const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className={cn(
          "absolute inset-0 opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-300",
          background
        )}
        style={style}
      />
      <motion.div className="absolute inset-0 opacity-0 mix-blend-overlay  group-hover/card:opacity-100" style={style}>
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-300">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
