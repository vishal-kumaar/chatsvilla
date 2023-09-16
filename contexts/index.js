"use client";

import React from "react";
import SidebarProvider from "./sidebar/SidebarProvider";
import ThemeProvider from "./theme/ThemeProvider";
import DropdownProvider from "./dropdown/DropdownProvider";
import SessionTokenProvider from "./sessionToken/SessionTokenProvider";
import ChatListProvider from "./chatList/ChatListProvider";
import UserProvider from "./user/UserProvider";

export default function Contexts({ children }) {
  return (
    <SessionTokenProvider>
      <UserProvider>
        <DropdownProvider>
          <SidebarProvider>
            <ThemeProvider>
              <ChatListProvider>{children}</ChatListProvider>
            </ThemeProvider>
          </SidebarProvider>
        </DropdownProvider>
      </UserProvider>
    </SessionTokenProvider>
  );
}
