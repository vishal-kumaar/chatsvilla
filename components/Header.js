"use client";

import React, { useContext } from "react";
import Image from "next/image";
import SidebarContext from "@/contexts/sidebar/SidebarContext";

export default function Header() {
  const { toggleSidebar } = useContext(SidebarContext);

  return (
    <header className="z-40 bg-transparent text-black dark:text-white px-5 py-2 sticky top-0 left-0 w-full h-fit block md:hidden">
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
