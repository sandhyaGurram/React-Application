import React from 'react'
import { Route, Routes } from 'react-router';
import Aboutus from './Aboutus';
import Batches from './Batches';
import Training from './Training';
import Courses from './Courses';
import Carousel from './Carousel';
import Home from './Home';
import Faqs from './Faqs';

import Register from './Register';
import Nopage from '../Project-1/Nopage';
import AddBatches from '../CRUDClass/AddBatches';
import Hrlogin from '../Project-1/Hrlogin';
import HrDashboard from '../Project-1/HrDashboard';
import Getcourses from '../Project-1/Getcourses';
import CourseDetails from '../Project-1/CourseDetails';
import Enquiries from '../Project-1/Enquiries';
import Batchdetails from '../Project-1/Batchdetails';
import Logout from '../Project-1/Logout';

function Routing() {
  return (
    <div>
        <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/about' element={<Aboutus/>} />
            <Route path='/batches' element={<Batchdetails/>} />
            
            <Route path='/training' element={<Training/>} />
            <Route path='/courses' element={<Getcourses/>} />
            <Route path='/' element={<Carousel/>} />
            <Route path='/FAQs' element={<Faqs/>} />
            <Route path='/register' element={<Register/>}/>
            <Route path='/hjksaldskjsiiuiwkjj' element={<HrDashboard/>} />
            <Route path='/hrlogin' element={<Hrlogin/>} />
            <Route path='*' element={<Nopage/>} />
            <Route path='/addbatch' element={<AddBatches/>} />
            <Route path='/details/:id' element={<CourseDetails/>} />
            <Route path='/enquiries/' element={<Enquiries/>} />
            <Route path='/logout' element={<Logout/>} />
            
        </Routes>
    </div>
  )
}

export default Routing