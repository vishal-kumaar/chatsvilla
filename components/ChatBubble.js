"use client";

import React, { useContext, useEffect } from "react";
import DropdownContext from "@/contexts/dropdown/DropdownContext";
import Image from "next/image";
import Dropdown from "./Dropdown";

export default function ChatBubble({
  id,
  message,
  timestamp,
  profilePic,
  incoming,
}) {
  const { isDropdownOpen, toggleDropdown, closeDropdown, removeDropdown } =
    useContext(DropdownContext);

  const dropdownOptions = [
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
    },
  ];

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
        onBlur={() => removeDropdown(id)}
        className={`relative flex ${
          incoming ? "flex-row mr-20" : "flex-row-reverse ml-20"
        } items-end`}
        onClick={() => toggleDropdown(id)}>
        <Image
          alt=""
          src={profilePic || "/images/user.svg"}
          width={44}
          height={44}
          className="w-11 h-11 z-10 p-1.5 bg-[#DFDBDB] dark:bg-[#2B2B2B] rounded-full"
        />
        <div className="relative bg-[#5A4DE6] dark:bg-[#161616] w-fit px-1.5 py-1 rounded-md">
          <p className="text-sm mx-1">{message}</p>
          <p className="text-[10px] text-right mt-px ml-4 mx-1">{timestamp}</p>
          <div
            className={`absolute ${
              incoming ? "-left-3" : "-right-3"
            } z-0 bottom-0 bg-[#5A4DE6] dark:bg-[#161616] w-5 h-5`}></div>
        </div>
        {isDropdownOpen(id) && <Dropdown options={dropdownOptions} />}
      </div>
    </div>
  );
}
