import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Enquiries from './Enquiries'

const Batchdetails = () => {

  const[batch,setbatch ]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:4000/batches")
    .then((res)=>setbatch(res.data))
    .catch((err)=>console.log(err))
  })
  return (
    <div className='p-5 table-responsive getbatches '>
      <h1 className='text-center text-danger'>Batch Details</h1>
      <table className="table table-bordered table-hover text-center p-5">
        <thead>
            <tr>
                <th>Course</th>
                <th>Date</th>
                <th>Timings</th>
                <th>Duration</th>
                <th>Trainer</th>
                <th>Register for Demo</th>
            </tr>
        </thead>
        <tbody>
          {batch.map((item)=>{
            return (
              
                <tr>
                  <td> {item.course}</td>
                  <td>{item.date}</td>
                  <td>{item.timings}</td>
                  <td>{item.duration} Days</td>
                  <td>Mr {item.trainer}</td>
                  <td><button data-bs-target="#demo" data-bs-toggle="modal">Demo</button></td>
                 
                  {/* <td> <NavLink to={`/enquiries`}> demo</NavLink></td> */}
                </tr>
              
            )
          })}
        </tbody>
      </table>

      {/* ========================modal========================== */}
          <div className='modal' id='demo'>
            <div className='modal-dialog'>
              <div className='modal-content'>
                
                <div className='modal-body'>
                  <button data-bs-dismiss="modal" className='btn btn-close'></button>
                  <Enquiries/>
                </div>
              </div>
            </div>
          </div>
        
    </div>
  )
}

export default Batchdetails