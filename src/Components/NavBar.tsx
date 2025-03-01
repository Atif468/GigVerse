"use client";
import React, { useState } from "react";
import { Highlight } from "./ui/hero-highlight";

// interface NavbarProps {
//   scrollToFeatures: () => void;
//   scrollToHowItWorks: () => void;
//   scrollToHome: () => void;
// }

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to handle the "Download Now" button click
  // const handleDownloadClick = () => {
  //   window.open("https://fitnearn.com/login", "_blank");
  // };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-purple-700 backdrop-blur-md sticky top-0 z-50 px-4 md:px-11 py-4 flex items-center justify-between transition duration-300">
        <div className="flex items-center space-x-2 ml-5 cursor-pointer">
          <h1 className="text-white text-3xl font-bold">GigVerse.in</h1>
        </div>

        <ul className="hidden md:space-x-8 sm:flex space-x-6">
          {["Home", "Features", "How It Works"].map((item) => (
            <li key={item}>
              <a
                href="#"
                // onClick={(e) => {
                //   e.preventDefault();
                //   if (item === "Home") {
                //     scrollToHome(); // Handle Home scroll
                //   } else if (item === "Features") {
                //     scrollToFeatures();
                //   } else if (item === "How It Works") {
                //     scrollToHowItWorks();
                //   }
                // }}
                className="relative flex items-center space-x-2 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:rounded-lg after:bg-orange-400 after:transition-all after:duration-500 hover:after:w-[110%] rounded-lg text-neutral-200 transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden sm:block mr-5">
          <button className="inline-flex ring-0 h-12 animate-shimmer items-center justify-center rounded-xl bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <Highlight className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500">
              Sign Up Form
            </Highlight>
          </button>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          onClick={toggleSidebar}
          className="md:hidden text-3xl text-white"
          aria-label="Open Sidebar"
        >
          ☰
        </button>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 bg-opacity-50 z-40 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar} // Close sidebar when clicked outside
      ></div>
      <div
        className={`fixed top-0 left-0 w-64 h-full backdrop-blur-3xl shadow-lg z-50 transition-transform duration-300 ${
          isSidebarOpen
            ? "transform translate-x-0"
            : "transform -translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleSidebar}
            className="text-neutral-100 text-2xl"
            aria-label="Close Sidebar"
          >
            x
          </button>
        </div>

        <ul className="flex flex-col space-y-4 p-6 h-full backdrop-blue-3xl">
          {["Home", "Features", "How It Works"].map((item) => (
            <li key={item}>
              <a
                href="#"
                // onClick={(e) => {
                //   e.preventDefault();
                //   if (item === "Home") {
                //     scrollToHome();
                //   } else if (item === "Features") {
                //     scrollToFeatures();
                //   } else if (item === "How It Works") {
                //     scrollToHowItWorks();
                //   }
                //   setIsSidebarOpen(false); // Close sidebar after click
                // }}
                className="bg-transparent border text-white font-bold px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg p-4 flex items-center space-x-3"
              >
                {item}
              </a>
            </li>
          ))}
          <div className="md:block mr-5">
            <button className="inline-flex ring-0 h-12 animate-shimmer items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <Highlight className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                Sign Up Form
              </Highlight>
            </button>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

// {
//   name: "Shimmer",
//   description: "Shimmer button for your website",
//   showDot: false,
//   component: (
//     <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
//       Shimmer
//     </button>
//   ),
//   code: `
//       // Button code
//       <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
//         Shimmer
//       </button>

//       // tailwind.config.js code
//       {
//         "animation": {
//           shimmer: "shimmer 2s linear infinite"
//         },
//         "keyframes": {
//           shimmer: {
//             from: {
//               "backgroundPosition": "0 0"
//             },
//             to: {
//               "backgroundPosition": "-200% 0"
//             }
//           }
//         }
//       }
//     `,
// },
