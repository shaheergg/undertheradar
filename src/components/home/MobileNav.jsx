import React from "react";

export default function MobileNav() {
  return (
    <nav className="flex items-center justify-end max-w-5xl px-8 py-16 mx-auto font-semibold text-white uppercase md:hidden md:flex">
      <div className="flex items-center gap-4">
        <div className="text-[20px] font-orbitron">
          <a href="/login" className="hover:underline">
            Sign in
          </a>
          /{" "}
          <a href="/register" className="hover:underline">
            Sign Up
          </a>
        </div>
        <div>
          <button
            href="/"
            className="p-2 bg-transparent border-2 rounded hover:text-black text-green hover:bg-green border-green"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
