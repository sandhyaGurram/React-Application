import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewBatch = () => {
    const [batchData, setBatchData] = useState([])
    const[id,setid]=useState("")
    const [course,setcourse]=useState("")
    const [date,setdate]=useState("")
    const [duration,setduration]=useState("")
    const [timings,settimings]=useState("")
    const [trainer,settrainer]=useState("")

    useEffect(() => {
        axios.get("http://localhost:4000/batches")
            .then((res) => setBatchData(res.data))
            .catch((err) => console.log(err))
    })

    const editbatch=(batchid)=>{
        axios.get(`http://localhost:4000/batches/${batchid}`)
        .then((res)=>{
            setid(res.data.id)
            setcourse(res.data.course)
            setdate(res.data.date)
            setduration(res.data.duration)
            settimings(res.data.timings)
            settrainer(res.data.trainer)
           
        })
        .catch((err)=>console.log(err))
    }

    const updatebathapi=(e)=>{
        e.preventDefault()
        axios.put("http://localhost:4000/batches/"+id,{id,course,date,duration,timings,trainer})
        .then(()=>alert("Course updated successfully"))
        .catch((err)=>console.log(err))
    }

    const deletebatch=(batchid)=>{
        axios.delete(`http://localhost:4000/batches/${batchid}`)
        .then(()=>alert("Batch deleted successfully"))
        .catch((err)=>console.log(err))
    }
  return (
    <div className='container px-5 editbatch table-responsive'>
        <h4 className='text-center mb-3 text-danger'>New Batches</h4>
        <table className='table  table-bordered table-hover'>
            <thead>
                <tr>
                    <th>Course name</th>
                    <th>Start Date</th>
                    <th>Duration</th>
                    <th>Timings</th>
                    <th>Trainer</th>
                    <th className='text-center'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {batchData.map((item)=>{
                    return (
                
                <tr>
                <td>{item.course} </td>
                <td>{item.date} </td>
                <td>{item.duration} Days </td>
                <td>{item.timings} </td>
                <td>Mr  {item.trainer} </td>
                <td className='text-center'>
                    <button data-bs-target="#editbatch" className='mb-2' data-bs-toggle="modal" onClick={()=>editbatch(item.id)}>Edit</button>
                    <button onClick={()=>deletebatch(item.id)}>Delete</button>
                </td>
                </tr>
                    )
                })}
            </tbody>

        </table>

        {/* ---------------------------------modal for edit batch details-------------------- */}
        <div className='modal ' id='editbatch'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h4>Edit Batch Details</h4>
                    </div>
                    <div className='modal-body'>
                    <form onSubmit={updatebathapi}>
                        <input type="text" name="course" className="form-control mb-3" placeholder="Enter Course Name" value={course} onChange={(e)=>setcourse(e.target.value)} />
                        <input type="date" name="date" className="form-control mb-3" placeholder='Copy paste Image url here' value={date} onChange={(e)=>setdate(e.target.value)} />
                        <input type="text" name="duration" className="form-control mb-3" placeholder="Course duration" value={duration} onChange={(e)=>setduration(e.target.value)}/>
                        <input type="text" name="timings" className="form-control mb-3" placeholder="Batch Timings" value={timings} onChange={(e)=>settimings(e.target.value)}/>
                        <input type="text" name="trainer" className="form-control mb-3" placeholder="Name of the Trainer"value={trainer} onChange={(e)=>settrainer(e.target.value)}/>
                        
                        
                        <input type="submit" value="Update Course" className="btn btn-success" data-bs-dismiss="modal" />
                    </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewBatch