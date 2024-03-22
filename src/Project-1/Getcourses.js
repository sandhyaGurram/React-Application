
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
const Viewcourse = () => {
    const [coursedata, setcoursedata] = useState([])
    useEffect(() => {
        axios.get("http://localhost:4000/courses")
            .then((res) => setcoursedata(res.data))
            .catch((err) => console.log(err))
    })

    return (
        <div className='container viewcourses p-3'>
            <div className='row'>
                <h2 className='text-center text-danger mb-4'>All Courses</h2>
                {coursedata.map((item) => {
                    return (
                        
                        <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-5'>
                            <div className='card'>
                                <img src={item.image} />
                                <div className='card-body text-center'>
                                    <h4 >{item.course}</h4>
                                    <NavLink to={`/details/${item.id}`}><button>Know more</button> </NavLink>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
           
        </div>
    )
}

export default Viewcourse