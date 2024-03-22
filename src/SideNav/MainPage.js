import React from 'react'
import Images from '../HIT/assets/Images'


export default function MainPage() {
  return (
    <div className='container p-5 main-page-veg m-5'>
        <div className='row'>
            <div className='col-6 d-flex p-5'>
                <div> 
                    <h4>FRUIT FRESH</h4>
                    <h1>Vegitable 100% organic</h1>
                    <p>Free Pickup and Delovery Available</p>
                    <button>SHOP NOW</button>
                </div>
            </div>
            <div className='col-6'>
                <img src={Images.vegitables}></img>
            </div>
        </div>
    </div>
  )
}
