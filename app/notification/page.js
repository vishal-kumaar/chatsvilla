import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Notification({ notification }) {
  return (
    <main className="w-full px-10 dark:bg-[#161616] pb-9">
      <div className="sticky top-0 pt-10 bg-[#f5f3f3] dark:bg-[#161616] ">
        <div className="flex items-center justify-between gap-x-4">
          <h1 className="text-black dark:text-white font-signika text-3xl mb-1">
            Notifications <span className="font-firasans text-xl">(0)</span>
          </h1>
          <button className="text-[#5A4DE6] dark:text-white font-firasans">
            Mark all as read
          </button>
        </div>
        <hr className="pb-8" />
      </div>
      {notification ? (
        <div className="flex flex-col gap-y-3">
          <Link
            href="/profile/1"
            className="flex items-center gap-x-4 w-full border-l-4 border-[#5A4DE6] dark:border-white shadow-md px-2.5 py-3 cursor-pointer text-black dark:text-white bg-white dark:bg-[#2B2B2B] hover:bg-[#dfdbdb] dark:hover:bg-[#555353]">
            <Image
              alt="profile-pic"
              src="/images/user.svg"
              height={48}
              width={48}
              className="rounded-full w-12 h-12"
            />
            <div className="w-full">
              <h2 className="font-firasans font-semibold text-sm">
                Roman Reigns sent you a friend request.
              </h2>
              <p className="font-poppins text-xs mt-1">47 min ago</p>
            </div>
          </Link>
          <Link
            href="/profile/1"
            className="flex items-center gap-x-4 w-full border-l-4 border-[#5A4DE6] dark:border-white shadow-md px-2.5 py-3 cursor-pointer text-black dark:text-white bg-white dark:bg-[#2B2B2B] hover:bg-[#dfdbdb] dark:hover:bg-[#555353]">
            <Image
              alt="profile-pic"
              src="/images/user.svg"
              height={48}
              width={48}
              className="rounded-full w-12 h-12"
            />
            <div className="w-full">
              <h2 className="font-firasans font-semibold text-sm">
                The Rock sent you a friend request.
              </h2>
              <p className="font-poppins text-xs mt-1">7 hour ago</p>
            </div>
          </Link>
          <Link
            href="/profile/1"
            className="flex items-center gap-x-4 w-full border-l-4 dark:border-white shadow-md px-2.5 py-3 cursor-pointer text-black dark:text-white bg-white dark:bg-[#2B2B2B] hover:bg-[#dfdbdb] dark:hover:bg-[#555353]">
            <Image
              alt="profile-pic"
              src="/images/user.svg"
              height={48}
              width={48}
              className="rounded-full w-12 h-12"
            />
            <div className="w-full">
              <h2 className="font-firasans font-semibold text-sm">
                John Wick accepted your friend request.
              </h2>
              <p className="font-poppins text-xs mt-1">1 day ago</p>
            </div>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-y-2 h-[29rem] justify-center items-center">
          <Image
            alt=""
            src="/icons/notification.svg"
            width={40}
            height={40}
            className="w-10 h-10 invert-0 dark:invert"
          />
          <p className="font-poppins text-black dark:text-white">You don't have any notification.</p>
        </div>
      )}
    </main>
  );
}
