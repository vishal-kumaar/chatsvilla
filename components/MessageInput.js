import Image from "next/image";
import React from "react";

export default function MessageInput() {
  return (
    <form className="sticky z-50 bottom-0 right-0 flex items-center px-3 py-2 bg-white dark:bg-[#161616] border-l dark:border-gray-800">
      <div className="bg-[#F5F3F3]  dark:bg-[#2B2B2B] text-black dark:text-white flex items-center w-full px-3 py-2">
        <textarea
          rows={1}
          onInput={(event) => {
            event.target.style.height = "auto";
            event.target.style.height = event.target.scrollHeight + "px";
          }}
          placeholder="Type your message..."
          className="bg-transparent font-poppins text-sm w-full outline-none px-2 placeholder:text-black dark:placeholder:text-white"></textarea>
        <Image
          alt="options"
          src="/icons/link.svg"
          height={20}
          width={20}
          className="w-5 h-5 cursor-pointer invert-0 dark:invert"
        />
      </div>
      <button type="submit" className="bg-[#5a4de6] dark:bg-black px-3 py-1.5">
        <Image
          alt="send"
          src="/icons/send.svg"
          height={24}
          width={24}
          className="w-6 h-6 invert"
        />
      </button>
    </form>
  );
}
