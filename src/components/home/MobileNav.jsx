import React, { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const navigation = [
    {
      id: 1,
      label: "Events",
      to: "#events",
    },
    {
      id: 2,
      label: "About",
      to: "#about",
    },
    {
      id: 3,
      label: "Contact Us",
      to: "#contact-us",
    },
  ];
  return (
    <nav className="relative z-50 flex items-center justify-end max-w-5xl px-8 py-8 mx-auto font-semibold text-white uppercase group md:hidden md:flex">
      <div className="flex items-center gap-4">
        <div className="tmd:ext-[20px] text-[18px] font-orbitron">
          <a href="/login" className="hover:underline">
            Sign in
          </a>
          /{" "}
          <a href="/register" className="hover:underline">
            Sign Up
          </a>
        </div>
        <div>
          <button className="p-2 bg-transparent border-2 rounded hover:text-black text-green hover:bg-green border-green">
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
      <div className="absolute hidden rounded-md min-h-fit group-hover:block w-80 top-28 bg-green">
        {navigation.map((item) => {
          return (
            <>
              <div>
                <a
                  href={item.to}
                  className="block px-4 py-2 text-black hover:underline font-orbitron"
                >
                  {item.label}
                </a>
              </div>
            </>
          );
        })}
      </div>
    </nav>
  );
}
