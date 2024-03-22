import React from 'react'
import { NavLink } from 'react-router-dom'

const Logout = () => {
  return (
    <div className='conainer p-5 text-center'>
        <p>Are You Sure Logout</p>
        <button><NavLink to="/hrlogin" className="nav-link ">Logout</NavLink></button>
    </div>
  )
}

export default Logout