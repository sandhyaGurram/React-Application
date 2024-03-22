import React, { useState } from 'react'
import axios from 'axios'

const AddBatch = () => {
    const [course,setcourse]=useState("")
    const [date,setdate]=useState("")
    const [duration,setduration]=useState("")
    const [timings,settimings]=useState("")
    const [trainer,settrainer]=useState("")
    const [discription,setdiscription]=useState("")

    const postbatch=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:4000/batches",{course,date,duration,timings,trainer,discription})
        .then(()=>{
            alert("batch details saved successfully")
            setcourse("")
            setdate("")
            setduration("")
            settimings("")
            settrainer("")
            setdiscription("")
        })
    }
  return (
    <div className='add-batches'>
        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mx-auto'>
                <h4 className='text-center text-danger'>Add Batch Details</h4>
                <form onSubmit={postbatch} >
                    <input type="text" name="course" className="form-control mb-3" placeholder="Enter Course Name" value={course} onChange={(e) => setcourse(e.target.value)} />
                    <input type="date" name="date" className="form-control mb-3" placeholder='Copy paste Image url here' value={date} onChange={(e) => setdate(e.target.value)} />
                    <input type="text" name="duration" className="form-control mb-3" placeholder="Course duration" value={duration} onChange={(e) => setduration(e.target.value)} />
                    <input type="text" name="timings" className="form-control mb-3" placeholder="Batch Timings" value={timings} onChange={(e) => settimings(e.target.value)} />
                    <input type="text" name="trainer" className="form-control mb-3" placeholder="Name of the Trainer" value={trainer} onChange={(e) => settrainer(e.target.value)} />
                    <input type="submit" />
                </form>
            </div>
    </div>
  )
}

export default AddBatch