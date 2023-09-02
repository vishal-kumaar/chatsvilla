"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import ChatBubble from "./ChatBubble";

export default function Chat({chat}) {
  const pathname = usePathname();

  useEffect(
    () => {
      if (typeof window !== "undefined") {
        window.scrollBy(0, window.innerHeight);
      }
    },
    //eslint-disable-next-line
    []
  );

  if (pathname === "/") {
    return (
      <div className="w-full px-4 break-all font-xl font-poppins font-bold hidden md:flex md:justify-center md:items-center text-black dark:text-white">
        Open any chat to start conversation.
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen md:min-h-full flex flex-col justify-between">
      <ChatHeader chat={chat} />
      <div className="flex-grow flex flex-col justify-end gap-y-3 px-2.5 py-3 font-poppins font-medium text-white bg-[#DFDBDB] dark:bg-[#2B2B2B]">
        <ChatBubble
          id="chat1"
          message="Hi 👋"
          timestamp="11:58 PM"
          profilePic="/images/user.svg"
          incoming={false}
        />
        <ChatBubble
          id="chat2"
          message="Hello"
          timestamp="12:00 AM"
          profilePic="/images/user.svg"
          incoming={true}
        />
        <ChatBubble
          id="chat3"
          message="Hi John, How are you? I need you help. 😥"
          timestamp="12:00 AM"
          profilePic="/images/user.svg"
          incoming={true}
        />
      </div>
      <MessageInput />
    </div>
  );
}
