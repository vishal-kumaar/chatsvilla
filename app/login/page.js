"use client";

import Link from "next/link";
import React, { useContext, useState } from "react";
import login from "@/apis/auth/login";
import { toast } from "react-hot-toast";
import ThemeContext from "@/contexts/theme/ThemeContext";
import SessionTokenContext from "@/contexts/sessionToken/SessionTokenContext";

export default function Login() {
  const { isDark } = useContext(ThemeContext);
  const { setSession } =
    useContext(SessionTokenContext);
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [passowrdType, setPasswordType] = useState("password");
  const updateUserData = (fieldName, value) => {
    setUserData({
      ...userData,
      [fieldName]: value,
    });
  };

  const formSubmit = async (event) => {
    event.preventDefault();

    const response = await login(userData);

    if (response?.success) {
      toast.success(response.message, {
        duration: 3000,
        position: "top-center",
        style: {
          borderRadius: "10px",
          background: isDark ? "#333" : "#fff",
          color: isDark ? "#fff" : "#000",
        },
      });
      setSession(response.token.value, response.token.expiresIn);
      setUserData({
        username: "",
        password: "",
      });
    } else {
      toast.error(response?.message, {
        duration: 3000,
        position: "top-center",
        style: {
          borderRadius: "10px",
          background: isDark ? "#333" : "#fff",
          color: isDark ? "#fff" : "#000",
        },
      });
    }
  };
  return (
    <main className="w-full flex items-center py-10 px-4 sm:px-10 min-h-screen bg-gradient-to-r from-[#5a4de6] via-[#7d59c5] to-[#a78bf6] dark:from-transparent dark:via-transparent dark:to-transparent">
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
            USER LOGIN
          </h1>
          <form
            className="flex flex-col justify-center gap-y-4 w-9/12"
            onSubmit={formSubmit}>
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
                placeholder="Email or Username"
                className="bg-transparent text-sm text-[#807c97] dark:text-[#161616] outline-none placeholder:text-[#807c97] dark:placeholder:text-[#161616] font-poppins w-full"
                required
                onChange={(event) =>
                  updateUserData("username", event.target.value)
                }
                value={userData.username}
              />
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
                type={passowrdType}
                placeholder="Password"
                className="bg-transparent text-sm text-[#807c97] dark:text-[#161616] outline-none placeholder:text-[#807c97] dark:placeholder:text-[#161616] font-poppins w-full"
                required
                onChange={(event) =>
                  updateUserData("password", event.target.value)
                }
                value={userData.password}
              />
            </div>
            <div className="flex justify-between gap-x-1 px-1 text-[#68647a] dark:text-white">
              <div className="flex gap-1.5 items-center rounded">
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
              <p className="font-firasans text-sm cursor-pointer">
                Forgot password?
              </p>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#D570BC] to-[#8B6CE2] hover:from-[#aa6198] hover:to-[#8f72dd] dark:from-[#3b3a3a] dark:to-[#000] dark:hover:from-[#1f1e1e] dark:hover:to-[#131212] text-white w-fit px-7 py-1 rounded-2xl text-sm mx-auto mt-2 font-ro">
              LOGIN
            </button>
          </form>
          <p className="font-poppins text-sm text-black dark:text-white mt-2">
            Don{"\u0027"}t have an account?{" "}
            <Link
              href="/signup"
              className="font-bold text-[#5a4de6] dark:text-white">
              signup
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
