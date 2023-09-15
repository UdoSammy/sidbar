"use client";

import { createContext, useState } from "react";
import { HiBars3BottomLeft, HiBars3BottomRight } from "react-icons/hi2";

export const SidebarContext = createContext();

function SideBar({ children }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className={` bg-white h-screen ps-5 overflow-hidden ${expanded ? 'w-60' : '30'}`}>
      <div className="flex items-center p-4-3 pb-2 mt-5 justify-between me-3">
        <h1
          className={` overflow-hidden transition-all duration-75 ${
            expanded ? "w-32" : "w-0"
          }`}
        >
          Navigation
        </h1>

        <button
          onClick={() => setExpanded((show) => !show)}
          className="bg-gray-100 py-1.5 px-2 hover:bg-gray-200"
        >
          {expanded ? <HiBars3BottomRight /> : <HiBars3BottomLeft />}
        </button>
      </div>

      <SidebarContext.Provider value={{expanded}}>
        <ul>{children}</ul>
      </SidebarContext.Provider>
    </div>
  );
}

export default SideBar;
