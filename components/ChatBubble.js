import Image from "next/image";
import React from "react";

export default function ChatBubble({ message, timestamp, profilePic, incoming }) {
  return (
    <div
      className={`flex ${incoming ? "justify-start" : "justify-end"} w-full`}>
      <div
        className={`flex ${
          incoming ? "flex-row mr-20" : "flex-row-reverse ml-20"
        } items-end`}>
        <Image
          alt=""
          src={profilePic}
          width={44}
          height={44}
          className="w-11 h-11 z-10 p-2 bg-[#f5f3f3] rounded-full"
        />
        <div className="relative bg-[#5A4DE6] w-fit px-1.5 py-1 rounded-md">
          <p className="text-sm">{message}</p>
          <p className="text-[10px] text-right mt-px ml-4">{timestamp}</p>
          <div
            className={`absolute ${
              incoming ? "-left-3" : "-right-3"
            } z-0 bottom-0 bg-[#5A4DE6] w-5 h-5`}></div>
        </div>
      </div>
    </div>
  );
}
