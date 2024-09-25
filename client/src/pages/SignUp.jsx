// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h2 className="text-3xl text-center font-serif p-4">SignUp</h2>
      <form action="" className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
        ></input>
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg"
          id="Email"
        ></input>

        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
        ></input>
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-75 disabled:opacity-50">
          SignUp
        </button>
      </form>
      <div className="flex flex-row gap-2 mt-1">
        <p className="">Have an Account</p>
        <Link to="/sign-in">
          <h3 className="text-blue-400 ">Sign Up</h3>
        </Link>
      </div>
    </div>
  );
}
