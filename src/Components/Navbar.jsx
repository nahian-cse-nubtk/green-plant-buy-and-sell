"use client";
import AuthContext from "@/Provider/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { FaAngleDown } from "react-icons/fa";

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
    <div className="sticky top-0">
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
            Green World
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1">
                {user?.name} <FaAngleDown/>
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <Link className="btn mr-3" href="/login">
                Login
              </Link>
              <Link className="btn" href="/register">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
