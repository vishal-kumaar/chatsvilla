import React, { useContext, useEffect, useState } from "react";
import UserContext from "./UserContext";
import SessionTokenContext from "../sessionToken/SessionTokenContext";
import getProfile from "@/apis/user/getProfile";
import { useRouter } from "next/navigation";

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const { getSessionToken } = useContext(SessionTokenContext);
  const router = useRouter();

  const getUser = async () => {
    const res = await getProfile(getSessionToken());

    if (res.success) {
      setUser(res.user);
    } else {
      router.replace("/login");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}
