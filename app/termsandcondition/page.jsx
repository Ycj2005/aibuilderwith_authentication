"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "@/components/ui/tracing-beam";

const content = [
  {
    title: "Terms and conditions",
    description:
      "Terms and conditions are legally binding rules. If violated, consequences may include warnings, account suspension, service termination, fines, or legal action, depending on the agreement's policies.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://static.vecteezy.com/system/resources/thumbnails/050/514/014/small/hand-signing-digital-terms-and-conditions-document-on-laptop-screen-legal-agreement-contract-approval-business-technology-concept-online-policy-consent-photo.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Services Provided",
    description:
      "Our AI chatbot services, including text-based responses and assistance, are completely free to use. AI-powered image generation is available with a daily credit system: Free Plan: Users receive 5 free credits per day for image creation. Paid Plan: Users who subscribe to a paid plan receive 100 credits per day.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://files.oaiusercontent.com/file-DnDp4f66CiJUcrcELiuzzC?se=2025-03-11T09%3A22%3A41Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D9f2c9676-e283-4b2a-a85d-5f1e36d894b8.webp&sig=ylR0I0KkdGvPWbbHX/6GxabGbbuA9riH743E3Due3B8%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Data Privacy and Security",
    description:
      "We value your privacy and ensure that user data is stored securely. Personal data will not be shared or sold to third parties. We follow industry standards for data encryption and security.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://imageio.forbes.com/specials-images/imageserve/63d22a0b8c85bfb9504c5504/0x0.jpg?format=jpg&crop=2667,1500,x333,y0,safe&height=900&width=1600&fit=bounds"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Image Generation Restrictions",
    description:
      " Promote or depict harmful content, including violence, hate speech, or abuse. Violate or target religious beliefs, ideologies, or personal matters. Contain explicit, illegal, or offensive material.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://easydigitaldownloads.com/wp-content/uploads/edd/2015/07/content-restriction.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Termination of Service",
    description:
      "We reserve the right to suspend or terminate any account that violates these terms. Users found engaging in malicious activities may face legal actions if necessary.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
  {
    title: "Updates to Terms",
    description:
      "We may update these Terms and Conditions periodically. Continued use of NovaNeuron implies acceptance of any modified terms.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
export default function page() {
  return (
    <div className="">
      <StickyScroll content={content} />
    </div>
  );
}
