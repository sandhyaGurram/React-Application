import React, { useState } from 'react'
import Courses from '../HIT/Courses'
import Header from '../HIT/Header'
import Footer from '../HIT/Footer'
import { useNavigate } from 'react-router'
import Routing from '../HIT/Routing'

import Nopage from './Nopage'
import Addcourse from './Addcourse'
import Viewcourse from './Viewcourse'
import Carousel from '../HIT/Carousel'
import AddBatches from '../CRUDClass/AddBatches'
import GetBatch from '../Hooks/GetBatch'
import ViewBatch from './ViewBatch'
import AddBatch from './AddBatch'
import ViewEnquiry from './ViewEnquiry'

const HrDashboard = () => {
  const [view,setview]=useState("")
  const DashboardView=()=>{
    let output="";
    if(view===""){
      output=<Carousel/>
    }
    else if(view==="addcourses"){
      output=<Addcourse/>
    }
    else if(view==="viewcourses"){
      output=<Viewcourse/>
    }
    else if(view==="addbatch"){
      output=<AddBatch/>
    }
    else if(view==="viewbatch"){
      output=<ViewBatch/>
    }
    else if(view==="viewenquiry"){
      output=<ViewEnquiry/>
    }
    return output
  }

  return (
    <div className='container-fluid dashboard py-5'>
        <div className='row'>
            <aside className='col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 '>
                <h4 className='text-center text-danger'>Dashboard</h4>
                <button onClick={()=>setview("addcourses")}>Add Courses</button>
                <button onClick={()=>setview("viewcourses")} >View Courses</button>
                <button onClick={()=>setview("addbatch")}>Add Batches</button>
                <button onClick={()=>setview("viewbatch")} >View Batches </button>
                <button>Latest News</button>
                <button onClick={()=>setview("viewenquiry")}>View Enquiries</button>
            </aside>
            <div className='col-12 col-sm-12 col-md-8 col-lg-8 col-xl-9 '>
                {DashboardView()}
            </div>
        </div>

    </div>
  )
}

export default HrDashboard