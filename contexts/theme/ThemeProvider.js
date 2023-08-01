"use client";

import React, { useEffect } from "react";
import ThemeContext from "./ThemeContext";

export default function ThemeProvider({ children }) {
  const toggleTheme = () => {
    const isDark = localStorage.getItem("dark") === "true";

    if (isDark) {
      localStorage.setItem("dark", "false");
      document.body.classList.remove("dark");
    } else {
      localStorage.setItem("dark", "true");
      document.body.classList.add("dark");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDark = localStorage.getItem("dark") === "true";
      if (isDark) {
        document.body.classList.add("dark");
      }
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
