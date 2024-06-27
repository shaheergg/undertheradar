import React from "react";

export default function Navbar() {
  return (
    <nav className="items-center justify-between hidden max-w-5xl px-8 py-16 mx-auto font-semibold text-white uppercase md:flex">
      <div className="flex text-[20px] items-center gap-12 font-orbitron">
        <a href="/events" className="hover:underline">
          Events
        </a>
        <a href="/events" className="hover:underline">
          About
        </a>
        <a href="/events" className="hover:underline">
          Contact Us
        </a>
      </div>
      <div className="text-[20px] font-orbitron">
        <a href="/login" className="hover:underline">
          Sign in
        </a>
        /{" "}
        <a href="/register" className="hover:underline">
          Sign Up
        </a>
      </div>
    </nav>
  );
}
