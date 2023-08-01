import React from "react";
import Image from "next/image";

export default function ChatHeader() {
  return (
    <header className="flex justify-between items-center sticky top-0 right-0 px-7 py-2 shadow-2xl bg-[#5a4de6] dark:bg-black text-white">
      <div className="flex items-center gap-4 cursor-pointer">
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
      </div>
      <Image
        alt="option"
        src="/icons/option.svg"
        width={20}
        height={20}
        className="w-5 h-5 invert cursor-pointer"
      />
    </header>
  );
}
