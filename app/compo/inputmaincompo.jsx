"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { IconUser } from "@tabler/icons-react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useState } from "react";

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "Powering Intelligence, Shaping the Future.",
    "Innovate with AI, Elevate with NovaNeuron.",
    "Smart AI, Smarter Solutions.",
    "Where Neural Precision Meets Infinite Possibilities.",
  ];

  const [text, setText] = useState("");
  const [isinputvalid, setIsinputvalid] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    // const res = await fetch("http://localhost:3000/api/openai", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     text,
    //   }),
    //   "Content-Type": "application/json",
    // });
    console.log("submitted : ");
    setIsinputvalid(true);
  };

  return (
    <div className="h-screen flex flex-col justify-evenly items-center px-4">
      <div>
        {isinputvalid ? (
          <ResponsetoAImessages />
        ) : (
          <>search anything do you want....</>
        )}
      </div>
      <div>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
}

export function ResponsetoAImessages(params) {
  const session = useSession();
  let name = session.data?.user?.name;
  return (
    <div className="responsivenesshandle">
      <div className="flex flex-col gap-1.5">
        <div className="flex flex-row item-center gap-2">
          <div>
            {/* <IconUser size={23} color="#fff"/> */}
            <Image
              className="rounded-3xl"
              src={
                "https://img.freepik.com/premium-photo/adorable-3d-style-character-children-generative-ai_739548-13632.jpg"
              }
              height={30}
              width={30}
              alt="useprofileimage"
            />
          </div>
          <div className="nameuser">{name} :</div>
        </div>
        <div className="userquestion">your question to AI/ your prompt</div>
      </div>
      <hr className="w-full border border-slate-400 my-2" />
      <div className="flex flex-col item-center gap-2">
        <div className="">
          <Image
            className="rounded-3xl"
            src={
              "https://img.freepik.com/premium-photo/robot-with-blue-eyes-is-standing-front-dark-building_483949-267.jpg"
            }
            height={30}
            width={30}
            alt="useprofileimage"
          />
        </div>
        <div className="botresponse">Ai bot response to you</div>
      </div>
    </div>
  );
}
