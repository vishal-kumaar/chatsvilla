"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ChatHeader() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <header className="z-50 flex justify-between items-center sticky top-0 right-0 px-7 py-2 shadow-2xl bg-[#5a4de6] dark:bg-black text-white">
      <Link
        href="/profile/1"
        className="flex items-center gap-4 cursor-pointer">
        <Image
          alt="profile-pic"
          src="/images/user.svg"
          height={56}
          width={56}
          className="w-14 h-14 rounded-full"
        />
        <div>
          <h1 className="font-signika">John Cena</h1>
          <p className="font-poppins text-xs">Online</p>
        </div>
      </Link>
      <div
        className="relative"
        tabIndex={0}
        onBlur={() => {
          setTimeout(() => {
            setDropdown(false);
          }, 500);
        }}>
        <Image
          alt="option"
          src="/icons/option.svg"
          width={20}
          height={20}
          className="w-5 h-5 invert cursor-pointer"
          onClick={() => setDropdown(!dropdown)}
        />
        {dropdown && (
          <div
            className={`font-firasans outline-none text-base absolute right-3 top-6 bg-white dark:bg-[#161616] text-black dark:text-white w-40 rounded-lg shadow-2xl overflow-hidden`}>
            <Link
              href="/profile/1"
              className="flex items-center gap-2 px-4 py-2 hover:bg-[#DFDBDB] dark:hover:bg-[#494848] w-full">
              <Image
                alt=""
                src="/icons/profile.svg"
                height={16}
                width={16}
                className="w-4 h-4 invert-0 dark:invert"
              />
              <p>View Profile</p>
            </Link>
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-[#DFDBDB] dark:hover:bg-[#494848] w-full">
              <Image
                alt=""
                src="/icons/trash.svg"
                height={16}
                width={16}
                className="w-4 h-4 invert-0 dark:invert"
              />
              <p>Delete Chat</p>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-[#DFDBDB] dark:hover:bg-[#494848] w-full">
              <Image
                alt=""
                src="/icons/block.svg"
                height={16}
                width={16}
                className="w-4 h-4 invert-0 dark:invert"
              />
              <p>Block User</p>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
