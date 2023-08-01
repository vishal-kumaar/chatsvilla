"use client";

import React from "react";
import SidebarProvider from "./sidebar/SidebarProvider";
import ThemeProvider from "./theme/ThemeProvider";

export default function Contexts({ children }) {
  return (
    <SidebarProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </SidebarProvider>
  );
}
