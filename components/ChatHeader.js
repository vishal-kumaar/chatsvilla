"use client";

import React, { useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "./Dropdown";
import { useRouter } from "next/navigation";
import DropdownContext from "@/contexts/dropdown/DropdownContext";
import deleteConversation from "@/apis/conversation/deleteConversation";
import SessionTokenContext from "@/contexts/sessionToken/SessionTokenContext";
import { toast } from "react-hot-toast";
import ThemeContext from "@/contexts/theme/ThemeContext";
import getParticipantUser from "@/utils/getParticipantUser";
import UserContext from "@/contexts/user/UserContext";

export default function ChatHeader({ chat }) {
  const { isDropdownOpen, toggleDropdown, closeDropdown, removeDropdown } =
    useContext(DropdownContext);
  const { getSessionToken } = useContext(SessionTokenContext);
  const { isDark } = useContext(ThemeContext);
  const router = useRouter();
  const { user } = useContext(UserContext);

  let participantUser = null;

  if (chat?.type === "Individual") {
    participantUser = getParticipantUser(user?._id, chat?.participants);
  }

  const handleDeleteConversation = async () => {
    const res = await deleteConversation(chat?._id, getSessionToken());
    if (res?.success) {
      toast.success(res?.message, {
        duration: 3000,
        position: "top-center",
        style: {
          borderRadius: "10px",
          background: isDark ? "#333" : "#fff",
          color: isDark ? "#fff" : "#000",
        },
      });
    } else {
      toast.error(res?.message, {
        duration: 3000,
        position: "top-center",
        style: {
          borderRadius: "10px",
          background: isDark ? "#333" : "#fff",
          color: isDark ? "#fff" : "#000",
        },
      });
    }
  };

  useEffect(
    () => {
      return removeDropdown();
    },
    //eslint-disable-next-line
    []
  );

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
          href={`/profile/${participantUser?.user?._id}` || ``}
          className="flex items-center gap-4 cursor-pointer">
          <Image
            alt="profile-pic"
            src="/images/user.svg"
            height={56}
            width={56}
            className="w-14 h-14 rounded-full"
          />
          <div>
            <h1 className="font-signika">
              {participantUser?.user?.name || chat?.groupName}
            </h1>
            <p className="font-poppins text-xs">
              {chat?.type === "Individual"
                ? chat?.participant?.user?.online
                  ? "Online"
                  : "Offline"
                : ""}
            </p>
          </div>
        </Link>
      </div>
      <div
        className="relative"
        tabIndex={0}
        onBlur={() => closeDropdown("headerDropdown")}>
        <Image
          alt="option"
          src="/icons/option.svg"
          width={20}
          height={20}
          className="w-5 h-5 invert cursor-pointer"
          onClick={() => toggleDropdown("headerDropdown")}
        />
        {isDropdownOpen("headerDropdown") && (
          <Dropdown
            options={[
              {
                name: "View Profile",
                icon: "/icons/profile.svg",
                callback: () =>
                  router.push(`/profile/${chat?.participant?.user?._id}`),
              },
              {
                name: "Delete Chat",
                icon: "/icons/trash.svg",
                callback: handleDeleteConversation,
              },
              {
                name: "Block User",
                icon: "/icons/block.svg",
              },
            ]}
          />
        )}
      </div>
    </header>
  );
}
