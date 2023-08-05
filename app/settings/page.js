"use client";

import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeContext from "@/contexts/theme/ThemeContext";

export default function Settings() {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <section className="w-full flex flex-col items-center p-9">
      <Image
        alt="user-profile"
        src="/images/user.svg"
        height={160}
        width={160}
        className="w-40 h-40 rounded-full"
      />
      <div className="text-2xl font-signika mt-4 text-black dark:text-white">
        John Cena
      </div>
      <div className="text-lg font-firasans text-gray-500 dark:text-[#bdbbbb]">
        @official_johncena
      </div>
      <div className="w-full mt-10 mx-8 font-poppins sm:mx-16 md:mx-24 lg:mx-36 xl:mx-56 2xl:mx-96 text-gray-700 dark:text-white">
        <Link
          href="/settings/update/profile"
          className="flex items-center justify-between shadow-md rounded-2xl px-4 py-1.5 my-4 bg-gray-100 dark:bg-black w-8/12 mx-auto">
          <div className="flex items-center gap-3">
            <svg
              className="w-5 h-5 stroke-[#4e596b] dark:stroke-white stroke-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="4 0 24 32">
              <path d="M16 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zM27 32a1 1 0 0 1-1-1v-6.115a6.95 6.95 0 0 0-6.942-6.943h-6.116A6.95 6.95 0 0 0 6 24.885V31a1 1 0 1 1-2 0v-6.115c0-4.93 4.012-8.943 8.942-8.943h6.116c4.93 0 8.942 4.012 8.942 8.943V31a1 1 0 0 1-1 1z"></path>
            </svg>
            <div>Edit Profile</div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-6 h-6 fill-none stroke-[#4e596b] dark:stroke-white stroke-2">
            <g data-name="92-Arrow Right">
              <path d="M16 32a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm0-30a14 14 0 1 0 14 14A14 14 0 0 0 16 2z"></path>
              <path d="M13.71 24.71 12.3 23.3l7.29-7.3-7.3-7.29L13.7 7.3l8 8a1 1 0 0 1 0 1.41z"></path>
            </g>
          </svg>
        </Link>
        <Link
          href="settings/update/password"
          className="flex items-center justify-between shadow-md rounded-2xl px-4 py-1.5 my-4 bg-gray-100 dark:bg-black w-8/12 mx-auto">
          <div className="flex items-center gap-3">
            <svg
              className="h-5 w-5 fill-[#4e596b] dark:fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="3 2 18 19">
              <path d="M18 7V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v3H3v14h18V7zM8 4h8v3H8zm11 15H5V9h14z"></path>
              <path d="M11 14.722V17h2v-2.278a2 2 0 1 0-2 0z"></path>
            </svg>
            <div>Update Password</div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-6 h-6 fill-none stroke-[#4e596b] dark:stroke-white stroke-2">
            <g data-name="92-Arrow Right">
              <path d="M16 32a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm0-30a14 14 0 1 0 14 14A14 14 0 0 0 16 2z"></path>
              <path d="M13.71 24.71 12.3 23.3l7.29-7.3-7.3-7.29L13.7 7.3l8 8a1 1 0 0 1 0 1.41z"></path>
            </g>
          </svg>
        </Link>
        <Link
          href="/settings/friends/requests"
          className="flex items-center justify-between shadow-md rounded-2xl px-4 py-1.5 my-4 bg-gray-100 dark:bg-black w-8/12 mx-auto">
          <div className="flex items-center gap-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              x="0px"
              y="0px"
              enable-background="new 0 0 100 100"
              viewBox="28.92 31.96 51.55 37.54"
              className="w-6 h-6 fill-none stroke-[#4e596b] dark:stroke-white stroke-[3]">
              <g>
                <g>
                  <g>
                    <g>
                      <path d="M75.036,52.356c4.69,1.377,3.886,4.781,3.872,7.063h-11.7c-0.421-1.381-1.46-2.671-3.942-3.396l-0.785-0.235      c-3.284-0.955-5.042-1.471-5.502-2.506c-0.112-0.373-0.078-0.787,1.017-1.185c3.519-1.024,5.302-1.56,5.723-2.878h0.222      c-0.06-0.053-0.118-0.105-0.173-0.168c-1.739-1.677-3.067-4.949-3.067-7.591c0-3.736,2.86-6.191,5.566-6.191      c2.705,0,5.427,2.652,5.427,6.393c0,2.642-1.478,5.811-3.293,7.432C68.775,50.619,70.815,51.118,75.036,52.356z"></path>
                    </g>
                    <g>
                      <g>
                        <path d="M66.957,68.003H30.61c-0.022-0.364-0.045-0.728-0.089-1.157c-0.112-1.436-0.224-2.914,0.178-4.265       c0.491-1.585,1.764-2.978,4.71-3.836l1.139-0.364c5.179-1.479,7.948-2.314,8.863-4.265l0.291-0.491l-0.022-0.622       c-0.067-0.043-0.111-0.085-0.201-0.193c-0.313-0.321-0.625-0.643-0.916-1.027c-2.009-2.552-3.438-6.494-3.438-9.75       c0-4.159,3.082-8.573,7.68-8.573c3.595,0,7.458,3.558,7.458,8.872c0,3.387-1.764,7.585-4.175,10.05       c-0.157,0.173-0.335,0.321-0.491,0.472l-0.29,0.258l0.089,0.387c0.625,2.441,3.438,3.277,9.086,4.884l1.161,0.364       c2.925,0.858,4.309,2.273,4.912,3.836h0.022c0.559,1.521,0.491,3.173,0.424,4.715C66.979,67.531,66.979,67.788,66.957,68.003z"></path>
                      </g>
                    </g>
                    <g></g>
                  </g>
                </g>
              </g>
            </svg>
            <div>Friend Requests</div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-6 h-6 fill-none stroke-[#4e596b] dark:stroke-white stroke-2">
            <g data-name="92-Arrow Right">
              <path d="M16 32a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm0-30a14 14 0 1 0 14 14A14 14 0 0 0 16 2z"></path>
              <path d="M13.71 24.71 12.3 23.3l7.29-7.3-7.3-7.29L13.7 7.3l8 8a1 1 0 0 1 0 1.41z"></path>
            </g>
          </svg>
        </Link>
        <button
          className="flex items-center justify-between shadow-md rounded-2xl px-4 py-1.5 my-4 bg-gray-100 dark:bg-black w-8/12 mx-auto"
          onClick={toggleTheme}>
          <div className="flex items-center gap-2.5">
            {isDark ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="7.25 7.25 49.5 49.5"
                  xmlSpace="preserve"
                  className="fill-none stroke-white stroke-[4] w-6 h-6">
                  <circle cx="32" cy="32" r="12" />
                  <path d="M39.682 35.636A8.483 8.483 0 0 1 34.2 40.21M32 16V8M40.907 16.572l2.186-3.785M48.214 23.546l3.785-2.185M48 32h8M49 41.815 52.785 44M42.269 48.214l2.185 3.785M32 48v8M23.093 47.428l-2.186 3.785M17.358 41.361l-3.785 2.185M16 32H8M18.144 24l-3.785-2.185M24.454 17.358l-2.185-3.785" />
                </svg>
                <div>Light Mode</div>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="fill-[#4e596b] w-6 h-6">
                  <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18A8,8,0,0,1,9.791,4.317a9.967,9.967,0,0,0,5.032,15.159A7.947,7.947,0,0,1,12,20Z" />
                </svg>
                <div>Dark Mode</div>
              </>
            )}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-6 h-6 fill-none stroke-[#4e596b] dark:stroke-white stroke-2">
            <g data-name="92-Arrow Right">
              <path d="M16 32a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm0-30a14 14 0 1 0 14 14A14 14 0 0 0 16 2z"></path>
              <path d="M13.71 24.71 12.3 23.3l7.29-7.3-7.3-7.29L13.7 7.3l8 8a1 1 0 0 1 0 1.41z"></path>
            </g>
          </svg>
        </button>
      </div>
    </section>
  );
}
