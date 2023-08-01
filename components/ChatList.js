import Image from "next/image";
import React from "react";

export default function ChatList() {
  return (
    <div className="pl-8 pr-4 bg-white pt-9 w-80 min-h-screen shadow-2xl">
      <h1 className="font-signika text-2xl mb-8">Chat</h1>
      <div className="">
        <hr />
        <div className="flex items-center gap-3 w-full p-2.5 cursor-pointer rounded hover:bg-[#dfdbdb]">
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
              <p className="font-roboto font-bold text-xs">2</p>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
