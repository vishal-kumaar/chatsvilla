"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "./Dropdown";
import { useRouter } from "next/navigation";

export default function ChatHeader() {
  const [dropdown, setDropdown] = useState(false);
  const router = useRouter();

  const dropdownOptions = [
    {
      name: "View Profile",
      icon: "/icons/profile.svg",
      link: "/profile/1",
    },
    {
      name: "Delete Chat",
      icon: "/icons/trash.svg",
    },
    {
      name: "Block User",
      icon: "/icons/block.svg",
    },
  ];

  return (
    <header className="z-40 flex justify-between items-center sticky top-0 right-0 px-7 py-2 shadow-2xl bg-[#5a4de6] dark:bg-black text-white">
      <div className="flex items-center gap-4">
        <Image
          alt="back"
          src="/icons/arrow.svg"
          height={20}
          width={20}
          className="invert h-5 w-5 cursor-pointer block md:hidden"
          onClick={() => router.back()}
        />
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
      </div>
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
        {dropdown && <Dropdown options={dropdownOptions} />}
      </div>
    </header>
  );
}
