import axios from 'axios'
import React, { useEffect, useState } from 'react'

const GetBatch = () => {
    const [batchData, setBatchData] = useState([])
    const [course,setcourse]=useState("")
    const [date,setdate]=useState("")
    const [duration,setduration]=useState("")
    const [timings,settimings]=useState("")
    const [trainer,settrainer]=useState("")

    useEffect(() => {
        axios.get("http://localhost:4000/courses")
            .then((res) => setBatchData(res.data))
            .catch((err) => console.log(err))
    })

    const editBatch=(batchid)=>{
        axios.get(`http://localhost:4000/courses/${batchid}`)
        .then((res)=>{
            setcourse(res.data.course)
            setdate(res.data.date)
            setduration(res.data.duration)
            settimings(res.data.timings)
            settrainer(res.data.trainer)
        })
        .catch((err)=>console.log(err))
    }
    return (
        <div className="container p-5">
            <h1> Batches Details are updating here</h1>
            <table className="table table-bordered table-hover">
                <thead className="table-dark text-center">
                    <tr>
                        <th>Course Name</th>
                        <th>Start Date</th>
                        <th>Duration</th>
                        <th>Timings</th>
                        <th>Trainer</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {batchData.map((item) => {
                        return (
                            <tr>
                                <td>{item.course} </td>
                                <td>{item.date} </td>
                                <td>{item.duration} Days </td>
                                <td>{item.timing} </td>
                                <td>{item.trainer} </td>
                                <td>
                                    <button data-bs-target="#enroll" data-bs-toggle="modal" onClick={()=>editBatch(item.id)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {/* modal for enroll */}
            <div className='modal' id="enroll">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Update Batch Data</h4>
                            <button className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <form >
                                <input type="text" name="course" className="form-control mb-3" placeholder="Enter Course Name" value={course} onChange={(e)=>setcourse(e.target.value)} />
                                <input type="date" name="date" className="form-control mb-3" value={date} onChange={(e)=>setdate(e.target.value)} />
                                <input type="text" name="duration" className="form-control mb-3" placeholder="Course duration" value={duration} onChange={(e)=>setduration(e.target.value)} />
                                <input type="text" name="timings" className="form-control mb-3" placeholder="Batch Timings" value={timings} onChange={(e)=>settimings(e.target.value)} />
                                <input type="text" name="trainer" className="form-control mb-3" placeholder="Name of the Trainer" value={trainer} onChange={(e)=>settrainer(e.target.value)} />
                                <input type="submit" value="Update Batch" className="btn btn-success" data-bs-dismiss="modal" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default GetBatch