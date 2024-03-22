import axios from 'axios'
import React, { useState } from 'react'

const SetBatch = () => {
    const [course,setCourse]=useState("")
    const [date,setDate]=useState("")
    const [duration,setDuration]=useState("")
    const [timing,setTiming]=useState("")
    const [trainer,setTrainer]=useState("")
    const postBatchData=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:4000/courses",{course,date,duration,timing,trainer})
        .then(()=>{
            alert("Batch details saved successfully")
            setCourse("")
            setDate("")
            setDuration("")
            setTiming("")
            setTrainer("")
        })
        .catch((err)=>console.log(err))
    }

    


  return (
    <div className="container p-5">
                <div className="row">
                    <div className="col-8 col-lg-4 mx-auto">
                        <h1>Add Batches</h1>
                        <form onSubmit={postBatchData}>
                            <input type="text" name="course" className="form-control mb-3" placeholder="Enter Course Name" value={course} onChange={(e)=>setCourse(e.target.value)}/>
                            <input type="date" name="date" className="form-control mb-3" value={date} onChange={(e)=>setDate(e.target.value)} />
                            <input type="text" name="duration" className="form-control mb-3" placeholder="Course Duration" value={duration} onChange={(e)=>setDuration(e.target.value)} />
                            <input type="text" name="timing" className="form-control mb-3" placeholder="Course Timings" value={timing} onChange={(e)=>setTiming(e.target.value)}/>
                            <input type="text" name="trainer" className="form-control mb-3" placeholder="Course Trainer" value={trainer} onChange={(e)=>setTrainer(e.target.value)}/>
                            <input type="submit" />
                        </form>
                    </div>
                </div>

    </div>
  )
}

export default SetBatch