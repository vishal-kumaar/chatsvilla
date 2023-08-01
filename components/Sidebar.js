"use client";

import React from "react";
import Image from "next/image";

export default function Sidebar() {

  return (
    <aside className="bg-[#5a4de6] dark:bg-black text-white sticky top-0 left-0 w-60 h-screen overflow-x-hidden px-3 py-7 transition-all duration-500 ease-in-out flex flex-col gap-12 justify-between">
      <div className="flex items-center overflow-hidden gap-x-6 px-2.5 py-2 cursor-pointer">
        <Image
          src="/icons/hamburger.svg"
          height={24}
          width={24}
          className="invert block w-6 h-6"
        />
        <p className="font-signika text-2xl">Chatsvilla</p>
      </div>
      <div className="flex flex-col gap-y-6 overflow-y-auto px-3 overflow-x-hidden custom-scrollbar">
        <div className="flex items-center gap-x-4 bg-[#4a48ad] dark:bg-[#fff] dark:text-black hover:bg-[#7472ca] dark:hover:bg-[#535252] px-2.5 py-2 rounded-lg cursor-pointer">
          <Image
            src="/icons/chat.svg"
            height={20}
            width={20}
            className="invert dark:invert-0 block w-5 h-5"
          />
          <p className="font-poppins text-base">Chat</p>
        </div>
        <div className="flex items-center gap-x-4 hover:bg-[#7472ca] dark:hover:bg-[#535252] px-2.5 py-2 rounded-lg cursor-pointer">
          <Image
            src="/icons/search.svg"
            height={20}
            width={20}
            className="invert block w-5 h-5"
          />
          <p className="font-poppins text-base">Search</p>
        </div>
        <div className="flex items-center gap-x-4 hover:bg-[#7472ca] dark:hover:bg-[#535252] px-2.5 py-2 rounded-lg cursor-pointer">
          <Image
            src="/icons/profile.svg"
            height={20}
            width={20}
            className="invert block w-5 h-5"
          />
          <p className="font-poppins text-base">Profile</p>
        </div>
        <div className="flex items-center gap-x-4 hover:bg-[#7472ca] dark:hover:bg-[#535252] px-2.5 py-2 rounded-lg cursor-pointer">
          <Image
            src="/icons/friends.svg"
            height={20}
            width={20}
            className="invert block w-5 h-5"
          />
          <p className="font-poppins text-base">Friends</p>
        </div>
        <div className="flex items-center gap-x-4 hover:bg-[#7472ca] dark:hover:bg-[#535252] px-2.5 py-2 rounded-lg cursor-pointer">
          <Image
            src="/icons/notification.svg"
            height={20}
            width={20}
            className="invert block w-5 h-5"
          />
          <p className="font-poppins text-base">Notification</p>
        </div>
        <div className="flex items-center gap-x-4 hover:bg-[#7472ca] dark:hover:bg-[#535252] px-2.5 py-2 rounded-lg cursor-pointer">
          <Image
            src="/icons/setting.svg"
            height={20}
            width={20}
            className="invert block w-5 h-5"
          />
          <p className="font-poppins text-base">Setting</p>
        </div>
      </div>
      <div className="flex items-center overflow-hidden gap-x-4 hover:bg-[#7472ca] dark:hover:bg-[#535252] ml-3.5 px-2.5 py-2 rounded-lg cursor-pointer">
        <Image
          src="/icons/logout.svg"
          height={20}
          width={20}
          className="invert block w-5 h-5"
        />
        <p className="font-poppins text-base">Logout</p>
      </div>
    </aside>
  );
}
