import Image from "next/image";
import React from "react";
import SearchBar from "./SearchBar";
import Link from "next/link";

export default function ChatList({className}) {
  return (
    <div
      className={`sticky top-0 pl-4 sm:pl-8 pr-4 bg-white dark:bg-[#161616] text-black dark:text-white pt-6 md:pt-9 w-full md:w-96 min-h-[calc(100vh-56px)] md:h-screen shadow-2xl ${className}`}>
      <h1 className="font-signika text-2xl mb-5">
        Chat <span className="font-firasans text-xl">(1)</span>
      </h1>
      <SearchBar />
      <div className="mt-6 overflow-hidden md:overflow-y-auto md:h-[calc(100vh-10.5rem)] pb-3">
        <Link
          href="/chat/1"
          className="flex items-center gap-3 w-full border-y px-2.5 py-3 cursor-pointer text-white  bg-[#5a4de6] dark:bg-black hover:bg-[#dfdbdb] dark:hover:bg-[#555353]">
          <Image
            alt="profile-pic"
            src="/images/user.svg"
            height={48}
            width={48}
            className="rounded-full w-12 h-12"
          />
          <div className=" w-full">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-signika text-sm line-clamp-1">John Cena</h2>
              <p className="font-firasans text-xs">12:00 AM</p>
            </div>
            <div className="flex items-center justify-between gap-7 mt-px">
              <p className="font-poppins text-xs line-clamp-1 break-all">
                Hi John, How are you? I need your help.
              </p>
              <p className="font-roboto font-bold text-xs bg-red-500 text-white py-0.5 px-1.5 rounded-full">
                2
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="/chat/2"
          className="flex items-center gap-3 w-full border-y px-2.5 py-3 cursor-pointer hover:bg-[#dfdbdb] dark:hover:bg-[#555353]">
          <Image
            alt="profile-pic"
            src="/images/user.svg"
            height={48}
            width={48}
            className="rounded-full w-12 h-12"
          />
          <div className=" w-full">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-signika text-sm line-clamp-1">John Cena</h2>
              <p className="font-firasans text-xs">12:00 AM</p>
            </div>
            <div className="flex items-center justify-between gap-7 mt-px">
              <p className="font-poppins text-xs line-clamp-1 break-all">
                Hi John, How are you? I need your help.
              </p>
              <p className="font-roboto font-bold text-xs bg-red-500 text-white py-0.5 px-1.5 rounded-full">
                2
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
