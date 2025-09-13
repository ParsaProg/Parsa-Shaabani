"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis"; // or 'lenis' depending on what you installed

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const rafId = useRef<number | null>(null);
  const lenisRef = useRef<InstanceType<typeof Lenis> | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // create instance with valid options (no `smooth` property)
    lenisRef.current = new Lenis({
      // either use lerp for continuous smoothing:
      lerp: 0.08,           // between 0 and 1, smaller => more smoothing
      // or use duration + easing (duration is in seconds):
      // duration: 1.2,
      // easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,    // smooth wheel input (valid option)
      wheelMultiplier: 1,
      orientation: "vertical",
      // autoRaf: false // default behavior – we call raf manually below
    });

    const lenis = lenisRef.current;

    const loop = (time: number) => {
      lenis?.raf(time);
      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      lenis?.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
