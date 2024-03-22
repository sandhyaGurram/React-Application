import React from "react";
import logo from './assets/logo.webp';
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="hit">
      <header className="container-fluid ">
        <nav className="navbar navbar-expand-md ">
          <NavLink to="/" className="navbar-brand ms-5">
            <img src={logo} alt="" />
          </NavLink>
          <button className="navbar-toggler" data-bs-target="#myNav" data-bs-toggle="collapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="myNav" className="collapse navbar-collapse justify-content-end me-5">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link text-white">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link text-white">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/batches" className="nav-link text-white">New Batches</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/courses" className="nav-link text-white">Courses</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/training" className="nav-link text-white">Training</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/FAQs" className="nav-link text-white">FAQ's</NavLink>
              </li>

            </ul>
          </div>
        </nav>
      </header>
    </div>
  )
}