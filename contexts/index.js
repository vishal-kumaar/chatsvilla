"use client";

import React from "react";
import SidebarProvider from "./sidebar/SidebarProvider";
import ThemeProvider from "./theme/ThemeProvider";
import DropdownProvider from "./dropdown/DropdownProvider";
import SessionTokenProvider from "./sessionToken/SessionTokenProvider";

export default function Contexts({ children }) {
  return (
    <SessionTokenProvider>
      <DropdownProvider>
        <SidebarProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </SidebarProvider>
      </DropdownProvider>
    </SessionTokenProvider>
  );
}
