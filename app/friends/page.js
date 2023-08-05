"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "@/components/Dropdown";

export default function Friends() {
  const [dropdown, setDropdown] = useState(false);
  const friends = "";

  const dropdownOptions = [
    {
      name: "Unfriend",
      icon: "/icons/unfriend.svg",
    },
    {
      name: "Block",
      icon: "/icons/block.svg",
    },
  ];

  return (
    <main className="w-full px-10 dark:bg-[#161616] pb-9">
      <div className="sticky top-0 z-50 pt-10 bg-[#f5f3f3] dark:bg-[#161616] ">
        <h1 className="text-black dark:text-white font-signika text-3xl mb-1">
          Friends <span className="font-firasans text-xl">(0)</span>
        </h1>
        <hr className="pb-8" />
      </div>
      {friends ? (
        <div>
          <div className="flex items-center text-black dark:text-white bg-white dark:bg-transparent hover:bg-[#dfdbdb] dark:hover:bg-[#555353] px-2.5 py-3 border-y">
            <Link
              href="/profile/1"
              className="flex items-center gap-x-4 w-full cursor-pointer">
              <Image
                alt="profile-pic"
                src="/images/user.svg"
                height={48}
                width={48}
                className="rounded-full w-12 h-12"
              />
              <div className="w-full">
                <h2 className="font-signika text-sm line-clamp-1">John Cena</h2>
                <p className="font-poppins text-xs line-clamp-1 break-all max-w-full">
                  <span className="mr-4">offical_johncena</span>
                  <span className="relative before:absolute before:top-1.5 before:-left-2.5 before:h-1 before:w-1 before:bg-[#555353] dark:before:bg-white before:rounded-full">
                    johncena@gmail.com
                  </span>
                </p>
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
                alt="options"
                src="/icons/option.svg"
                height={20}
                width={20}
                className="rounded-full w-5 h-5 cursor-pointer"
                onClick={() => setDropdown(!dropdown)}
              />
              {dropdown && <Dropdown options={dropdownOptions} />}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-y-2 h-[76vh] justify-center items-center">
          <Image
            alt=""
            src="/icons/friends.svg"
            width={40}
            height={40}
            className="w-10 h-10 invert-0 dark:invert"
          />
          <p className="font-poppins text-black dark:text-white">
            You don't have any friends.
          </p>
        </div>
      )}
    </main>
  );
}