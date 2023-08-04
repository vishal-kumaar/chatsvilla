import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <div className="w-full py-16 px-10 overflow-x-hidden text-black dark:text-white">
      <main className="flex items-start justify-between max-w-4xl mx-auto">
        <Image
          alt="profile-pic"
          src="/images/user.svg"
          width={160}
          height={160}
          className="w-40 h-40 rounded-full"
        />
        <div className="">
          <div className="flex items-center justify-between">
            <h1 className="font-signika text-2xl">John Cena</h1>
            <button className="bg-gradient-to-r from-[#D570BC] to-[#8B6CE2] hover:from-[#aa6198] hover:to-[#8f72dd] dark:from-[#3b3a3a] dark:to-[#000] dark:hover:from-[#1f1e1e] dark:hover:to-[#131212] text-white w-fit px-5 py-1 rounded-2xl text-sm">
              Send Request
            </button>
          </div>
          <p className="font-poppins text-base">@official_johncena</p>
          <p className="font-poppins text-sm mt-2">Male</p>
          <p className="font-poppins text-sm mt-px">johncena@gmail.com</p>
          <p className="font-poppins text-sm mt-px">
            An American professional wrestler, actor, and former rapper
            currently signed to WWE.
          </p>
          <p className="font-poppins text-sm mt-px">3 Mutual Friends</p>
        </div>
      </main>
      <hr className="mt-10 mb-10" />
      <div className="max-w-6xl mx-auto">
        <h1 className="font-signika text-3xl">
          Friends <span className="font-firasans text-2xl">(0)</span>
        </h1>
        <hr className="mb-6 mt-2" />
        <div className="flex flex-nowrap overflow-x-auto gap-x-3 pb-5">
          <Link
            href="/profile/1"
            className="flex-auto basis-0 grow-0 border cursor-pointer flex flex-col justify-center items-center border-black/20 shadow-xl rounded-lg max-w-[9.8rem]">
            <Image
              height={96}
              width={96}
              src="/images/image_placeholder.svg"
              alt=""
              className="rounded-t-lg h-24 w-96"
            />
            <div className="px-2 pt-2 pb-4">
              <p className="font-signika text-base line-clamp-1">
                John Cena
              </p>
              <p className="font-roboto tracking-wide text-[13px] -mt-[2px] line-clamp-1">
                @official_johncena
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
