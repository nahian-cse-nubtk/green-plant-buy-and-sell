"use client";
import AuthContext from '@/Provider/AuthContext'
import React, { useContext } from 'react'
import { useRouter } from "next/navigation";
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function page() {
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
    <div className='my-10'>
       <div className="card mx-auto   bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className='text-4xl my-3 text-center font-bold'>Login Now!</h1>
      <div className="card-body">
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset">
          <label className="label">Email</label>
          <input required name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input required name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        </form>
        <button
            onClick={handleGoogleSignIn}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            Login with Google
          </button>
          <p>Don't have an account? <Link className="text-green-300 underline" href='/register'>Register Now</Link></p>
      </div>
    </div>
    </div>
  )
}
