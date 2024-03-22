
import axios from 'axios'
import React, { useEffect, useState } from 'react'
const Viewcourse = () => {
    const [courses, setcourses] = useState([])
    const [id, setid] = useState("")
    const [course, setcourse] = useState("")
    const [image, setimage] = useState("")
    const [duration, setduration] = useState("")
    const [skills, setskills] = useState("")
    const [timings, settimings] = useState("")
    const [trainer, settrainer] = useState("")
    const [discription, setdiscription] = useState("")
    useEffect(() => {
        axios.get("http://localhost:4000/courses")
            .then((res) => setcourses(res.data))
            .catch((err) => console.log(err))
    })

    const editcourse = (courseid) => {
        axios.get(`http://localhost:4000/courses/${courseid}`)
            .then((res) => {
                setid(res.data.id)
                setcourse(res.data.course)
                setimage(res.data.image)
                setduration(res.data.duration)
                setskills(res.data.skills)
                settimings(res.data.timings)
                settrainer(res.data.trainer)
                setdiscription(res.data.discription)
            })
            .catch((err) => console.log(err))
    }

    const deletecourse = (courseid) => {
        axios.delete(`http://localhost:4000/courses/${courseid}`)
            .then(() => alert("Course details deleted successfully"))
            .catch((err) => console.log(err))
    }
    const updatecourseapi = (e) => {
        e.preventDefault()
        axios.put("http://localhost:4000/courses/" + id, { id, course, image, duration, skills, timings, trainer, discription })
            .then(() => alert("Course updated successfully"))
            .catch((err) => console.log(err))
    }
    return (
        <div className='container viewcourses'>

            <h2 className='text-center text-danger'>All Courses</h2>

            {courses.map((item) => {
                return (
                    <div className='row py-5'>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 veg-list '>
                            <img src={item.image} />
                        </div>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-8 col-xl-8 veg-list '>
                            <table>
                                <tbody className='text-start'>
                                    <tr>
                                        <td>Course Name</td>
                                        <td>{item.course}</td>
                                    </tr>
                                    <tr>
                                        <td>Duration</td>
                                        <td>{item.duration} Days</td>
                                    </tr>
                                    <tr>
                                        <td>Skills</td>
                                        <td>{item.skills} </td>
                                    </tr>
                                    <tr>
                                        <td>Timings</td>
                                        <td>{item.timings} </td>
                                    </tr>
                                    <tr>
                                        <td>Trainer</td>
                                        <td>Mr {item.trainer}</td>
                                    </tr>
                                    <tr>
                                        <td>Discription</td>
                                        <td>{item.discription}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button data-bs-target="#editcoursedata" data-bs-toggle="modal" onClick={() => editcourse(item.id)}>Edit</button>
                            <button onClick={() => deletecourse(item.id)} >Delete</button>
                            <button>Add</button>

                        </div>
                    </div>
                )
            })}

            <div className='modal' id="editcoursedata">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Update Course Details</h4>
                            <button className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={updatecourseapi} >
                                <input type="text" name="course" className="form-control mb-3" placeholder="Enter Course Name" value={course} onChange={(e) => setcourse(e.target.value)} />
                                <input type="text" name="image" className="form-control mb-3" placeholder='Copy paste Image url here' value={image} onChange={(e) => setimage(e.target.value)} />
                                <input type="text" name="duration" className="form-control mb-3" placeholder="Course duration" value={duration} onChange={(e) => setduration(e.target.value)} />
                                <input type="text" name="skills" className="form-control mb-3" placeholder="Skills" value={skills} onChange={(e) => setskills(e.target.value)} />
                                <input type="text" name="timings" className="form-control mb-3" placeholder="Batch Timings" value={timings} onChange={(e) => settimings(e.target.value)} />
                                <input type="text" name="trainer" className="form-control mb-3" placeholder="Name of the Trainer" value={trainer} onChange={(e) => settrainer(e.target.value)} />
                                <textarea type="text" name="discription" className="form-control mb-3" rows={5} placeholder="Batch Timings" value={discription} onChange={(e) => setdiscription(e.target.value)} />

                                <input type="submit" value="Update Course" className="btn btn-success" data-bs-dismiss="modal" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Viewcourse