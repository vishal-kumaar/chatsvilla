"use client";

import React, { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";

export default function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const isDark = localStorage.getItem("dark") === "true";

    if (isDark) {
      localStorage.setItem("dark", "false");
      setIsDark(false);
    } else {
      localStorage.setItem("dark", "true");
      setIsDark(true);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDark(localStorage.getItem("dark") === "true");
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isDark) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
