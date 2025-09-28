"use client";
import { useState, useEffect, useRef } from "react";

const VIDEO_INITIAL_DELAY = 1500; // ms initial delay
const FADE_BEFORE_END = 1.0; // seconds before end to fade out
const FADE_DURATION = 2000; // ms, match CSS transition

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isDesktop = useIsDesktop();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!isDesktop) {
      video.pause();
      setIsVisible(false);
      return;
    }

    let rafId: number;

    const fadeLoop = () => {
      video.currentTime = 0;
      video.play().catch(console.error);
      setIsVisible(true);

      const checkTime = () => {
        if (video.duration && video.currentTime >= video.duration - FADE_BEFORE_END) {
          setIsVisible(false);
          cancelAnimationFrame(rafId);
        } else {
          rafId = requestAnimationFrame(checkTime);
        }
      };
      rafId = requestAnimationFrame(checkTime);
    };

    const handleEnded = () => {
      setTimeout(fadeLoop, FADE_DURATION);
    };

    video.addEventListener("ended", handleEnded);

    const startTimeout = setTimeout(fadeLoop, VIDEO_INITIAL_DELAY);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(startTimeout);
      video.removeEventListener("ended", handleEnded);
    };
  }, [isDesktop]);

  return (
    <video
      ref={videoRef}
      className={`absolute top-0 left-0 w-full h-full object-cover z-[-1] transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      muted
      playsInline
    >
      <source src="/videos/bg-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

function useIsDesktop(breakpoint = 1024) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${breakpoint}px)`);

    const handleChange = () => setIsDesktop(mediaQuery.matches);
    handleChange(); // Set initial value

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [breakpoint]);

  return isDesktop;
}
