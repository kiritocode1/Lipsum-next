"use client";
import dynamic from "next/dynamic";
import React, { useRef } from "react";
import { useScroll } from "framer-motion";
const Scene = dynamic(() => import("@/components/animation/Scene"), {
  ssr: false,
});

import localFont from "next/font/local";
import { FlipWords } from "@/components/ui/Definition";

const myFont = localFont({
  src: "./blackbird.otf",
  display: "swap",
});

export default function Home() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container.current,
    offset: ["start start", "end end"],
  });

  const words = ["modern", "AI-Powered", "Smart"];

  return (
    <main className="bg-[#223631]">
      <div ref={container.current} className="h-[300vh]">
        <div className="sticky top-0 flex h-screen items-center justify-center">
          <Scene scrollProgress={scrollYProgress} className={"z-0"} />
          <div
            className="absolute z-10 flex min-h-screen w-full justify-center text-2xl text-[#aee0a5] md:text-7xl"
            style={myFont.style}
          >
            <h1 className="w-full">We can handle the referance</h1>
            <h1 className="w-full text-end"> & You can handle the coffee. </h1>
          </div>
        </div>
      </div>
      <div className="h-screen text-[#aee0a5]" style={myFont.style}>
        <div className="w-full p-4 text-center text-5xl font-extrabold italic tracking-widest md:text-9xl">
          LIPSUM
        </div>
        <div className="p-8 text-center text-4xl">
          A
          <FlipWords words={words} />
          Helper for your papers , now search for hundreds of papers for most
          relevant referances .
        </div>
      </div>
    </main>
  );
}
