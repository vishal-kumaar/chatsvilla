import React, { useContext, useEffect, useState } from "react";
import SocketContext from "./SocketContext";
import io from "socket.io-client";
import UserContext from "../user/UserContext";

export default function SocketProvider({ children }) {
  const [socket, setSocket] = useState(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const socketInstance = io(`http://localhost:4000?userId=${user._id}`);
    setSocket(socketInstance);

    return () => socketInstance.disconnect();
  }, []);
  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
}
