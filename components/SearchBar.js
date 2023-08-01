import React from "react";
import Image from "next/image";

export default function SearchBar() {
  return (
    <form className="flex gap-3 bg-[#f5f3f3] p-3.5 rounded-lg">
      <Image
        alt=""
        height={20}
        width={20}
        src="/icons/search.svg"
        className=""
      />
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent outline-none border-none font-poppins text-sm placeholder:text-black text-black"
      />
    </form>
  );
}
