import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewEnquiry = () => {

    const [contact,setcontact]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:4000/contact")
        .then((res)=>setcontact(res.data))
        .catch((err)=>console.log(err))
    })

    const deletecontact=(contactid)=>{
        axios.delete(`http://localhost:4000/contact/${contactid}`)
        .then(()=>alert("contact deleted successfully"))
        .catch((err)=>console.log(err))
    }
  return (
    <div className='p-2 table-responsive view-enquiry'>
        <h4 className='text-center text-danger mb-3'>Contact Information</h4>
      <table className="table table-bordered table-hover text-center p-5">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Message</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {contact.map((item)=>{
                return (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.username}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.message}</td>
                        <td>
                            
                            <button onClick={()=>deletecontact(item.id)}>Delete</button>
                        </td>
                    </tr>
                )
            })}
            
        </tbody>
        </table>

    </div>
  )
}

export default ViewEnquiry