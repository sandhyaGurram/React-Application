import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.json"
import { NavLink } from 'react-router-dom'

export default function () {
  return (
    <div className='m-0 p-0'>
    {/* <footer class="container-fluid p-5">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 px-5">
                <h1>Elearn Infotec</h1>
                <p>ELearn Infotech offers an excellent Software courses training with end to end support to the
                    candidates. We offer Web Designing & Development, Digital Markeing, Oracle, SAP, Cloud Modules.</p>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 px-5">
                <h1>Quick Links</h1>
                <p><NavLink to="/register">Student Registration</NavLink> </p>
                <p><NavLink to="/">Become a trainer</NavLink> </p>
                <p> <NavLink to="/batches">New Batch</NavLink> </p>
               
               <p><NavLink to="/">Online Payment</NavLink> </p>
            
                <p><NavLink to="/">Placements</NavLink> </p>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 px-5">
                <h1>Reach Us</h1>
                <p><i class="bi bi-house-door-fill"></i> Plot Number 40, Second Floor,

                    Vittal Rao Nagar,

                    Madhapur, Hyderabad,

                    Telangana 500081</p>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 px-5">
                <h1>Contact Us</h1>
                <p><i class="bi bi-telephone-fill"></i> +91 8464025086</p>
                <p><i class="bi bi-envelope-fill"></i> info@elearninfotech.com</p>
            </div>
        </div>

    </footer> */}
    <section class="container-fluid bottom text-center ">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <p>© 2023 ELearn Infotech.</p>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <p>Refund & Reschedule Policy </p>
                <p> Privacy Policy </p>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <p>Designed By ENut Technologies Pvt Ltd.</p>
            </div>
        </div>

    </section>
    </div>
  )
}
