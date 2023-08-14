"use client";

import React, { useContext } from "react";
import Image from "next/image";
import SidebarContext from "@/contexts/sidebar/SidebarContext";

export default function Header({ className }) {
  const { toggleSidebar } = useContext(SidebarContext);

  return (
    <header
      className={`w-full h-14 flex items-center md:hidden ${className}`}>
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
