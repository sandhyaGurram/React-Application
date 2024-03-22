import React, { useState } from "react";
import { Component } from "react";
import Images from "../HIT/assets/Images";


const CheckItem=() =>{
    const [count, setcount]=useState(0)
    
  return (
    <div>
        <div className="container-fluid bg-veg mt-5 px-0 ">
            <div className="bg-color flex  ">
                <div>
                <h1>Checkout</h1>
                <p>Home-Checkout</p>
                </div>
            </div>
        </div>
        <div className="container p-5 check-list">
            <table className="table">
                <thead className="table-success">
                    <tr>
                        <th>Products</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th> </th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> <img src={Images.bgVeg}></img>Organic Vegitables </td>
                        <td>$50.00</td>
                        <td><p>
                        <button className="btn" onClick={()=>setcount(count+1)}>+</button>{count}
                            <button className="btn" onClick={()=>setcount(count-1)}>-</button>
                        </p>
                            
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
  )
}


export default CheckItem