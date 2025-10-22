"use client";
import { useState, useEffect, useRef } from "react";

const VIDEO_INITIAL_DELAY = 2000;
const FADE_BEFORE_END = 1.0;
const FADE_DURATION = 2000;
const BUFFER_THRESHOLD = 5;

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
    let bufferCheckTimeout: any;

    const checkTime = () => {
      if (video.duration && video.currentTime >= video.duration - FADE_BEFORE_END) {
        setIsVisible(false);
      }
      rafId = requestAnimationFrame(checkTime);
    };

    const restartVideo = () => {
      video.currentTime = 0;
      video.play().catch(console.error);
      setIsVisible(true);
    };

    const handleEnded = () => {
      setTimeout(restartVideo, FADE_DURATION);
    };

    const checkBuffer = () => {
      const buffered = video.buffered;
      if (buffered.length > 0) {
        const bufferedEnd = buffered.end(buffered.length - 1);
        if (bufferedEnd >= BUFFER_THRESHOLD) {
          video.play().catch(console.error);
          setIsVisible(true);
          rafId = requestAnimationFrame(checkTime);
        } else {
          bufferCheckTimeout = setTimeout(checkBuffer, 500);
        }
      } else {
        bufferCheckTimeout = setTimeout(checkBuffer, 500);
      }
    };

    video.addEventListener("ended", handleEnded);

    // After an initial delay, start checking the buffer.
    const startTimeout = setTimeout(checkBuffer, VIDEO_INITIAL_DELAY);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(bufferCheckTimeout);
      clearTimeout(startTimeout);
      video.removeEventListener("ended", handleEnded);
    };
  }, [isDesktop]);

  return (
    <video
      ref={videoRef}
      className={`absolute top-0 left-0 w-full h-full object-cover z-[-1] transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"
        }`}
      muted
      playsInline
      preload="auto"
    >
      <source src="/videos/video.webm" type="video/webm" />
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
