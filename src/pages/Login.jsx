import React from "react";
import Arrow2 from "../assets/arrow-2.svg";
import { Link } from "react-router-dom";
import netSVG from "../assets/svgs/net.svg";
const Login = () => {
  return (
    <div className="overflow-hidden font-orbitron md:px-0 px-4 z-40 relative flex items-center py-10 min-h-[120vh] bg-4">
      <div className="z-50 w-full max-w-6xl mx-auto">
        <h2 className="leading-[70.7px] text-white font-semibold flex-1 md:text-[70px] text-[50px] font-orbitron">
          SIGN IN/ SIGN UP <br />
          <span className="text-accent">UNDER THE RADAR</span>
        </h2>
        <div className="grid grid-cols-6 gap-4 py-10 md:grid-cols-12">
          <div className="col-span-6">
            <form className="w-full space-y-8">
              <div className="w-full space-y-2">
                <label
                  htmlFor="username"
                  className="font-semibold  text-white text-[20px]"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="bg-transparent text-white py-4 px-4 border-[2px] border-green rounded-[5px] outline-none w-full"
                />
              </div>
              <div className="w-full space-y-2">
                <label
                  htmlFor="password"
                  className="font-semibold text-white text-[20px]"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-transparent text-white py-4 px-4 border-[2px] border-green rounded-[5px] outline-none w-full"
                />
              </div>
              <div className="flex items-center justify-center w-full py-10">
                <button className="flex items-center justify-center w-full gap-4 px-10 py-2 text-center bg-black rounded-lg md:w-auto">
                  <span className="font-semibold text-white">SIGN IN</span>
                  <div className="p-2 rounded hover:ring-2 ring-green bg-accent">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 12 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 1.5L10.5 10.5L1.5 19.5"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </form>
          </div>
          <div className="absolute hidden md:flex right-56 bottom-2">
            <img src={Arrow2} alt="" />
          </div>
          <div className="flex flex-col items-center justify-center col-span-6 gap-4">
            <Link
              to="/register"
              className="px-10 py-2 text-white text-[28px] bg-black border rounded-2xl border-green"
            >
              SIGN UP
            </Link>
            <p className="text-[20px] text-center md:text-left text-white max-w-[170px] font-semibold">
              Don’t have an account?
            </p>
          </div>
        </div>
      </div>
      <div className="absolute right-0 hidden md:flex -top-72">
        <img src={netSVG} alt="" />
      </div>
    </div>
  );
};

export default Login;
