import React from 'react'
import { Route, Routes } from 'react-router';
import MainPage from './MainPage';
import CheckItem from './CheckItem';
import PostItems from './PostItems';
import TotalList from './TotalList';
import SideNavbar from './SideNavbar';
import Adminlogin from './Adminlogin';


function Router() {
    return (
      <div>
        
          <Routes>
          <Route path='/main' element={<MainPage/>} />
          <Route path='/checkitems' element={<CheckItem/>} />
          <Route path='/postitem' element={<PostItems/>} />
          <Route path='/totallist' element={<TotalList/>} />
          <Route path='/hdjkkdislkaksndnsmj' element={<SideNavbar/>} />
          <Route path='/login' element={<Adminlogin/>} />
          </Routes>
    </div>
  )
}

export default Router