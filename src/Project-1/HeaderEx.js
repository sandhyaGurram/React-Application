
import logo from '../HIT/assets/logo.webp'
import { NavLink } from "react-router-dom";

import React from 'react'

const HeaderEx = () => {
  return (
    <div className="common-header">
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
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link ">About Us</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/batches" className="nav-link ">New Batches</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/courses" className="nav-link ">Courses</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/training" className="nav-link ">Training</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/FAQs" className="nav-link ">FAQ's</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/hrlogin" className="nav-link ">Hr Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/logout"  className="nav-link">Hr LogOut</NavLink>
              </li>

            </ul>
          </div>
        </nav>
      </header>

      {/* --------------------modal------------- */}
      <div className='modal' id="logoutid">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className='modal-header'>
              <h1>Logout</h1>
              <button databs-dismiss="modal" className='btn btn-close'></button>
            </div>
          <div className="modal-body">
          <p>Are you sure logout now</p>
          <input type='submit' databs-dismiss="modal"/>
          {/* <NavLink to="/hrlogin" className="nav-link ">LogOut</NavLink> */}
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderEx