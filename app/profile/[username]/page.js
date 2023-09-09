"use client";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { useParams } from "next/navigation";
import SessionTokenContext from "@/contexts/sessionToken/SessionTokenContext";
import getProfileById from "@/apis/user/getProfileById";

export default function Profile() {
  const [isOwner, setIsOwner] = useState(false);
  const [user, setUser] = useState(null);
  const { username } = useParams();
  const { getSessionToken } = useContext(SessionTokenContext);

  const getUser = async () => {
    const res = await getProfileById(username, getSessionToken());
    if (res?.success) {
      setIsOwner(res.isOwner);
      setUser(res.user);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="w-full min-h-screen md:pt-14 pb-4 px-4 sm:px-10 overflow-x-hidden bg-white dark:bg-[#161616] text-black dark:text-white">
      <Header className="px-1" />
      <main className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-normal gap-8 max-w-4xl mx-auto w-full">
        <Image
          alt="profile-pic"
          src={user?.profilePicture || "/images/user.svg"}
          width={160}
          height={160}
          className="w-40 h-40 rounded-full"
        />
        <div className="w-full">
          <div className="flex w-full items-center justify-between gap-x-4">
            <h1 className="font-signika text-xl sm:text-2xl">{user?.name}</h1>
            {isOwner ? (
              <button className="bg-gradient-to-r from-[#D570BC] to-[#8B6CE2] hover:from-[#aa6198] hover:to-[#8f72dd] dark:from-[#3b3a3a] dark:to-[#000] dark:hover:from-[#1f1e1e] dark:hover:to-[#131212] text-white w-fit px-3 sm:px-5 py-1 rounded-2xl text-xs sm:text-sm font-roboto">
                Edit Profile
              </button>
            ) : (
              <button className="bg-gradient-to-r from-[#D570BC] to-[#8B6CE2] hover:from-[#aa6198] hover:to-[#8f72dd] dark:from-[#3b3a3a] dark:to-[#000] dark:hover:from-[#1f1e1e] dark:hover:to-[#131212] text-white w-fit px-3 sm:px-5 py-1 rounded-2xl text-xs sm:text-sm font-roboto">
                Send Request
              </button>
            )}
          </div>
          <p className="font-poppins text-sm sm:text-base">@{user?.username}</p>
          <p className="font-poppins text-xs sm:text-sm mt-2">{user?.gender}</p>
          <p className="font-poppins text-xs sm:text-sm mt-px">{user?.email}</p>
          <p className="font-poppins text-xs sm:text-sm mt-px">{user?.bio}</p>
          <p className="font-poppins text-xs sm:text-sm mt-1">
            3 Mutual Friends
          </p>
        </div>
      </main>
      <hr className="my-5 sm:my-10" />
      <div className="max-w-6xl mx-auto">
        <h1 className="font-signika text-2xl sm:text-3xl">
          Friends{" "}
          <span className="font-firasans text-xl sm:text-2xl">
            ({user?.friends?.length})
          </span>
        </h1>
        <hr className="mb-6 mt-2" />
        <div className="flex flex-nowrap overflow-x-auto gap-x-3 pb-5">
          {user?.friends?.map((friend, index) => (
            <Link
              key={index}
              href={`/profile/${friend?._id}`}
              className="flex-auto basis-0 grow-0 border cursor-pointer flex flex-col border-black/20 shadow-xl rounded-lg min-w-[8rem] bg-white dark:bg-[#2B2B2B]">
              <Image
                height={96}
                width={96}
                src={friend?.profilePicture || "/images/image_placeholder.svg"}
                alt=""
                className="rounded-t-lg h-24 w-96"
              />
              <div className="px-2 pt-2 pb-4">
                <p className="font-signika text-sm sm:text-base line-clamp-1">
                  {friend?.name}
                </p>
                <p className="font-roboto tracking-wide text-xs sm:text-[13px] -mt-[2px] line-clamp-1">
                  @{friend?.username}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
