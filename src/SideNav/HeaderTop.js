import React from 'react'
import './Sidenav.css'
import { NavLink, useNavigate } from "react-router-dom";
import SideNavbar from './SideNavbar';
import Adminlogin from './Adminlogin';
export default function HeaderTop() {
    const navigate=useNavigate()
    return (
        <div className='header-top'>
            <header className="container-fluid ">
                <nav className="navbar navbar-expand-md ">

                    <NavLink to="/" className="navbar-brand ms-5">
                        Organic
                    </NavLink>

                    <button className="navbar-toggler" data-bs-target="#myNav" data-bs-toggle="collapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="myNav" className='collapse navbar-collapse justify-content-center'>

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">HOME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link">SHOP</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/batches" className="nav-link">PAGES</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/training" className="nav-link">BLOG</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/courses" className="nav-link">CONTACT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/courses" className="nav-link"><i class="bi bi-heart-fill"></i></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/courses" className="nav-link"><i class="bi bi-cart-fill"></i></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link">LogIn</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>


        </div>
    )
}
