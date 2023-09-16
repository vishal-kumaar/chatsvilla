"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "@/utils/queryString";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const handleForm = (event) => {
    event.preventDefault();
    router.replace(
      queryString({
        query: input,
      })
    );
  };

  useEffect(() => {
    if (query) {
      setInput(query);
    }
  }, []);

  return (
    <form
      className="flex gap-3 bg-[#f5f3f3] dark:bg-[#2B2B2B] p-3.5 rounded-lg"
      onSubmit={handleForm}>
      <Image
        alt=""
        height={20}
        width={20}
        src="/icons/search.svg"
        className="invert-0 dark:invert"
      />
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent w-full outline-none border-none font-poppins text-sm placeholder:text-black dark:placeholder:text-white text-black dark:text-white"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
    </form>
  );
}
