"use client";

import React from "react";
import { usePathname } from "next/navigation";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";

export default function Chat() {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <div className="w-full font-xl font-poppins font-bold flex justify-center items-center text-black dark:text-white">
        Open any chat to start conversation.
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-screen overflow-y-auto custom-scrollbar">
      <ChatHeader />
      <div className="flex-grow"></div>
      <MessageInput />
    </div>
  );
}
