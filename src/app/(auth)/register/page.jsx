"use client";
import AuthContext from "@/Provider/AuthContext";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const { createUser, googleSignIn } = useContext(AuthContext);
  const router = useRouter();

  const handleCreateUser = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const result = await createUser(email, password);

    router.push("/");
  };

  const handleGoogleSignIn = async () => {
    const result = await googleSignIn();
    console.log(result.user);

    router.push("/");   
  };

  return (
    <div className="mt-10">
      <div className="card mx-auto bg-base-100 w-full max-w-sm shadow-2xl">
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
        </div>
      </div>
    </div>
  );
}
