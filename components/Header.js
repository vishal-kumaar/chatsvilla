"use client";

import React, { useContext } from "react";
import Image from "next/image";
import SidebarContext from "@/contexts/sidebar/SidebarContext";
import { usePathname } from "next/navigation";

export default function Header() {
  const { toggleSidebar } = useContext(SidebarContext);
  const pathname = usePathname();
  const hideHeaderRoute = /\/chat\/(.+)$/;

  if (pathname.match(hideHeaderRoute)) {
    return null;
  }

  return (
    <header className="z-40 bg-transparent text-black dark:text-white px-5 py-2 w-full h-fit block md:hidden">
      <Image
        alt="menu"
        src="/icons/hamburger.svg"
        height={24}
        width={24}
        className="invert-0 dark:invert block w-5 h-5 cursor-pointer"
        onClick={toggleSidebar}
      />
    </header>
  );
}
