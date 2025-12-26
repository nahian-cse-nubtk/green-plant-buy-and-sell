"use client";
import AuthContext from '@/Provider/AuthContext'
import React, { useContext } from 'react'
import { useRouter } from "next/navigation";
import Link from 'next/link';
import toast from 'react-hot-toast';
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

export default function Page() {
  const {signInUser,googleSignIn } = useContext(AuthContext)
  const router = useRouter();
  const handleLogin =(e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password =e.target.password.value;
    signInUser(email,password)
    .then(async(result)=>{
    const idToken = result.user.getIdToken();
    fetch("/api/setCookie", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: idToken }),
  });
  toast('Login Successful')
    await new Promise(r => setTimeout(r, 300));
      router.replace('/');

    })


  }
  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(async(result)=>{
      const idToken = result.user.getIdToken();
    fetch("/api/setCookie", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: idToken }),
  });
    toast('Login Successful')
    await new Promise(r => setTimeout(r, 300));
      router.replace('/');
    })


  };
  return (
    <div className='my-10 flex md:flex-row flex-col-reverse justify-center items-center gap-5'>
       <div className="   bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
        <h1 className='text-4xl my-3 text-center font-bold'>Login Now!</h1>
      <div className="card-body">
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset">
          <label className="label">Email</label>
          <input required name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input required name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn bg-green-700 text-white hover:bg-green-800 rounded-md transition mt-4">Login</button>
        </fieldset>
        </form>
        <button
            onClick={handleGoogleSignIn}
            className="btn bg-green-700 text-white hover:bg-green-800 rounded-md transition"
          >
           <FcGoogle/> Login with Google
          </button>
          <p>Don't have an account? <Link className="text-green-700 underline" href='/register'>Register Now</Link></p>
      </div>
    </div>
    <div>
       <Image
      src="/login.avif"
      alt="Login image"
      width={400}
      height={300}
      priority
    />
    </div>
    </div>
  )
}
