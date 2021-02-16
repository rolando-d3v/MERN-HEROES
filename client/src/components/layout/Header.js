import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bg-blueGray-900">
      <div className="flex justify-between px-8 h-16">
        <ul className="flex items-center space-x-4">
          <Link
            to="/"
            className="text-indigo-300 font-bold text-lg hover:text-indigo-500 "
          >
            Home
          </Link>
          <Link
            to="/login"
            className="text-indigo-300 text-lg hover:text-indigo-500 "
          >
            Login
          </Link >
          <Link
            to="/marvel"
            className="text-indigo-300 text-lg hover:text-indigo-500 "
          >
            Marvel
          </Link>
          <Link  to='/dc' className="text-indigo-300 text-lg hover:text-indigo-500 ">
            DC
          </Link>
        </ul>

        <ul className="flex items-center">
          <Link to="/" className="text-indigo-300 font-bold text-lg hover:text-indigo-500 ">
            Logout
          </Link>
        </ul>
      </div>
    </nav>
  );
}
