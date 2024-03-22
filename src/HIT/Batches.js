
import React from 'react'
import { NavLink } from 'react-router-dom'


export default function () {
    return (
        <div className='p-5 table-responsive'>
            <table className="table table-bordered table-striped text-center p-5">
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
                    <tr className='animate-tr1'>
                        <td>React JS</td>
                        <td>3 -JAN-2024</td>
                        <td>10:00 AM- 11:00 AM</td>
                        <td>25 Days</td>
                        <td>Mr. Bhargav</td>
                        <td><NavLink to="/register" className='nav-link'>Register Now</NavLink></td>
                    </tr>
                    <tr className='animate-tr2'>
                        <td>MERN Stack Development</td>
                        <td>10 -JAN-2024</td>
                        <td>11:00 AM -12:00 PM</td>
                        <td>90 Days</td>
                        <td>Mr. chandrashekar</td>
                        <td><NavLink to="/register" className='nav-link'>Register Now</NavLink></td>
                    </tr>
                    <tr className='animate-tr3'>
                        <td>Python Fullstack Development</td>
                        <td>10 -JAN-2024</td>
                        <td>4:00 PM -5:00 PM</td>
                        <td>90 Days</td>
                        <td>Mr. Sudheer</td>
                        <td><NavLink to="/register" className='nav-link'>Register Now</NavLink></td>
                    </tr>
                    <tr className='animate-tr4'>
                        <td>UIUX Designing</td>
                        <td>9 -JAN-2024</td>
                        <td>12:00 PM - 1:00 PM</td>
                        <td>90 Days</td>
                        <td>Mr.Sakthivel</td>
                        <td><NavLink to="/register" className='nav-link'>Register Now</NavLink></td>
                    </tr>
                    <tr className='animate-tr5'>
                        <td>UI Development</td>
                        <td>10 -JAN-2024</td>
                        <td>11:00 AM -12:00 PM</td>
                        <td>70 Days</td>
                        <td>Mr. Bhargav</td>
                        <td><NavLink to="/register" className='nav-link'>Register Now</NavLink></td>
                    </tr>
                    <tr className='animate-tr6'>
                        <td>Python with DJango</td>
                        <td>10 -JAN-2024</td>
                        <td>4:00 PM -5:00 PM</td>
                        <td>45 Days</td>
                        <td>Mr. Sudheer</td>
                        <td><NavLink to="/register" className='nav-link'>Register Now</NavLink></td>
                    </tr>
                    <tr className='animate-tr7'>
                        <td>Web Designing</td>
                        <td>10 -JAN-2024</td>
                        <td>11:00 AM -12:00 PM</td>
                        <td>45 Days</td>
                        <td>Mr. Bhargav</td>
                        <td><NavLink to="/register" className='nav-link'>Register Now</NavLink></td>
                    </tr>
                    <tr className='animate-tr8'>
                        <td>Digital Marketing</td>
                        <td>9 -JAN-2024</td>
                        <td>3:00 PM - 4:00 PM</td>
                        <td>50 Days</td>
                        <td>M.S.R</td>
                        <td><NavLink to="/register" className='nav-link'>Register Now</NavLink></td>
                    </tr>
                </tbody>
            </table>
            

        </div>
    )
}
