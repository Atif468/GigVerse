"use client";

import React from "react";
import { Highlight } from "./ui/hero-highlight";

const BottomBar = () => {
  return (
    <div>
      {/* Bottom Bar */}
      <div className="bg-purple-700 backdrop-blur-md sticky bottom-0 z-50 px-4 py-4 flex items-center justify-between md:px-11 transition duration-300">
        <div className="flex items-center space-x-2 ml-5 cursor-pointer">
          <h1 className="text-white text-xl font-bold">GigVerse.in</h1>
        </div>

        <ul className="hidden sm:flex space-x-8">
          {["Contact Us", "Privacy Policy", "Terms of Service"].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="relative flex items-center space-x-2 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:rounded-lg after:bg-orange-400 after:transition-all after:duration-500 hover:after:w-[110%] rounded-lg text-neutral-200 transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Sign Up Button */}
        <div className="hidden sm:block mr-5">
          <button className="inline-flex ring-0 h-12 animate-shimmer items-center justify-center rounded-xl bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <Highlight className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500">
              Sign Up
            </Highlight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
