"use client";

import React, { useContext, useEffect, useState } from "react";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import search from "@/apis/user/search";
import SessionTokenContext from "@/contexts/sessionToken/SessionTokenContext";

export default function Search() {
  const [users, setUsers] = useState(null);
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const { getSessionToken } = useContext(SessionTokenContext);

  const searchUser = async (query) => {
    const res = await search(query, getSessionToken());

    if (res?.success) {
      setUsers(res.results);
    }
  };

  useEffect(() => {
    searchUser(query);
  }, [query]);

  return (
    <div className="w-full px-4 md:px-10 bg-white dark:bg-[#161616]">
      <Header className="px-1" />
      <div className="sticky top-0 pt-6 md:pt-10 bg-white dark:bg-[#161616]">
        <SearchBar />
        <h1 className="font-signika text-2xl md:text-3xl mt-10 text-black dark:text-white">
          Search results
        </h1>
        <hr className="pb-5 mb-5 mt-2" />
      </div>
      {query && users ? (
        <div className="min-h-[calc(100vh-249px)]">
          {users?.map((user, index) => (
            <Link
              key={index}
              href={`/profile/${user?._id}`}
              className="flex items-center gap-x-4 w-full border-y px-2.5 py-3 cursor-pointer text-black dark:text-white bg-white dark:bg-transparent hover:bg-[#dfdbdb] dark:hover:bg-[#555353]">
              <Image
                alt="profile-pic"
                src={user?.profilePicture || "/images/user.svg"}
                height={48}
                width={48}
                className="rounded-full w-12 h-12"
              />
              <div className="w-full">
                <h2 className="font-signika text-sm line-clamp-1">
                  {user?.name}
                </h2>
                <p className="font-poppins text-xs line-clamp-1 break-all max-w-full">
                  <span className="mr-4">
                    <span className="text-[10px]">@</span>
                    {user?.username}
                  </span>
                  {user.bio && (
                    <span className="relative before:absolute before:top-1.5 before:-left-2.5 before:h-1 before:w-1 before:bg-[#555353] dark:before:bg-white before:rounded-full">
                      {user.bio}
                    </span>
                  )}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="h-[calc(100vh-249px)] md:h-[calc(100vh-289px)] flex items-center text-black dark:text-white justify-center font-firasans text-lg">
          Search to see results here.
        </div>
      )}
    </div>
  );
}
