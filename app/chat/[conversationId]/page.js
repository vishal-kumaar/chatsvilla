"use client";

import React, { useContext } from "react";
import Chat from "@/components/Chat";
import ChatList from "@/components/ChatList";
import ChatListContext from "@/contexts/chatList/ChatListContext";

export default function Converation() {
  const { chatList } = useContext(ChatListContext);

  return (
    <div className="flex w-full">
      <ChatList className="hidden md:block" chatList={chatList} />
      <Chat />
    </div>
  );
}
