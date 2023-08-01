"use client";

import React from 'react'
import SidebarProvider from './sidebar/SidebarProvider';

export default function Contexts({children}) {
  return (
    <SidebarProvider>
      {children}
    </SidebarProvider>
  )
}
