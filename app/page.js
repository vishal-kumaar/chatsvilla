import Chat from "@/components/Chat";
import ChatList from "@/components/ChatList";
import React from "react";

export default function Home() {
  return (
    <div className="flex w-full">
      <ChatList />
      <Chat />
    </div>
  );
}
