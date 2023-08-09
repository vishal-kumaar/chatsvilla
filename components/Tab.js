"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "@/utils/queryString";

export default function Tab({ options }) {
  const searchParam = useSearchParams();
  const router = useRouter();
  const tab = searchParam.get("tab");

  const handleTab = (tab) => {
    router.replace(queryString({ tab }));
  };

  const tabStyle = (activeTab) => {
    if (tab === activeTab) {
      return "text-blue-500 border-blue-500";
    } else {
      return "text-black border-transparent";
    }
  };

  return (
    <div className="flex flex-nowrap overflow-x-auto max-w-fit mx-auto gap-6 md:gap-14 py-2.5 pl-6 pr-3 font-roboto text-base font-bold">
      {options &&
        options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleTab(option.name)}
            className={`block w-fit flex-auto flex-shrink-0 flex-grow-0 hover:text-blue-500 border-b-2  ${
              tab || index !== 0
                ? tabStyle(option.name)
                : "text-blue-500 border-blue-500"
            }`}>
            {option.name}
            <span className="text-gray-400 ml-1 text-sm">{option.count}</span>
          </button>
        ))}
    </div>
  );
}
