import React from "react";

export const metadata = {
  title: "404 Page Not Found",
};

export default function Custom404() {
  return (
    <section className="bg-white dark:bg-black text-xl text-black dark:text-white font-firasans flex items-center justify-center h-[100vh]">
      <div className="flex items-center gap-5">
        <h1 className="font-signika text-2xl">404</h1>
        <div className="h-10 w-px bg-gray-400"></div>
        <p className="font-roboto text-base">This page could not be found.</p>
      </div>
    </section>
  );
}
