"use client";

import React, { useContext, useEffect } from "react";
import DropdownContext from "@/contexts/dropdown/DropdownContext";
import Image from "next/image";
import Dropdown from "./Dropdown";
import deleteMessage from "@/apis/conversation/deleteMessage";
import SessionTokenContext from "@/contexts/sessionToken/SessionTokenContext";
import { toast } from "react-hot-toast";
import ThemeContext from "@/contexts/theme/ThemeContext";

export default function ChatBubble({ message, incoming }) {
  const { isDropdownOpen, toggleDropdown, closeDropdown, removeDropdown } =
    useContext(DropdownContext);
  const { getSessionToken } = useContext(SessionTokenContext);
  const { isDark } = useContext(ThemeContext);

  const handleDeleteMessage = async () => {
    const res = await deleteMessage(message?._id, getSessionToken());
    if (res?.success) {
      toast.success(res?.message, {
        duration: 3000,
        position: "top-center",
        style: {
          borderRadius: "10px",
          background: isDark ? "#333" : "#fff",
          color: isDark ? "#fff" : "#000",
        },
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

  useEffect(
    () => {
      return removeDropdown();
    },
    //eslint-disable-next-line
    []
  );

  return (
    <div
      className={`flex ${incoming ? "justify-start" : "justify-end"} w-full`}>
      <div
        tabIndex={0}
        onBlur={() => closeDropdown(message?._id)}
        className={`relative flex ${
          incoming ? "flex-row mr-20" : "flex-row-reverse ml-20"
        } items-end`}
        onClick={() => toggleDropdown(message?._id)}>
        <Image
          alt=""
          src={message?.sender?.profilePic || "/images/user.svg"}
          width={44}
          height={44}
          className="w-11 h-11 z-10 p-1.5 bg-[#DFDBDB] dark:bg-[#2B2B2B] rounded-full"
        />
        <div className="relative bg-[#5A4DE6] dark:bg-[#161616] w-fit px-1.5 py-1 rounded-md">
          <p className="text-sm mx-1">{message?.message}</p>
          <p className="text-[10px] text-right mt-px ml-4 mx-1">{"11:58 PM"}</p>
          <div
            className={`absolute ${
              incoming ? "-left-3" : "-right-3"
            } z-0 bottom-0 bg-[#5A4DE6] dark:bg-[#161616] w-5 h-5`}></div>
        </div>
        {isDropdownOpen(message?._id) && (
          <Dropdown
            options={[
              {
                name: "Copy",
                icon: "/icons/block.svg",
              },
              {
                name: "Edit",
                icon: "/icons/profile.svg",
              },
              {
                name: "Delete",
                icon: "/icons/trash.svg",
                callback: handleDeleteMessage,
              },
            ]}
          />
        )}
      </div>
    </div>
  );
}
