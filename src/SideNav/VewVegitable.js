import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useCustomHook from './CustomHook'

const VewVegitable = () => {
    const [data, setdata] = useState([])
    const [id,setid]=useState("")
    const [image,setimage]=useState("")
    const [vegname,setvegname]=useState("")
    const [price,setprice]=useState("")
    const posts=useCustomHook("http://localhost:4000/vegitableList")

    const deleteitem=(itemid)=>{
        axios.delete(`http://localhost:4000/vegitableList/${itemid}`)
        .then(()=>alert("Item deleted successfully"))
        .catch((err)=>console.log(err))
    }

    const editorganic=(itemid)=>{
        axios.get(`http://localhost:4000/vegitableList/${itemid}`)
        .then((res)=>{
            setid(res.data.id)
            setimage(res.data.image)
            setvegname(res.data.vegname)
            setprice(res.data.price)
        })
        .catch((err)=>console.log(err))
    }

    const updateitemsapi=(e)=>{
        e.preventDefault()
        axios.put("http://localhost:4000/vegitableList/"+id,{image,vegname,price})
        .then(()=>alert("item updated successfully"))
        .catch((err)=>console.log(err))
    }
    return (
        <div className='container p-5 viewvegitable'>
            <div className='row'>
            <table className='table table-bordered table-responsive text-center'>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                {posts.map((item)=>{
                    return (
                        
                                <tr>
                                    <td>{item.id}</td>
                                    <td><img src={item.image} /> </td>
                                    <td>{item.vegname}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button data-bs-target="#edit" data-bs-toggle="modal" onClick={()=>editorganic(item.id)} >Edit</button>
                                        <button onClick={()=>deleteitem(item.id)}>Delete</button>
                                    </td>

                                </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                
            </div>
            {/* ----------------------modal------------- */}
            <div className='modal' id='edit'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h4>Update Details</h4>
                            <button data-bs-dismiss="modal" className='btn btn-close'></button>
                        </div>
                        <div className='modal-body'>
                            <form onSubmit={updateitemsapi}>
                                <input type='text' name='image' className='form-control mb-3' value={image} onChange={(e)=>setimage(e.target.value)} />
                                <input type='text' name='vegname' className='form-control mb-3' value={vegname} onChange={(e)=>setvegname(e.target.value)} />
                                <input type='text' name='price' className='form-control mb-3' value={price} onChange={(e)=>setprice(e.target.value)} />
                                <input type='submit' data-bs-dismiss="modal" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default VewVegitable