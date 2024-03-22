import React, { useState } from "react";
import { Component } from "react";
import Images from '../HIT/assets/Images'
import MainPage from "./MainPage";
import Allproducts from "./Allproducts";
import Vegitables from "./Vegitables";


const SideNavbar = () => {
    const [view,setview]=useState("")

    const MainView=()=>{
        let output=""
        if(view===""){
            output=<MainPage/>
        }
        else if(view==="vegitables"){
            output=[<Allproducts/>,<Vegitables/>]
            
        }
        return output
    }
    return (

        <div className="row m-0 p-0">
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 sideview">
                <h1 className="mb-5 text-center pt-5">All departments</h1>
                <ul>
                    <li onClick={()=>setview("vegitables")}>Vegetables</li>
                    <li>Fruit & Nut Gifts</li>
                    <li>Fresh Berries</li>
                    <li>Ocean Foods</li>
                    <li>Butter & Eggs</li>
                    <li>Fastfood</li>
                </ul>
            </div>
            <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                {/* <MainPage/> */}
                {MainView()}
            </div>
        </div>

    )
}
export default SideNavbar 