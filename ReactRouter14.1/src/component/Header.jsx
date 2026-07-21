import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const getNavStyle = ({ isActive }) => ({
    backgroundColor: isActive ? "#6366F1" : "transparent",
    color: isActive ? "#ffffff" : "#374151",
    boxShadow: isActive
      ? "0 4px 15px rgba(99,102,241,0.4)"
      : "none",
  });

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent cursor-pointer">
          Practice
        </h1>

        {/* Navigation */}
        <nav className="flex items-center gap-4">
          <NavLink
            to="/"
            end
            style={getNavStyle}
            className="px-5 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            style={getNavStyle}
            className="px-5 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600"
          >
            About
          </NavLink>

          
          <NavLink
            to="/movie"
            style={getNavStyle}
            className="px-5 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600"
          >
            Movie
          </NavLink>

          <NavLink
            to="/contact"
            style={getNavStyle}
            className="px-5 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600"
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;