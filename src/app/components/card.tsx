"use client";

import { useMotionTemplate, motion } from "motion/react";
import { cn } from "../utils";

export const ServiceCard = ({
  icon,
  background,
  randomString,
  className,
}: {
  icon: React.ReactNode;
  background?: string;
  randomString: string;
  className?: string;
}) => {
  return (
    <div className={cn("w-full bg-background aspect-square flex items-center justify-center relative", className)}>
      <div
        // onMouseMove={handleMouseMove}
        className="group/card w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full rounded-lg"
      >
        <CardPattern randomString={randomString} background={background} />
        <div className="relative z-10 flex items-center justify-center">
          <div className="relative flex items-center justify-center text-white font-bold text-4xl group-hover/container:scale-95 transition duration-150 ease-in-out">
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
};

export function CardPattern({ randomString, background }: { randomString: string; background?: string }) {
  const maskImage = useMotionTemplate`radial-gradient(250px at 50% 50%, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className={cn(
          "absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-0  group-hover/container:opacity-100 backdrop-blur-xl transition duration-150",
          background
        )}
        style={style}
      />
      <motion.div className="absolute inset-0 opacity-0 mix-blend-hard-overlay group-hover/container:opacity-100">
        <span className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white/30 font-mono font-bold transition duration-500">
          {randomString}
        </span>
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
