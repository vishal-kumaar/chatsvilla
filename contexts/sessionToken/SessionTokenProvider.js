import React from "react";
import SessionTokenContext from "./SessionTokenContext";

export default function SessionTokenProvider({ children }) {
  const setSession = (sessionToken, expiresIn) => {
    if (expiresIn) {
      document.cookie = `sessionToken=${sessionToken}; expires=${new Date(
        Date.now() + parseInt(expiresIn) * 24 * 60 * 60 * 1000
      )}; path="/"`;
    } else {
      sessionStorage.setItem("sessionToken", `Bearer ${sessionToken}`);
    }
  };

  const getCookie = (key) => {
    const cookieList = document.cookie.split("; ");
    for (let val of cookieList) {
      const cookie = val.split("=");
      if (cookie[0] === key) {
        return cookie[1];
      }
    }
  };

  const getSessionToken = () => {
    if (typeof window !== "undefined") {
      const sessionToken =
        sessionStorage.getItem("sessionToken") || getCookie("sessionToken");
      return sessionToken;
    }
  };

  const removeSession = () => {
    const pastDate = new Date(0).toUTCString();
    window.document.cookie = `sessionToken=; expires=${pastDate}; path=/;`;
    sessionStorage.removeItem("sessionToken");
  };
  return (
    <SessionTokenContext.Provider
      value={{ setSession, getSessionToken, removeSession }}>
      {children}
    </SessionTokenContext.Provider>
  );
}
