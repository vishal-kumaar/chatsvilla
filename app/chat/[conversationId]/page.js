import React from "react";
import Chat from "@/components/Chat";
import ChatList from "@/components/ChatList";

export default function Converation() {
  return (
    <div className="flex w-full">
      <ChatList className="hidden md:block" />
      <Chat />
    </div>
  );
}
