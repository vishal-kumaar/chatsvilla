import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Dropdown({ options }) {
  return (
    <div
      className={`font-firasans outline-none text-base absolute right-3 top-6 bg-white dark:bg-[#161616] text-black dark:text-white w-40 rounded-lg shadow-2xl overflow-hidden`}>
      {options.map((option, index) => (
        <>
          {option.link ? (
            <Link
              key={index}
              href={option.link}
              className="flex items-center gap-2 px-4 py-2 hover:bg-[#DFDBDB] dark:hover:bg-[#494848] w-full">
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
            </Link>
          ) : (
            <button
              key={index}
              className="flex items-center gap-2 px-4 py-2 hover:bg-[#DFDBDB] dark:hover:bg-[#494848] w-full">
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
          )}
        </>
      ))}
    </div>
  );
}
