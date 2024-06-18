'use client'
import dynamic from "next/dynamic";
import React, { useRef } from 'react';
import { useScroll } from "framer-motion";
const Scene = dynamic(() => import('@/components/animation/Scene'), {
  ssr: false,
})

import localFont from 'next/font/local'
import { FlipWords } from "@/components/ui/Definition";

const myFont = localFont({
  src: './blackbird.otf',
  display: 'swap',
})
 

export default function Home() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container.current,
    offset: ['start start', 'end end']
  });

  const words = ["modern", "AI-Powered", "Smart"];


  return (
    <main className="bg-[#223631] ">
      <div ref={container.current} className="h-[300vh] ">
        <div className="sticky top-0 h-screen flex items-center justify-center">

          <Scene scrollProgress={scrollYProgress} className={"z-0"}/>
          <div className="text-[#aee0a5] z-10 absolute md:text-7xl text-2xl  min-h-screen flex  justify-center   w-full   " style={myFont.style}>
            <h1 className="w-full ">We can handle the referance</h1>
          <h1 className="w-full text-end"> & You can handle the coffee. </h1>
          </div>
            
        </div>
      </div>
      <div className="h-screen text-[#aee0a5]" style={myFont.style}>
        <div className="md:text-9xl  text-5xl w-full  italic font-extrabold  p-4 text-center tracking-widest	" >
           LIPSUM 
        </div>
        <div className="text-4xl p-8 text-center">
        A
        <FlipWords words={words} />
        Helper for your papers , now search for  hundreds of papers for most relevant referances .</div>
      </div>
    </main>
  );
}