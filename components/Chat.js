"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import ChatBubble from "./ChatBubble";
import formatDate from "@/utils/formatDate";

export default function Chat({ chat }) {
  const pathname = usePathname();
  const messages = chat?.messages;

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
      <div
        className="w-full px-4 break-all font-xl font-poppins font-bold hidden md:flex md:justify-center md:items-center text-black dark:text-white"
        id="chat">
        Open any chat to start conversation.
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen md:min-h-full flex flex-col justify-between">
      <ChatHeader chat={chat} />
      {messages?.length === 0 ? (
        <div
          className="w-full px-4 break-all font-xl font-poppins font-bold hidden md:flex md:justify-center md:items-center text-black dark:text-white"
          id="chat">
          History Cleared
        </div>
      ) : (
        <div className="flex-grow flex flex-col justify-end gap-y-3 px-2.5 py-3 font-poppins font-medium text-white bg-[#DFDBDB] dark:bg-[#2B2B2B]">
          {messages?.map((msgArr, index1) => (
            <div key={index1}>
              <h1 className="bg-gray-400 mx-auto w-fit font-firasans text-sm rounded-md px-1">{formatDate(msgArr[0])}</h1>
              {msgArr[1].map((message, index2) => (
                <ChatBubble
                  key={index2}
                  message={message}
                  incoming={chat?.userId !== message?.sender?._id}
                />
              ))}
            </div>
          ))}
        </div>
      )}
      <MessageInput />
    </div>
  );
}
