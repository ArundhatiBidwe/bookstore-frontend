import React from "react";
import { Link } from "react-router-dom";
import { FaBook, FaVideo, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <FaBook /> Bookstore
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/books" className="nav-link">
                Books
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/videos" className="nav-link">
                <FaVideo /> Videos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                <FaUserPlus /> Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

