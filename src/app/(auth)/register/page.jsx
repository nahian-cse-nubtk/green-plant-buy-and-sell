"use client";
import AuthContext from "@/Provider/AuthContext";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

export default function Page() {
  const { createUser, googleSignIn } = useContext(AuthContext);
  const router = useRouter();

  const handleCreateUser = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const result = await createUser(email, password);
    const idToken = await result.user.getIdToken();
    await fetch("/api/setCookie", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: idToken }),
  });
    toast('Registration Successful')
    router.push("/");
  };

  const handleGoogleSignIn = async () => {
    const result = await googleSignIn();
    const idToken = await result.user.getIdToken();
    await fetch("/api/setCookie", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: idToken }),
  });

    toast('Login Successful')
    router.push("/");
  };

  return (
    <div className="mt-10">
      <div className="card mx-auto bg-base-100 w-full max-w-sm shadow-2xl">
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
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </form>

          <button
            onClick={handleGoogleSignIn}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            Login with Google
          </button>
          <p>Already have an account? <Link className="text-green-300 underline" href='/login'>Login Now</Link></p>
        </div>

      </div>
    </div>
  );
}
