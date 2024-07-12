import React from "react";
import Arrow2 from "../assets/arrow-2.svg";
import netSVG from "../assets/svgs/net.svg";
const Register = () => {
  return (
    <div className="overflow-hidden font-orbitron md:px-0 px-4 z-40 relative flex items-center py-10 min-h-[120vh] bg-4">
      <div className="z-50 w-full max-w-6xl mx-auto">
        <h2 className="leading-[70.7px] text-white font-semibold flex-1 text-[70px] font-orbitron">
          SIGN UP <br />
          <span className="text-accent">UNDER THE RADAR</span>
        </h2>
        <div className="grid grid-cols-5 gap-4 pt-10 md:gap-0 md:grid-cols-12">
          <div className="col-span-5">
            <form className="w-full space-y-2">
              <div className="w-full space-y-2">
                <label
                  htmlFor="name"
                  className="font-semibold  text-white text-[20px]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-transparent text-white py-4 px-4 border-[2px] border-green rounded-[5px] outline-none w-full"
                />
              </div>
              <div className="w-full space-y-2">
                <label
                  htmlFor="phone"
                  className="font-semibold text-white text-[20px]"
                >
                  Mail or Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  className="bg-transparent text-white py-4 px-4 border-[2px] border-green rounded-[5px] outline-none w-full"
                />
              </div>
              <div className="w-full space-y-2">
                <label
                  htmlFor="phone"
                  className="font-semibold text-white text-[20px]"
                >
                  Create Username
                </label>
                <input
                  type="text"
                  id="phone"
                  className="bg-transparent text-white py-4 px-4 border-[2px] border-green rounded-[5px] outline-none w-full"
                />
              </div>
              <div className="w-full space-y-2">
                <label
                  htmlFor="phone"
                  className="font-semibold text-white text-[20px]"
                >
                  Create Password
                </label>
                <input
                  type="password"
                  id="phone"
                  className="bg-transparent text-white py-4 px-4 border-[2px] border-green rounded-[5px] outline-none w-full"
                />
              </div>

              <div className="flex items-center justify-center w-full py-10">
                <button className="flex items-center gap-4 px-10 py-2 bg-black border rounded-lg border-green">
                  <span className="font-semibold text-[20px] text-white">
                    Go Under The Radar
                  </span>
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
          <div className="items-center justify-center hidden w-full col-span-2 md:flex">
            <img src={Arrow2} alt="" />
          </div>
          <div className="col-span-5 border-2 rounded-md border-green">
            <div className="p-6 space-y-4 text-white">
              <h2 className="text-[30px] font-semibold">
                Choose or Upload Avatar
              </h2>
              <div className="h-48 p-4 bg-black border border-green rounded-2xl"></div>
              <div className="flex items-center justify-center">
                <button>
                  <span className="text-[20px] underline font-semibold">
                    Upload Media
                  </span>
                </button>
              </div>
              <div className="h-20"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute hidden -right-28 md:flex -top-72">
        <img src={netSVG} alt="" />
      </div>
    </div>
  );
};

export default Register;
