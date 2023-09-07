import Image from "next/image";
import React from "react";
import SearchBar from "./SearchBar";
import Link from "next/link";
import formatLastMessageTime from "@/utils/formatLastMessageTime";
import { usePathname } from "next/navigation";

export default function ChatList({ className, chatList }) {
  const pathname = usePathname();

  const isActive = (path) => {
    const basePath = pathname.split("/");
    return basePath[basePath.length - 1] === path;
  };

  return (
    <div
      className={`sticky top-0 pl-4 sm:pl-8 pr-4 bg-white dark:bg-[#161616] text-black dark:text-white pt-6 md:pt-9 w-full md:w-96 min-h-[calc(100vh-56px)] md:h-screen shadow-2xl ${className}`}>
      <h1 className="font-signika text-2xl mb-5">
        Chat <span className="font-firasans text-xl">(1)</span>
      </h1>
      <SearchBar />
      <div className="mt-6 overflow-hidden md:overflow-y-auto md:h-[calc(100vh-10.5rem)] pb-3">
        {chatList?.map((chat, index) => (
          <Link
            key={index}
            href={`/chat/${chat?._id}`}
            className={`flex gap-3 w-full border-y px-2.5 py-3 cursor-pointer ${
              isActive(chat?._id)
                ? "text-white bg-[#5a4de6] dark:bg-black"
                : "bg-transparent hover:bg-[#dfdbdb] dark:hover:bg-[#555353]"
            } `}>
            <Image
              alt="profile-pic"
              src={chat?.participant?.user?.profilePic || "/images/user.svg"}
              height={48}
              width={48}
              className="rounded-full w-12 h-12"
            />
            <div className="w-full mt-1.5">
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-signika text-sm line-clamp-1">
                  {chat?.type === "Individual"
                    ? chat?.participant?.user?.name
                    : chat.groupName}
                </h2>
                {chat?.lastMessage?.createdAt && (
                  <p className="font-firasans text-xs">
                    {formatLastMessageTime(chat.lastMessage.createdAt)}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between gap-7 mt-px">
                <p className="font-poppins text-xs line-clamp-1 break-all">
                  {chat?.lastMessage?.message}
                </p>
                {chat?.unreadMessageCount !== 0 && (
                  <p className="font-roboto font-bold text-xs bg-red-500 text-white py-[1px] px-[5px] rounded-full mt-1">
                    {chat?.unreadMessageCount}
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
