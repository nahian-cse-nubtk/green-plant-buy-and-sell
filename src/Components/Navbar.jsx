"use client";
import AuthContext from "@/Provider/AuthContext";
import Link from "next/link";

import React, { useContext } from "react";

import ProfileDropdown from "./ProfileDropdown";

export default function Navbar() {
  const { user, signOutUser } = useContext(AuthContext);

  const handleLogout = () => {
    signOutUser().then(() => {
      fetch("/api/logout", {
        method: "POST",
      });
      window.location.href = "/login";
    });
  };
  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        {" "}
        <Link href="/addProduct">Add Product</Link>
      </li>
      <li>
        <Link href="/allProducts">All Plant</Link>
      </li>
      <li>
        <Link href="/manageProducts">Manage Products</Link>
      </li>
    </>
  );
  return (
    <div className="sticky top-0 ">
      <div className="navbar  bg-linear-to-r from-green-600 from-10% via-green-500 via-30% to-emerald-400 to-90% shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl">
            🌿Green World
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? <ProfileDropdown user={user} handleLogout={handleLogout}/> :<div>
              <Link className="mr-3 px-3 py-3 bg-green-700 text-white hover:bg-green-800 rounded-md transition" href="/login">
                Login
              </Link>
              <Link className="px-3 py-3 bg-green-700 text-white hover:bg-green-800 rounded-md transition" href="/register">
                Register
              </Link>
            </div>
          }
        </div>
      </div>
    </div>
  );
}
