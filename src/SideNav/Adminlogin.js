import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Adminlogin = () => {
    const [username,setusername]=useState("")
    const [password,setpassword]=useState("")
    const navigate=useNavigate()

    const checklogin=(e)=>{
        e.preventDefault()
        if(username==="sandhya" && password==="123"){
            navigate("/hdjkkdislkaksndnsmj")
            alert("You're successfully login")
        }
        else{
            alert("Invalid Username or Password")
        }
    }
  return (
    <div className='container p-5 text-center'>
    <div className='col-4 mx-auto'>
            <img src="https://static.vecteezy.com/system/resources/previews/002/136/049/original/leaf-logo-organic-label-eco-icon-isolated-background-free-vector.jpg" className='w-50 mb-5'/>
            <form onSubmit={checklogin}>
                <input type='text' name='username' className='form-control mb-3' placeholder='Username' value={username} onChange={(e)=>setusername(e.target.value)}/>
                <input type='password' name='password' className='form-control mb-3' placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
                <input type='submit'/>
            </form>
        </div>
    </div>
  )
}

export default Adminlogin