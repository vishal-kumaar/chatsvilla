"use client";

import React, { useContext } from "react";
import Tab from "@/components/Tab";
import Link from "next/link";
import Image from "next/image";
import Dropdown from "@/components/Dropdown";
import { useSearchParams } from "next/navigation";
import DropdownContext from "@/contexts/dropdown/DropdownContext";

export default function FriendRequests() {
  const { isDropdownOpen, toggleDropdown, closeDropdown } =
    useContext(DropdownContext);

  const searchParams = useSearchParams();
  let tab = searchParams.get("tab");

  const options = [
    {
      name: "Friends Requests",
      count: 2,
    },
    {
      name: "Received Requests",
      count: 1,
    },
  ];

  const dropdownOptions = [
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
  ];

  if (!tab) {
    tab = "Friends Requests";
  }

  return (
    <div className="w-full py-8 px-10">
      <Tab options={options} />
      <hr />
      {tab === "Friends Requests" ? (
        <div className="mt-7">
          <div className=" flex items-center text-black dark:text-white bg-white dark:bg-transparent hover:bg-[#dfdbdb] dark:hover:bg-[#555353] px-2.5 py-3 border-y">
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
              onBlur={() => closeDropdown("dropdown1")}>
              <Image
                alt="options"
                src="/icons/option.svg"
                height={20}
                width={20}
                className="rounded-full w-5 h-5 cursor-pointer"
                onClick={() => toggleDropdown("dropdown1")}
              />
              {isDropdownOpen("dropdown1") && (
                <Dropdown options={dropdownOptions} />
              )}
            </div>
          </div>
          <div className=" flex items-center text-black dark:text-white bg-white dark:bg-transparent hover:bg-[#dfdbdb] dark:hover:bg-[#555353] px-2.5 py-3 border-y">
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
              onBlur={() => closeDropdown("dropdown2")}>
              <Image
                alt="options"
                src="/icons/option.svg"
                height={20}
                width={20}
                className="rounded-full w-5 h-5 cursor-pointer"
                onClick={() => toggleDropdown("dropdown2")}
              />
              {isDropdownOpen("dropdown2") && (
                <Dropdown options={dropdownOptions} />
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-7">
          <div className=" flex items-center text-black dark:text-white bg-white dark:bg-transparent hover:bg-[#dfdbdb] dark:hover:bg-[#555353] px-2.5 py-3 border-y">
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
      )}
    </div>
  );
}
