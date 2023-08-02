"use client";

import React, { useContext } from "react";
import Image from "next/image";
import SidebarContext from "@/contexts/sidebar/SidebarContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const { sidebar, toggleSidebar } = useContext(SidebarContext);
  const pathname = usePathname();
  const hideSidebarRoutes = ["/login", "/signup"];

  const isActive = (path) => {
    const basePath = pathname.split("/")[1];
    return basePath === path;
  };

  if (hideSidebarRoutes.includes(pathname)) {
    return null;
  }

  return (
    <aside
      className={`bg-[#5a4de6] dark:bg-black text-white sticky top-0 left-0 ${
        sidebar ? "w-80" : "w-16"
      } h-screen overflow-x-hidden px-3 py-7 transition-all duration-500 ease-in-out flex flex-col gap-12 justify-between`}>
      <div className="flex items-center overflow-hidden gap-x-6 px-2.5 py-2">
        <Image
          alt="menu"
          src={sidebar ? "/icons/cross.svg" : "/icons/hamburger.svg"}
          height={24}
          width={24}
          className="invert block w-5 h-5 cursor-pointer"
          onClick={toggleSidebar}
        />
        <p className="font-signika text-2xl">Chatsvilla</p>
      </div>
      <div
        className={`flex flex-col gap-y-6 overflow-y-auto ${
          sidebar ? "px-3" : ""
        } overflow-x-hidden`}>
        <Link
          href="/"
          className={`flex items-center outline-none gap-x-4 ${
            (isActive("") || isActive("chat"))
              ? "bg-[#4a48ad] dark:bg-[#fff] dark:text-black"
              : "hover:bg-[#7472ca] dark:hover:bg-[#535252]"
          } px-2.5 py-2 rounded-lg cursor-pointer`}>
          <Image
            alt="chat"
            src="/icons/chat.svg"
            height={20}
            width={20}
            className={`invert ${
              isActive("") ? "dark:invert-0" : ""
            } block w-5 h-5`}
          />
          <p className="font-poppins text-base">Chat</p>
        </Link>
        <Link
          href="/search"
          className={`flex items-center outline-none gap-x-4 ${
            isActive("search")
              ? "bg-[#4a48ad] dark:bg-[#fff] dark:text-black"
              : "hover:bg-[#7472ca] dark:hover:bg-[#535252]"
          } px-2.5 py-2 rounded-lg cursor-pointer`}>
          <Image
            alt="search"
            src="/icons/search.svg"
            height={20}
            width={20}
            className={`invert ${
              isActive("search") ? "dark:invert-0" : ""
            } block w-5 h-5`}
          />
          <p className="font-poppins text-base">Search</p>
        </Link>
        <Link
          href="/profile"
          className={`flex items-center outline-none gap-x-4 ${
            isActive("profile")
              ? "bg-[#4a48ad] dark:bg-[#fff] dark:text-black"
              : "hover:bg-[#7472ca] dark:hover:bg-[#535252]"
          } px-2.5 py-2 rounded-lg cursor-pointer`}>
          <Image
            alt="profile"
            src="/icons/profile.svg"
            height={20}
            width={20}
            className={`invert ${
              isActive(";rofile") ? "dark:invert-0" : ""
            } block w-5 h-5`}
          />
          <p className="font-poppins text-base">Proflie</p>
        </Link>
        <Link
          href="/friends"
          className={`flex items-center outline-none gap-x-4 ${
            isActive("friends")
              ? "bg-[#4a48ad] dark:bg-[#fff] dark:text-black"
              : "hover:bg-[#7472ca] dark:hover:bg-[#535252]"
          } px-2.5 py-2 rounded-lg cursor-pointer`}>
          <Image
            alt="friends"
            src="/icons/friends.svg"
            height={20}
            width={20}
            className={`invert ${
              isActive("friends") ? "dark:invert-0" : ""
            } block w-5 h-5`}
          />
          <p className="font-poppins text-base">Friends</p>
        </Link>
        <Link
          href="/notification"
          className={`flex items-center outline-none gap-x-4 ${
            isActive("notification")
              ? "bg-[#4a48ad] dark:bg-[#fff] dark:text-black"
              : "hover:bg-[#7472ca] dark:hover:bg-[#535252]"
          } px-2.5 py-2 rounded-lg cursor-pointer`}>
          <Image
            alt="notification"
            src="/icons/notification.svg"
            height={20}
            width={20}
            className={`invert ${
              isActive("notification") ? "dark:invert-0" : ""
            } block w-5 h-5`}
          />
          <p className="font-poppins text-base">Notification</p>
        </Link>
        <Link
          href="/setting"
          className={`flex items-center outline-none gap-x-4 ${
            isActive("setting")
              ? "bg-[#4a48ad] dark:bg-[#fff] dark:text-black"
              : "hover:bg-[#7472ca] dark:hover:bg-[#535252]"
          } px-2.5 py-2 rounded-lg cursor-pointer`}>
          <Image
            alt="setting"
            src="/icons/setting.svg"
            height={20}
            width={20}
            className={`invert ${
              isActive("setting") ? "dark:invert-0" : ""
            } block w-5 h-5`}
          />
          <p className="font-poppins text-base">Setting</p>
        </Link>
      </div>
      <button
        className={`flex items-center outline-none overflow-hidden gap-x-4 hover:bg-[#7472ca] dark:hover:bg-[#535252] ${
          sidebar ? "ml-3.5" : ""
        } px-2.5 py-2 rounded-lg cursor-pointer`}>
        <Image
          alt="logout"
          src="/icons/logout.svg"
          height={20}
          width={20}
          className="invert block w-5 h-5"
        />
        <p className="font-poppins text-base">Logout</p>
      </button>
    </aside>
  );
}
