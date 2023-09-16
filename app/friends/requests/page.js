"use client";

import React, { useContext, useEffect, useState } from "react";
import Tab from "@/components/Tab";
import Link from "next/link";
import Image from "next/image";
import Dropdown from "@/components/Dropdown";
import { useRouter, useSearchParams } from "next/navigation";
import DropdownContext from "@/contexts/dropdown/DropdownContext";
import Header from "@/components/Header";
import queryString from "@/utils/queryString";
import getReceivedRequests from "@/apis/user/getReceivedRequests";
import getSentRequests from "@/apis/user/getSentRequests";
import SessionTokenContext from "@/contexts/sessionToken/SessionTokenContext";

export default function FriendRequests() {
  const { isDropdownOpen, toggleDropdown, closeDropdown, removeDropdown } =
    useContext(DropdownContext);
  const { getSessionToken } = useContext(SessionTokenContext);
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  const [receivedRequests, setReceivedRequests] = useState(null);
  const [sentRequests, setSentRequests] = useState(null);

  const handleReceivedRequests = async () => {
    const res = await getReceivedRequests(getSessionToken());
    if (res?.success) {
      setReceivedRequests(res?.receivedRequests);
    }
  };

  const handleSentRequests = async () => {
    const res = await getSentRequests(getSessionToken());
    if (res?.success) {
      setSentRequests(res?.sentRequests);
    }
  };

  const options = [
    {
      name: "Friends Requests",
      count: receivedRequests?.length,
    },
    {
      name: "Sent Requests",
      count: sentRequests?.length,
    },
  ];

  if (!tab) {
    router.replace(queryString({ tab: "Friends Requests" }));
  }

  useEffect(
    () => {
      handleReceivedRequests();
      handleSentRequests();
      return removeDropdown();
    },
    //eslint-disable-next-line
    []
  );

  return (
    <div className="w-full min-h-screen">
      <Header className="px-5" />
      <Tab options={options} />
      <div className="py-8 px-4 sm:px-10">
        {tab === "Friends Requests" ? (
          <div className="mt-7">
            {receivedRequests?.map((user, index) => (
              <div
                key={index}
                className=" flex items-center text-black dark:text-white bg-white dark:bg-transparent hover:bg-[#dfdbdb] dark:hover:bg-[#555353] px-2.5 py-3 border-y">
                <Link
                  href={`/profile/${user?._id}`}
                  className="flex items-center gap-x-4 w-full cursor-pointer">
                  <Image
                    alt="profile-pic"
                    src={user?.profilePic || "/images/user.svg"}
                    height={48}
                    width={48}
                    className="rounded-full w-12 h-12"
                  />
                  <div className="w-full">
                    <h2 className="font-signika text-sm line-clamp-1">
                      {user?.name}
                    </h2>
                    <p className="font-poppins text-xs line-clamp-1 break-all max-w-full">
                      <span className="mr-4">{user?.username}</span>
                      <span className="relative before:absolute before:top-1.5 before:-left-2.5 before:h-1 before:w-1 before:bg-[#555353] dark:before:bg-white before:rounded-full">
                        {user?.email}
                      </span>
                    </p>
                  </div>
                </Link>
                <div
                  className="relative"
                  tabIndex={0}
                  onBlur={() => closeDropdown(user?._id)}>
                  <Image
                    alt="options"
                    src="/icons/option.svg"
                    height={20}
                    width={20}
                    className="rounded-full w-5 h-5 cursor-pointer invert-0 dark:invert"
                    onClick={() => toggleDropdown(user?._id)}
                  />
                  {isDropdownOpen(user?._id) && (
                    <Dropdown
                      options={[
                        {
                          name: "Remove Friend Request",
                          icon: "/icons/unfriend.svg",
                          callback: () => {},
                        },
                        {
                          name: "Block",
                          icon: "/icons/block.svg",
                          callback: () => {},
                        },
                      ]}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-7">
            {sentRequests?.map((user, index) => (
              <div
                key={index}
                className=" flex items-center text-black dark:text-white bg-white dark:bg-transparent hover:bg-[#dfdbdb] dark:hover:bg-[#555353] px-2.5 py-3 border-y">
                <Link
                  href={`/profile/${user?._id}`}
                  className="flex items-center gap-x-4 w-full cursor-pointer">
                  <Image
                    alt="profile-pic"
                    src={user?.profilePic || "/images/user.svg"}
                    height={48}
                    width={48}
                    className="rounded-full w-12 h-12"
                  />
                  <div className="w-full">
                    <h2 className="font-signika text-sm line-clamp-1">
                      {user?.name}
                    </h2>
                    <p className="font-poppins text-xs line-clamp-1 break-all max-w-full">
                      <span className="mr-4">{user?.username}</span>
                      <span className="relative before:absolute before:top-1.5 before:-left-2.5 before:h-1 before:w-1 before:bg-[#555353] dark:before:bg-white before:rounded-full">
                        {user?.email}
                      </span>
                    </p>
                  </div>
                </Link>
                <div
                  className="relative"
                  tabIndex={0}
                  onBlur={() => closeDropdown(user?._id)}>
                  <Image
                    alt="options"
                    src="/icons/option.svg"
                    height={20}
                    width={20}
                    className="rounded-full w-5 h-5 cursor-pointer invert-0 dark:invert"
                    onClick={() => toggleDropdown(user?._id)}
                  />
                  {isDropdownOpen(user?._id) && (
                    <Dropdown
                      options={[
                        {
                          name: "Remove Friend Request",
                          icon: "/icons/unfriend.svg",
                          callback: () => {},
                        },
                        {
                          name: "Block",
                          icon: "/icons/block.svg",
                          callback: () => {},
                        },
                      ]}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
