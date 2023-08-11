import React, { useState } from "react";
import DropdownContext from "./DropdownContext";

export default function DropdownProvider({ children }) {
  const [dropdown, setDropdown] = useState({});

  const isDropdownOpen = (dropdownId) => {
    if (dropdown[dropdownId]) {
      return true;
    } else {
      return false;
    }
  };

  const toggleDropdown = (dropdownId) => {
    if (dropdown[dropdownId]) {
      setDropdown({ ...dropdown, [dropdownId]: false });
    } else {
      setDropdown({ [dropdownId]: true });
    }
  };

  const closeDropdown = (dropdownId) => {
    setTimeout(() => {
      setDropdown({ ...dropdown, [dropdownId]: false });
    }, 500);
  };

  const removeDropdown = () => {
    setDropdown({});
  };

  return (
    <DropdownContext.Provider
      value={{
        isDropdownOpen,
        toggleDropdown,
        closeDropdown,
        removeDropdown,
      }}>
      {children}
    </DropdownContext.Provider>
  );
}
