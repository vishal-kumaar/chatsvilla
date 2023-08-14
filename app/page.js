import React from "react";
import Chat from "@/components/Chat";
import ChatList from "@/components/ChatList";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header className="bg-white dark:bg-[#161616] px-5" />
      <div className="flex w-full">
        <ChatList />
        <Chat />
      </div>
    </>
  );
}
