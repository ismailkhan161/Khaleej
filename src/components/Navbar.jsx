import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="text-white body-font bg-blue-300">
      <div className="container mx-auto flex p-5 items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-blue-600 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl text-black font-semibold">KhaLeej</span>
        </Link>

        {/* Mobile Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>

        {/* Nav Links */}
        <nav
          className={`${
            open ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6 text-black`}
        >
          <Link to="/" className="block py-2 hover:text-blue-600">Home</Link>
          <Link to="/about" className="block py-2 hover:text-blue-600">About</Link>
          <Link to="/gallery" className="block py-2 hover:text-blue-600">Gallery</Link>
          <Link to="/blogs" className="block py-2 hover:text-blue-600">Blogs</Link>
          <Link to="/contact" className="block py-2 hover:text-blue-600">Contact</Link>

          <button className="bg-blue-500 border-0 py-1 px-3 rounded hover:bg-white hover:text-black mt-2 md:mt-0">
            Sign Up
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
