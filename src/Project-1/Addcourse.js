import axios from 'axios'
import React, { useState } from 'react'

const Addcourse = () => {
    const [course,setcourse]=useState("")
    const [image,setimage]=useState("")
    const [duration,setduration]=useState("")
    const [skills,setskills]=useState("")
    const [timings,settimings]=useState("")
    const [trainer,settrainer]=useState("")
    const [discription,setdiscription]=useState("")

    const postcourse=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:4000/courses",{course,image,duration,skills,timings,trainer,discription})
        .then(()=>{
            alert("Contact details saved successfully")
            setcourse("")
            setimage("")
            setduration("")
            setskills("")
            settimings("")
            settrainer("")
            setdiscription("")
        })
    }
    return (
        <div className='add-courses'>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mx-auto'>
                <h4 className='text-center text-danger'>Add Course Details</h4>
                <form onSubmit={postcourse} >
                    <input type="text" name="course" className="form-control mb-3" placeholder="Enter Course Name" value={course} onChange={(e) => setcourse(e.target.value)} />
                    <input type="text" name="image" className="form-control mb-3" placeholder='Copy paste Image url here' value={image} onChange={(e) => setimage(e.target.value)} />
                    <input type="text" name="duration" className="form-control mb-3" placeholder="Course duration" value={duration} onChange={(e) => setduration(e.target.value)} />
                    <input type="text" name="skills" className="form-control mb-3" placeholder="Skills" value={skills} onChange={(e) => setskills(e.target.value)} />
                    <input type="text" name="timings" className="form-control mb-3" placeholder="Batch Timings" value={timings} onChange={(e) => settimings(e.target.value)} />
                    <input type="text" name="trainer" className="form-control mb-3" placeholder="Name of the Trainer" value={trainer} onChange={(e) => settrainer(e.target.value)} />
                    <textarea type="text" name="discription" className='form-control mb-3 ' rows={5}  placeholder='Course Discription' value={discription} onChange={(e)=>setdiscription(e.target.value)} />
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}

export default Addcourse