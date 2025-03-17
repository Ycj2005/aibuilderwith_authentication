"use client";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { AnimatedModalDemo } from "./buttonmodal";

export function TypewriterEffectSmoothDemo() {
  const words = [
    // {
    //   text: "Bringing",
    // },
    // {
    //   text: "AI",
    // },
    // {
    //   text: "Conversations",
    // },
    // {
    //   text: "to Life",
    // },
    {
      text: "Bringing AI Conversations to Life ",
    },
    {
      text: " NovaNeuron ",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <AnimatedModalDemo />
      </div>
    </div>
  );
}
