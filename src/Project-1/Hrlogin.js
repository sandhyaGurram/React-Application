import React, { useState } from 'react'
import logo from '../HIT/assets/logo.webp'
import { useNavigate } from 'react-router'

const Hrlogin = () => {
    const [username,setusername]=useState("")
    const [password,setpassword]=useState("")
    const navigate=useNavigate()

    const logincheck=(e)=>{
        e.preventDefault()
        if(username==="sandhya" && password==="123"){
            navigate("/hjksaldskjsiiuiwkjj")
        }
        else{
            alert("Invali Username or Password")
        }
    }
    return (
        <div className='container p-5 text-center'>
            <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mx-auto'>
            <img src={logo} className='mb-5' />
            <form onSubmit={logincheck} method='post'>
                <input type="text" name="username" className="form-control mb-3" placeholder="Username" value={username} onChange={(e) => setusername(e.target.value)} />
                <input type="password" name="password" className="form-control mb-3" placeholder='Password' value={password} onChange={(e) => setpassword(e.target.value)} />
                <input type='submit' />
            </form>
            </div>
        </div>
    )
}

export default Hrlogin