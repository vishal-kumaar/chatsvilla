"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import sendMessage from "@/apis/conversation/sendMessage";
import SessionTokenContext from "@/contexts/sessionToken/SessionTokenContext";
import { toast } from "react-hot-toast";
import ThemeContext from "@/contexts/theme/ThemeContext";

export default function MessageInput() {
  const [data, setData] = useState({
    message: "",
    messageType: "text",
  });
  const { conversationId } = useParams();
  const { getSessionToken } = useContext(SessionTokenContext);
  const { isDark } = useContext(ThemeContext);

  const handleMessageSend = async (event) => {
    event.preventDefault();

    const res = await sendMessage(conversationId, data, getSessionToken());
    if (res?.success) {
      setData({
        message: "",
        messageType: "text",
      });
    } else {
      toast.error(res?.message, {
        duration: 3000,
        position: "top-center",
        style: {
          borderRadius: "10px",
          background: isDark ? "#333" : "#fff",
          color: isDark ? "#fff" : "#000",
        },
      });
    }
  };

  return (
    <form
      className="sticky z-50 bottom-0 right-0 flex items-center px-3 py-2 bg-white dark:bg-[#161616] border-l dark:border-gray-800"
      onSubmit={handleMessageSend}>
      <div className="bg-[#F5F3F3]  dark:bg-[#2B2B2B] text-black dark:text-white flex items-center w-full px-3 py-2">
        <textarea
          rows={1}
          onInput={(event) => {
            event.target.style.height = "auto";
            event.target.style.height = event.target.scrollHeight + "px";
          }}
          onChange={(event) =>
            setData({ ...data, message: event.target.value })
          }
          value={data.message}
          placeholder="Type your message..."
          className="bg-transparent font-poppins text-sm w-full outline-none px-2 placeholder:text-black dark:placeholder:text-white"></textarea>
        <Image
          alt="options"
          src="/icons/link.svg"
          height={20}
          width={20}
          className="w-5 h-5 cursor-pointer invert-0 dark:invert"
        />
      </div>
      <button type="submit" className="bg-[#5a4de6] dark:bg-black px-3 py-1.5">
        <Image
          alt="send"
          src="/icons/send.svg"
          height={24}
          width={24}
          className="w-6 h-6 invert"
        />
      </button>
    </form>
  );
}
