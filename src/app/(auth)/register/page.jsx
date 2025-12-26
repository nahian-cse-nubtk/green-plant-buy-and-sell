"use client";
import AuthContext from "@/Provider/AuthContext";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

export default function Page() {
  const { createUser, googleSignIn } = useContext(AuthContext);
  const router = useRouter();

  const handleCreateUser =  (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
    .then(async(result)=>{
      const idToken = result.user.getIdToken();
    fetch("/api/setCookie", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: idToken }),
  });
    toast('Registration Successful')
    await new Promise(r => setTimeout(r, 300));
      router.replace('/');
    })

  };

  const handleGoogleSignIn =() => {
    googleSignIn()
    .then(async(result)=>{
      const idToken =result.user.getIdToken();
     fetch("/api/setCookie", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: idToken }),
  });

    await new Promise(r => setTimeout(r, 300));
      router.replace('/');

    })

  };

  return (
    <div className="my-10 flex md:flex-row flex-col-reverse justify-center items-center gap-10">
      <div className=" bg-base-100 w-full max-w-sm shadow-xl">
        <h1 className='text-4xl my-3 text-center font-bold'>Register Now!</h1>
        <div className="card-body">
          <form onSubmit={handleCreateUser}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                required
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                required
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <button className="btn bg-green-700 text-white hover:bg-green-800 rounded-md transition mt-4">Register</button>
            </fieldset>
          </form>

          <button
            onClick={handleGoogleSignIn}
            className="btn bg-green-700 text-white hover:bg-green-800 rounded-md transition"
          >
           <FcGoogle/> Login with Google
          </button>
          <p>Already have an account? <Link className="text-green-700 underline" href='/login'>Login Now</Link></p>
        </div>

      </div>
       <div>
             <Image
            src="/register.webp"
            alt="Login image"
            width={400}
            height={300}
            priority
          />
          </div>
    </div>
  );
}
