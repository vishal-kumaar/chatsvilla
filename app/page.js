"use client";

import React, { useContext } from "react";
import Chat from "@/components/Chat";
import ChatList from "@/components/ChatList";
import Header from "@/components/Header";
import ChatListContext from "@/contexts/ChatList/ChatListContext";

export default function Home() {
  const { chatList } = useContext(ChatListContext);
  return (
    <>
      <Header className="bg-white dark:bg-[#161616] px-5" />
      <div className="flex w-full">
        <ChatList chatList={chatList} />
        <Chat />
      </div>
    </>
  );
}
