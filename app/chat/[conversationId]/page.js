"use client";

import React, { useContext, useEffect, useState } from "react";
import Chat from "@/components/Chat";
import ChatList from "@/components/ChatList";
import ChatListContext from "@/contexts/chatList/ChatListContext";
import { useParams } from "next/navigation";
import SessionTokenContext from "@/contexts/sessionToken/SessionTokenContext";
import getConversation from "@/apis/conversation/getConversation";

export default function Conversation() {
  const [chat, setChat] = useState(null);

  const { chatList } = useContext(ChatListContext);
  const { getSessionToken } = useContext(SessionTokenContext);

  const { conversationId } = useParams();

  const getChat = async () => {
    const res = await getConversation(conversationId, getSessionToken());
    if (res?.success) {
      setChat(res.conversation);
    }
  };

  useEffect(
    () => {
      getChat();
    },
    // eslint=disable-next-line
    []
  );

  return (
    <div className="flex w-full">
      <ChatList className="hidden md:block" chatList={chatList} />
      <Chat chat={chat} />
    </div>
  );
}
