"use client";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "@/components/Dropdown";
import Header from "@/components/Header";
import DropdownContext from "@/contexts/dropdown/DropdownContext";
import SessionTokenContext from "@/contexts/sessionToken/SessionTokenContext";
import getFriends from "@/apis/user/getFriends";

export default function Friends() {
  const { getSessionToken } = useContext(SessionTokenContext);
  const { isDropdownOpen, toggleDropdown, closeDropdown, removeDropdown } =
    useContext(DropdownContext);
  const [friends, setFriends] = useState(null);

  const handleFriends = async () => {
    const res = await getFriends(getSessionToken());
    if (res?.success) {
      setFriends(res.friends);
    }
  };

  useEffect(
    () => {
      handleFriends();
      return removeDropdown();
    },
    //eslint-disable-next-line
    []
  );

  return (
    <main className="w-full px-4 sm:px-10 dark:bg-[#161616] pb-9">
      <Header className="px-1" />
      <div className="sticky top-0 z-30 pt-6 md:pt-10 bg-[#f5f3f3] dark:bg-[#161616] flex flex-wrap justify-between items-center gap-x-4">
        <h1 className="text-black dark:text-white font-signika text-2xl sm:text-3xl mb-1">
          Friends <span className="font-firasans text-xl">({friends?.length})</span>
        </h1>
        <Link
          href="/friends/requests"
          className="text-[#5A4DE6] dark:text-white font-firasans text-sm sm:text-base">
          Friend Requests
        </Link>
      </div>
      <hr className="pb-8" />
      {friends ? (
        <div className="min-h-[calc(100vh-185px)]">
          {friends?.map((friend, index) => (
            <div
              key={index}
              className="flex items-center text-black dark:text-white bg-white dark:bg-transparent hover:bg-[#dfdbdb] dark:hover:bg-[#555353] px-2.5 py-3 border-y">
              <Link
                href={`/profile/${friend?._id}`}
                className="flex items-center gap-x-4 w-full cursor-pointer">
                <Image
                  src={friend?.profilePic || "/images/user.svg"}
                  alt="profile-pic"
                  height={48}
                  width={48}
                  className="rounded-full w-12 h-12"
                />
                <div className="w-full">
                  <h2 className="font-signika text-sm line-clamp-1">
                    {friend?.name}
                  </h2>
                  <p className="font-poppins text-xs line-clamp-1 break-all max-w-full">
                    <span className="mr-4">{friend?.username}</span>
                    <span className="relative before:absolute before:top-1.5 before:-left-2.5 before:h-1 before:w-1 before:bg-[#555353] dark:before:bg-white before:rounded-full">
                      {friend?.email}
                    </span>
                  </p>
                </div>
              </Link>
              <div
                className="relative"
                tabIndex={0}
                onBlur={() => closeDropdown(friend?._id)}>
                <Image
                  alt="options"
                  src="/icons/option.svg"
                  height={20}
                  width={20}
                  className="rounded-full w-5 h-5 cursor-pointer invert-0 dark:invert"
                  onClick={() => toggleDropdown(friend?._id)}
                />
                {isDropdownOpen(friend?._id) && (
                  <Dropdown
                    options={[
                      {
                        name: "Unfriend",
                        icon: "/icons/unfriend.svg",
                      },
                      {
                        name: "Block",
                        icon: "/icons/block.svg",
                      },
                    ]}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-y-2 h-[calc(100vh-185px)] justify-center items-center">
          <Image
            alt=""
            src="/icons/friends.svg"
            width={40}
            height={40}
            className="w-10 h-10 invert-0 dark:invert"
          />
          <p className="font-poppins text-black dark:text-white break-all text-sm sm:text-base">
            You don{"\u0027"}t have any friends.
          </p>
        </div>
      )}
    </main>
  );
}
