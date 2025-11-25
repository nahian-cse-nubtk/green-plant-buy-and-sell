"use client"
import AuthContext from "@/Provider/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";

export default function Navbar() {
  const {user,signOutUser} = useContext(AuthContext)

  const handleLogout =()=>{
    signOutUser()
    .then(()=>{
      fetch("/api/logout", {
    method: "POST",
  });
  window.location.href = "/login";
    })

  }
  const links =<>
   <Link className="mr-3" href='/'>Home</Link>
   <Link className="mr-3" href='/addProduct'>Add Product</Link>
   <Link href='/allProducts'>All Plant</Link>
  </>
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
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
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">

          {
            user?<button onClick={handleLogout} className="btn">Logout</button>: <div>
              <Link className="btn mr-3" href='/login'>Login</Link>
            <Link className="btn" href='/register'>Register</Link>

            </div>

          }
        </div>

      </div>

    </div>
  );
}
