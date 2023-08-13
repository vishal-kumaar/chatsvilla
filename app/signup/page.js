"use client";

import React from "react";
import Link from "next/link";

export default function Signup() {
  return (
    <main className="w-full py-20 px-4 sm:px-10 min-h-screen bg-gradient-to-r from-[#5a4de6] via-[#7d59c5] to-[#a78bf6] dark:from-transparent dark:via-transparent dark:to-transparent">
      <div className="flex shadow-2xl w-full sm:w-10/12 mx-auto h-[30rem]">
        <div className="text-white bg-gradient-to-r from-[#7c70ff] via-[#695cf8] to-[#BC6EC9] dark:from-[#030303] dark:via-[#1f1e1e] dark:to-[#1f1e1e] w-7/12 px-10 pt-32 rounded-l-xl hidden lg:block">
          <h1 className="font-signika text-5xl">Welcome to chatsvilla</h1>
          <p className="font-poppins mt-2 max-w-2xl">
            Connect with friends, family, and colleagues effortlessly, share
            ideas, and stay in sync like never before. Experience smooth and
            seamless conversations with our user-friendly interface and enjoy a
            secure platform that prioritizes your privacy. Say hello to the
            future of chat applications with Chatsvilla
          </p>
        </div>
        <div className="w-full lg:w-5/12 bg-white dark:bg-[#161616] flex flex-col gap-y-6 justify-center items-center h-[30rem] rounded-r-xl">
          <h1 className="font-poppins font-bold text-lg text-[#68647a] dark:text-white">
            USER SIGNUP
          </h1>
          <form className="flex flex-col justify-center gap-y-4 w-9/12">
            <div className="flex items-center gap-x-2 bg-[#E9E7FF] px-3.5 py-1.5 rounded-2xl">
              <svg
                className="w-4 h-4 stroke-[#807c97] dark:stroke-[#161616]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="4 0 24 32">
                <path
                  strokeWidth="2"
                  d="M16 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zM27 32a1 1 0 0 1-1-1v-6.115a6.95 6.95 0 0 0-6.942-6.943h-6.116A6.95 6.95 0 0 0 6 24.885V31a1 1 0 1 1-2 0v-6.115c0-4.93 4.012-8.943 8.942-8.943h6.116c4.93 0 8.942 4.012 8.942 8.943V31a1 1 0 0 1-1 1z"></path>
              </svg>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent text-sm text-[#807c97] dark:text-[#161616] outline-none placeholder:text-[#807c97] dark:placeholder:text-[#161616] font-poppins"
              />
            </div>
            <div className="flex items-center gap-x-2 bg-[#E9E7FF] px-3.5 py-1.5 rounded-2xl">
              <p className="text-[#807c97] dark:text-black font-signika">@</p>
              <input
                type="text"
                placeholder="Username"
                className="w-full bg-transparent text-sm text-[#807c97] dark:text-[#161616] outline-none placeholder:text-[#807c97] dark:placeholder:text-[#161616] font-poppins"
              />
            </div>
            <div className="flex items-center gap-x-2 bg-[#E9E7FF] px-3.5 py-1.5 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                className="w-4 h-4 fill-none stroke-[#807c97] dark:stroke-black">
                <path
                  strokeWidth="10"
                  d="M123.25 24.192c0-.018 0-.034-.005-.052s-.007-.063-.009-.094a1.734 1.734 0 0 0-.083-.408c-.006-.018 0-.037-.011-.055s-.01-.015-.013-.023a1.734 1.734 0 0 0-.227-.407c-.021-.028-.043-.053-.066-.08a1.755 1.755 0 0 0-.31-.294c-.012-.009-.022-.02-.034-.028a1.744 1.744 0 0 0-.414-.2c-.034-.012-.068-.022-.1-.032a1.733 1.733 0 0 0-.474-.073H6.5a1.733 1.733 0 0 0-.474.073c-.035.01-.068.02-.1.032a1.744 1.744 0 0 0-.414.2c-.012.008-.022.019-.034.028a1.755 1.755 0 0 0-.31.294c-.022.027-.045.052-.066.08a1.734 1.734 0 0 0-.227.407c0 .008-.01.015-.013.023s-.005.037-.011.055a1.734 1.734 0 0 0-.083.408c0 .032-.009.063-.009.094s-.005.034-.005.052v79.615c0 .023.006.045.007.068a1.737 1.737 0 0 0 .019.188c.008.051.015.1.027.152a1.74 1.74 0 0 0 .056.179c.017.047.033.094.054.139a1.729 1.729 0 0 0 .093.172c.024.04.048.081.075.119a1.743 1.743 0 0 0 .125.152c.033.036.066.072.1.106.021.019.037.042.059.061s.036.017.052.03a1.736 1.736 0 0 0 .452.263c.035.014.071.022.107.033a1.732 1.732 0 0 0 .488.085c.012 0 .023.006.035.006H121.501c.012 0 .023-.006.034-.006a1.732 1.732 0 0 0 .489-.085c.035-.011.07-.019.1-.033a1.736 1.736 0 0 0 .453-.263c.016-.013.036-.017.052-.03s.038-.042.059-.061c.036-.034.069-.069.1-.106a1.743 1.743 0 0 0 .125-.152c.027-.038.051-.078.075-.119a1.729 1.729 0 0 0 .093-.172c.021-.045.037-.092.054-.139a1.74 1.74 0 0 0 .056-.179c.012-.05.019-.1.027-.152a1.737 1.737 0 0 0 .019-.188c0-.023.007-.045.007-.068zM45.8 60.316l17.058 14.677a1.751 1.751 0 0 0 2.283 0L82.2 60.316l35.512 41.741H10.289zM8.25 99.052V28.007l34.9 30.026zm76.6-41.019 34.9-30.026v71.045zm31.931-32.091L81.276 56.493c-.006.005-.014.008-.02.014l-.019.02L64 71.358 46.763 56.527l-.019-.02-.02-.014-35.507-30.551z"
                />
              </svg>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent text-sm text-[#807c97] dark:text-[#161616] outline-none placeholder:text-[#807c97] dark:placeholder:text-[#161616] font-poppins"
              />
            </div>
            <div className="flex items-center gap-x-2 bg-[#E9E7FF] px-3.5 py-1.5 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                className="w-4 h-4 fill-none stroke-[#807c97] dark:stroke-black">
                <path
                  strokeWidth="10"
                  d="M112.863 100.6a3.037 3.037 0 0 1-2.6-1.49l-4.016-6.961-4.984 2.871a2.982 2.982 0 0 1-1.491.4 3 3 0 0 1-2.9-3.777 2.966 2.966 0 0 1 1.4-1.821l3.241-1.875a2.01 2.01 0 0 0 .735-2.735L92.264 67.93a5.933 5.933 0 0 0-5.19-2.983c-.517 0-5.934 1-8.128 1a26.082 26.082 0 0 1-4.478-.386 33.22 33.22 0 0 1-6.837-2.057 27.519 27.519 0 0 1-16.26-26.037 28.729 28.729 0 0 1 1.82-8.91 27.668 27.668 0 0 1 13.482-14.812 27.065 27.065 0 0 1 12.15-2.853 27.525 27.525 0 0 1 19.658 46.861 6.024 6.024 0 0 0-.995 7.217l9.96 17.25a2.005 2.005 0 0 0 1.217.935 3.941 3.941 0 0 0 1.505-.211l3.552-2.05a3 3 0 0 1 4.1 1.086 3.082 3.082 0 0 1 .309 2.277 3 3 0 0 1-1.41 1.84l-5.282 3.049 4.019 6.954a2.933 2.933 0 0 1 .3 2.275 2.99 2.99 0 0 1-2.891 2.222zM78.856 16.9a21.518 21.518 0 0 0-19.107 11.669c-.285.586-2.858 6.071-2.314 11.542a22.438 22.438 0 0 0 2.811 9.059 21.229 21.229 0 0 0 6.774 7.194 23.062 23.062 0 0 0 11.93 3.576 21.522 21.522 0 0 0-.094-43.04z"
                />
                <path
                  strokeWidth="10"
                  d="M67.084 66.531a13.75 13.75 0 0 1-.5.92 21.356 21.356 0 0 1-13.073 10.024 21.718 21.718 0 0 1-5.616.745 21.525 21.525 0 1 1 .125-43.049c.169 0 .342 0 .532.006a58.422 58.422 0 0 1 1.237-5.95s-1.371-.067-1.934-.067a27.152 27.152 0 0 0-23.741 13.77 27.615 27.615 0 0 0 4.006 32.864 6.026 6.026 0 0 1 .954 7.236l-10.08 17.459a2.994 2.994 0 0 1-2.054 1.455 5.808 5.808 0 0 1-2.456-.637l-1.421-1.164a2.09 2.09 0 0 0-2.305-.2 1.978 1.978 0 0 0-.954 2.059l2.257 13.398a1.962 1.962 0 0 0 .955 1.41 5.165 5.165 0 0 0 1.714.148l12.744-4.758a2 2 0 0 0 0-3.742s-2.916-1.078-3.509-2.452a2.817 2.817 0 0 1 .225-2.511l10.055-17.423a6 6 0 0 1 5.194-2.944 6.2 6.2 0 0 1 1.557.2 27.321 27.321 0 0 0 6.947.9A27.6 27.6 0 0 0 71.9 70.253c.291-.514.994-1.948.994-1.948a30.781 30.781 0 0 1-5.81-1.774zM63.2 33.781c-.542-.365-1.88-1.138-1.88-1.138a18.62 18.62 0 0 0-.926 6.509 21.346 21.346 0 0 1 8.895 15.094 36.944 36.944 0 0 0 6.132 2.1A27.523 27.523 0 0 0 63.2 33.781z"
                />
              </svg>
              <select className="w-full bg-transparent outline-none text-[#807c97] dark:text-[#3d3d3d] -ml-1">
                <option value="unknown" disabled selected>
                  Gender
                </option>
                <option value="Male" className="text-black">
                  Male
                </option>
                <option value="Female" className="text-black">
                  Female
                </option>
                <option value="Unknown" className="text-black">
                  Don't want to specify
                </option>
              </select>
            </div>
            <div className="flex items-center gap-x-2 bg-[#E9E7FF] px-4 py-1.5 rounded-2xl">
              <svg
                className="h-4 w-4 fill-[#807c97] dark:fill-[#161616]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="3 2 18 19">
                <path d="M18 7V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v3H3v14h18V7zM8 4h8v3H8zm11 15H5V9h14z"></path>
                <path d="M11 14.722V17h2v-2.278a2 2 0 1 0-2 0z"></path>
              </svg>
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent text-sm text-[#807c97] dark:text-[#161616] outline-none placeholder:text-[#807c97] dark:placeholder:text-[#161616] font-poppins"
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#D570BC] to-[#8B6CE2] hover:from-[#aa6198] hover:to-[#8f72dd] dark:from-[#3b3a3a] dark:to-[#000] dark:hover:from-[#1f1e1e] dark:hover:to-[#131212] text-white w-fit px-7 py-1 rounded-2xl text-sm mx-auto mt-2">
              SIGNUP
            </button>
          </form>
          <p className="font-poppins text-sm text-black dark:text-white mt-2">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-bold text-[#5a4de6] dark:text-white">
              login
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
