"use client";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";
import React from "react";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get Started Your AI journey with NovaNueron
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.Ash
              is ready to capture every thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Instant Responses",
    title: "Fast, real-time AI interactions.",
    src: "https://files.oaiusercontent.com/file-FQqQZQbSpks3zo2DtKA4XF?se=2025-03-09T19%3A55%3A07Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D85bf55f9-b4d7-41b9-bbe6-bb1dcf75faf4.webp&sig=YLpDryVEVsu2yNDCCkHupx3deAZYbMEc7KwgVq6c2x0%3D",
    content: <DummyContent />,
  },
  {
    category: "24/7 Availability",
    title: "Always online, never offline.",
    src: "https://cdn.prod.website-files.com/63f902d79a33f7ff016cde0b/6537c6aa5b5365c8d4c91bc1_natural%20language.jpg",
    content: <DummyContent />,
  },
  {
    category: "Best Images",
    title: "Generate stunning images with NovaNeuron.",
    src: "https://img.freepik.com/premium-photo/adorable-3d-style-character-children-generative-ai_739548-13632.jpg",
    content: <DummyContent />,
  },
  {
    category: "Cost-Effective",
    title: "Reduces support team expenses.",
    src: "https://redresscompliance.com/wp-content/uploads/2024/05/Types-of-Cost-Effective-AI-Tools-1024x585.webp",
    content: <DummyContent />,
  },

  {
    category: "Smart Learning",
    title: "MapImproves through AI training.",
    src: "https://www.shaip.com/wp-content/uploads/2023/02/Blog_Selecting-the-Right-AI-Training-Data-is-Important.jpg",
    content: <DummyContent />,
  },
  {
    category: "User-Friendly",
    title: "Simple, intuitive, and efficient.",
    src: "https://miro.medium.com/v2/resize:fit:1024/1*JKug6lwi5bPyDBiSlv5ipg.png",
    content: <DummyContent />,
  },
  {
    category: "Scalable Solution",
    title: "Grows with business needs.",
    src: "https://ncube.com/wp-content/uploads/2024/06/AI-scalability.jpg",
    content: <DummyContent />,
  },
];
