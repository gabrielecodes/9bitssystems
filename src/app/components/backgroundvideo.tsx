"use client"
import { useState, useEffect, useRef } from "react";


export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldFadeOut, setShouldFadeOut] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isDesktop = useIsDesktop();

  useEffect(() => {
    if (isDesktop && videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn('Autoplay failed:', err);
      });
    }
  }, [isDesktop]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let rafId: number;

    const FADE_BEFORE_END = 1.0; // seconds before end to fade out
    const FADE_DURATION = 2000; // ms, match CSS transition

    const fadeLoop = () => {
      // Start playback and fade in
      video.currentTime = 0;
      video.play().catch(console.error);
      setIsVisible(true);

      const checkTime = () => {
        if (video.duration && video.currentTime >= video.duration - FADE_BEFORE_END) {
          setIsVisible(false); // start fade-out
          cancelAnimationFrame(rafId);
        } else {
          rafId = requestAnimationFrame(checkTime);
        }
      };
      // Start checking when to fade out
      rafId = requestAnimationFrame(checkTime);
    };

    // When video ends, restart it with fade in
    video.addEventListener('ended', () => {
      setTimeout(() => {
        fadeLoop(); // restart with fade-in
      }, FADE_DURATION); // small delay to ensure clean loop
    });

    // Start the initial loop
    fadeLoop();

    return () => {
      cancelAnimationFrame(rafId);
      video.removeEventListener('ended', fadeLoop);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={`absolute top-0 left-0 w-full h-full object-cover z-[-1] transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'
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

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [breakpoint]);

  return isDesktop;
}