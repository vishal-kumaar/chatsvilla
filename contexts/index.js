"use client";

import React from "react";
import SidebarProvider from "./sidebar/SidebarProvider";
import ThemeProvider from "./theme/ThemeProvider";
import DropdownProvider from "./dropdown/DropdownProvider";
import SessionTokenProvider from "./sessionToken/SessionTokenProvider";
import ChatListProvider from "./chatList/ChatListProvider";
import UserProvider from "./user/UserProvider";
import SocketProvider from "./socket/SocketProvider";

export default function Contexts({ children }) {
  return (
    <SessionTokenProvider>
      <UserProvider>
        <SocketProvider>
          <DropdownProvider>
            <SidebarProvider>
              <ThemeProvider>
                <ChatListProvider>{children}</ChatListProvider>
              </ThemeProvider>
            </SidebarProvider>
          </DropdownProvider>
        </SocketProvider>
      </UserProvider>
    </SessionTokenProvider>
  );
}
