import React, { useContext, useEffect, useState } from "react";
import ChatListContext from "./ChatListContext";
import SessionTokenContext from "../sessionToken/SessionTokenContext";
import getAllConversation from "@/apis/conversation/getAllConversation";

export default function ChatListProvider({ children }) {
  const [chatList, setChatList] = useState(null);
  const { getSessionToken } = useContext(SessionTokenContext);
  const getChatList = async () => {
    const res = await getAllConversation(getSessionToken());
    if (res.success) {
      setChatList(res.conversations);
    }
  };

  useEffect(
    () => {
      getChatList();
    },
    // eslint-disable-next-line
    []
  );
  return (
    <ChatListContext.Provider value={{ chatList }}>
      {children}
    </ChatListContext.Provider>
  );
}
