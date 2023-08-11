"use client";

import React from "react";
import Image from "next/image";

export default function Dropdown({ options }) {
  return (
    <div
      className={`font-firasans outline-none text-base absolute right-3 top-6 bg-white dark:bg-[#161616] text-black dark:text-white w-fit rounded-lg shadow-2xl overflow-hidden`}>
      {options.map((option, index) => (
        <button
          key={index}
          className="flex items-center gap-2 pl-4 pr-8 py-2 hover:bg-[#DFDBDB] dark:hover:bg-[#494848] w-full whitespace-nowrap"
          onClick={option.callback}>
          {option.icon && (
            <Image
              alt=""
              src={option.icon}
              height={16}
              width={16}
              className="w-4 h-4 invert-0 dark:invert"
            />
          )}
          <p>{option.name}</p>
        </button>
      ))}
    </div>
  );
}
