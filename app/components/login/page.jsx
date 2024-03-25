"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Dashboard from "../Dashboard/page";
import { signupuser } from "../redux/authSlice";


  const Login = () => {
    const [email, setEmail] = useState("");
    const [ps, setps] = useState("");
    const user = useSelector((state) => state.users);
    const [userFound, setUserFound] = useState(true);
    const [wrongPs, setwrongPs] = useState(true);

    const dispatch = useDispatch();
    const handleLogin = () => {
      const userarray = user.usersList.find(findEmail);

      if (userarray == undefined) {
        setUserFound(false);
      } else if (userarray?.ps != ps) {
        setwrongPs(false);
      } else {
        dispatch(signupuser({ email, ps }));
      }
    };

    useEffect(() => {
      if (user.loading == false) {
        setwrongPs(true);
        setUserFound(true);
      }
    }, [user.loading]);

    function findEmail(obj) {
      return obj.email == email;
    }

    return (
      <div>
        {user.loading ? (
          <Dashboard />
        ) : (
          <div className="flex items-center justify-center min-h-screen from-purple-900 via-indigo-800 to-indigo-500 bg-gradient-to-br">
            <div className="w-full max-w-lg px-10 py-8 mx-auto bg-white border rounded-lg shadow-2xl">
              <div className="max-w-md mx-auto space-y-3">
                <h3 className="text-lg font-semibold">Log in</h3>
                <div>
                  {userFound ? <h1></h1> : <h1>User Not Found</h1>}
                  {wrongPs ? <h1></h1> : <h1>Wrong Password</h1>}
                  <label className="block py-1">Your email</label>
                  <input
                    type="email"
                    className="border w-full py-2 px-2 rounded shadow hover:border-indigo-600 ring-1 ring-inset ring-gray-300 font-mono"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p className="text-sm mt-2 px-2 hidden text-gray-600">
                    Text helper
                  </p>
                </div>
                <div>
                  <label className="block py-1">Password</label>
                  <input
                    type="password"
                    className="border w-full py-2 px-2 rounded shadow hover:border-indigo-600 ring-1 ring-inset ring-gray-300 font-mono"
                    onChange={(e) => setps(e.target.value)}
                  />
                </div>
                <div className="flex gap-3 pt-3 items-center justify-center ">
                  <button
                    className="border hover:border-indigo-600 px-4 py-2 rounded-lg shadow ring-1 ring-inset ring-gray-300"
                    type="button"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </div>
                <div>
                  <label>Don't have an account ?</label>
                  <button>
                    <Link href="/components/signup" className="ml-2">
                      Sign up
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };


export default Login;
