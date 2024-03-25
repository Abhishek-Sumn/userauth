"use client";
import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { signupuser } from "../redux/authSlice";
import { useState } from "react";
import Dashboard from "../Dashboard/page";


const Signup = () => {
 
  const [email, setEmail] = useState("");
  const [ps, setps] = useState("");

  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();

  

  return (
    <div>
      {user.loading ? (
        <Dashboard />
      ) : (
        <div className="flex items-center justify-center min-h-screen from-purple-900 via-indigo-800 to-indigo-500 bg-gradient-to-br">
          <div className="w-full max-w-lg px-10 py-8 mx-auto bg-white border rounded-lg shadow-2xl">
            <div className="max-w-md mx-auto space-y-3">
              <h3 className="text-lg font-semibold">Sign Up</h3>
              <div>
                
                <label className="block py-1">Your email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="border w-full py-2 px-2 rounded shadow hover:border-indigo-600 ring-1 ring-inset ring-gray-300 font-mono"
                />
                <p className="text-sm mt-2 px-2 hidden text-gray-600">
                  Text helper
                </p>
              </div>
              <div>
                <label className="block py-1">Password</label>
                <input
                  onChange={(e) => setps(e.target.value)}
                  type="password"
                  className="border w-full py-2 px-2 rounded shadow hover:border-indigo-600 ring-1 ring-inset ring-gray-300 font-mono"
                />
              </div>
              <div className="flex gap-3 pt-3 items-center justify-center ">
                <button
                  type="button"
                  className="border hover:border-indigo-600 px-4 py-2 rounded-lg shadow ring-1 ring-inset ring-gray-300"
                  onClick={() => dispatch(signupuser({ email, ps }))}
                >
                  Signup
                </button>
              </div>
            </div>
            <div>
              <label>Already have an account ?</label>
              <button>
                <Link href="/components/login" className="ml-2">
                  Login
                </Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
