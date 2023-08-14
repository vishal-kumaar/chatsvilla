"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function UpdatePassword() {
  const [passowrdType, setPasswordType] = useState("password");

  const router = useRouter();

  return (
    <div className="w-full min-h-screen py-14 px-4 sm:px-10 bg-[#f5f3f3] dark:bg-[#161616] flex flex-col gap-y-6 justify-center items-center rounded-r-xl">
      <h1 className="font-signika font-bold text-2xl sm:text-3xl text-[#68647a] dark:text-white mb-5">
        Update Password
      </h1>
      <form className="flex flex-col justify-center gap-y-4 w-full md:w-7/12">
        <div className="flex items-center gap-x-2 bg-[#E9E7FF] px-4 py-1.5 rounded-2xl shadow-md">
          <svg
            className="h-4 w-4 fill-[#807c97] dark:fill-[#161616]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="3 2 18 19">
            <path d="M18 7V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v3H3v14h18V7zM8 4h8v3H8zm11 15H5V9h14z"></path>
            <path d="M11 14.722V17h2v-2.278a2 2 0 1 0-2 0z"></path>
          </svg>
          <input
            type={passowrdType}
            placeholder="Old Password"
            className="bg-transparent text-sm text-[#807c97] dark:text-[#161616] outline-none placeholder:text-[#807c97] dark:placeholder:text-[#161616] font-poppins w-full"
          />
        </div>
        <div className="flex items-center gap-x-2 bg-[#E9E7FF] px-4 py-1.5 rounded-2xl shadow-md">
          <svg
            className="h-4 w-4 fill-[#807c97] dark:fill-[#161616]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="3 2 18 19">
            <path d="M18 7V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v3H3v14h18V7zM8 4h8v3H8zm11 15H5V9h14z"></path>
            <path d="M11 14.722V17h2v-2.278a2 2 0 1 0-2 0z"></path>
          </svg>
          <input
            type={passowrdType}
            placeholder="New Password"
            className="bg-transparent text-sm text-[#807c97] dark:text-[#161616] outline-none placeholder:text-[#807c97] dark:placeholder:text-[#161616] font-poppins w-full"
          />
        </div>
        <div className="flex items-center gap-x-2 bg-[#E9E7FF] px-4 py-1.5 rounded-2xl shadow-md">
          <svg
            className="h-4 w-4 fill-[#807c97] dark:fill-[#161616]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="3 2 18 19">
            <path d="M18 7V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v3H3v14h18V7zM8 4h8v3H8zm11 15H5V9h14z"></path>
            <path d="M11 14.722V17h2v-2.278a2 2 0 1 0-2 0z"></path>
          </svg>
          <input
            type={passowrdType}
            placeholder="Confirm New Password"
            className="bg-transparent text-sm text-[#807c97] dark:text-[#161616] outline-none placeholder:text-[#807c97] dark:placeholder:text-[#161616] font-poppins w-full"
          />
        </div>
        <div class="flex gap-1.5 items-center rounded text-[#68647a] dark:text-white ml-2">
          <input
            type="checkbox"
            onChange={(event) =>
              event.target.checked
                ? setPasswordType("text")
                : setPasswordType("password")
            }
            className="flex justify-center items-center appearance-none rounded-full h-3 w-3 p-1.5 cursor-pointer border border-[#5a4de6] dark:border-white before:text-white before:font-bold before:text-xs checked:bg-[#5a4de6] dark:checked:bg-black checked:before:content-['\2713']"
          />
          <p className="font-firasans text-sm">Show password</p>
        </div>
        <div className="mt-3 flex items-center gap-4 justify-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-[#D570BC] to-[#8B6CE2] hover:from-[#aa6198] hover:to-[#8f72dd] dark:from-[#3b3a3a] dark:to-[#000] dark:hover:from-[#1f1e1e] dark:hover:to-[#131212] text-white py-1 w-24 rounded-2xl text-sm shadow-md font-roboto">
            Save
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="bg-gradient-to-r from-[#D570BC] to-[#8B6CE2] hover:from-[#aa6198] hover:to-[#8f72dd] dark:from-[#3b3a3a] dark:to-[#000] dark:hover:from-[#1f1e1e] dark:hover:to-[#131212] text-white py-1 w-24 rounded-2xl text-sm shadow-md font-roboto">
            Cancal
          </button>
        </div>
      </form>
    </div>
  );
}
