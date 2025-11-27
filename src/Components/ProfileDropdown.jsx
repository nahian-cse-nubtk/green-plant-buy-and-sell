"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProfileDropdown({user,handleLogout}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-50">
      {/* Profile Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 transition"
      >
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="profile"
          className="w-9 h-9 rounded-full border"
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-90 bg-green-50 shadow-lg rounded-xl border -z-20">
          <div className="p-3 border-b">
            <p className="font-medium text-gray-800">{user?.displayName}</p>
            <p className="text-gray-500 text-sm">{user?.email}</p>
          </div>

          <ul className="p-2 space-y-1">

            <li className="border-t pt-2">
              <button onClick={handleLogout} className="w-full text-left px-3 py-2 rounded-lg hover:bg-green-200 text-black">
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
