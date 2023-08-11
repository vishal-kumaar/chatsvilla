"use client";

import React from "react";
import SidebarProvider from "./sidebar/SidebarProvider";
import ThemeProvider from "./theme/ThemeProvider";
import DropdownProvider from "./dropdown/DropdownProvider";

export default function Contexts({ children }) {
  return (
    <DropdownProvider>
      <SidebarProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </SidebarProvider>
    </DropdownProvider>
  );
}
