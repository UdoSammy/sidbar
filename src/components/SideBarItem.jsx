"use client";

import Link from "next/link";
import { useContext } from "react";
import { SidebarContext } from "./SideBar";

function SideBarItem({ icon, text, alert, active, href }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <Link href={`${href}`}>
      <li
        className={`relative flex items-center justify-start space-x-3 py-3 px-2 rounded-lg  cursor-pointer hover:bg-gray-200 transition-colors group ${
          active ? "bg-gray-200" : ""
        }`}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-gray-300 ${
              expanded ? "" : "top-2"
            }`}
          />
        )}

        {expanded && (
          <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-white text-gray-900 invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover: -translate-x-0`}>
            {text}
          </div>
        )}
      </li>
    </Link>
  );
}

export default SideBarItem;
