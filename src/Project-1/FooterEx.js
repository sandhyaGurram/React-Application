import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.json"
import { NavLink } from 'react-router-dom'

const FooterEx = () => {
  return (
    <div className='common-footer'>
        <div className='row m-0 p-0'>
            <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4' >
            <ul>
                    <li><i class="bi bi-envelope-fill"></i>  info@hyderabadtraining.com</li>
                    <li><i class="bi bi-telephone-fill"></i>  +91 99999 99999</li>
                </ul>
            </div>
            <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4' >
            <p>© 2023 ELearn Infotech.</p>
            </div>
            <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4' >
            <p>Designed By ENut Technologies Pvt Ltd.</p>
            </div>
            

        </div>

        {/* <div class="row">
            <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <ul>
                    <li><i class="bi bi-envelope-fill"></i>  info@hyderabadtraining.com</li>
                    <li><i class="bi bi-telephone-fill"></i>  +91 99999 99999</li>
                </ul>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <p>© 2023 ELearn Infotech.</p>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <p>Designed By ENut Technologies Pvt Ltd.</p>
            </div>
        </div> */}
       

    </div>
  )
}

export default FooterEx