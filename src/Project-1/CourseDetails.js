import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Enquiries from './Enquiries'



const CourseDetails = () => {
    const { id } = useParams()
    const [detail, setdetail] = useState("")
    useEffect(() => {
        axios.get(`http://localhost:4000/courses/${id}`)
            .then((res) => setdetail(res.data))
    })

    const demo=(e)=>{
        e.preventDefault()
        
        alert("Details send successfully")
    }
    return (
       <div className='container p-5 '>
            <div className='row'>
                <div className='col-8 col-sm-12 col-md-8 col-lg-8 col-xl-8 course-details'>
                <h3>{detail.course}</h3>
            <p className='skill'><strong>Skills :</strong> {detail.skills}</p>
            <p><strong>Description :</strong> {detail.discription}</p>
            <div className='mx-auto text-center'>
            <img src={detail.image}  />
            </div>
                </div>
                <div className='col-4 col-sm-12 col-md-4 col-lg-4 col-xl-4 '>
                    
                    <Enquiries/>
                </div>
            </div>
            
       </div>
       
    )
}

export default CourseDetails