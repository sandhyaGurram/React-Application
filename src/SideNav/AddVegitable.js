import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const AddVegitable = () => {
    const [image,setimage]=useState("")
    const [vegname,setvegname]=useState("")
    const [price,setprice]=useState("")

    const postdetails=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:4000/vegitableList",{image,vegname,price})
        .then(()=>{
            alert("Details saved Successfully")
            setimage("")
            setvegname("")
            setprice("")
        })
        .catch((err)=>console.log(err))
    }
  return (
    <div className='container p-5 text-center'>
        <div className='col-6 mx-auto'>
            <h3>Add Product Details</h3>
        <form onSubmit={postdetails}>
            <input type='text' name="image" placeholder='Enter Image URL' className='form-control mb-3' value={image} onChange={(e)=>setimage(e.target.value)}/>
            <input type='text' name="vegname" placeholder='Name of Vegg' className='form-control mb-3'  value={vegname} onChange={(e)=>setvegname(e.target.value)}/>
            <input type='text' name="price" placeholder='Price' className='form-control mb-3'  value={price} onChange={(e)=>setprice(e.target.value)}/>
            <input type='submit'/>
        </form>
        </div>
    </div>
  )
}

export default AddVegitable