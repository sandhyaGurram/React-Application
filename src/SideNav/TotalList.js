import React, { useEffect, useState } from 'react'
import Images from '../HIT/assets/Images'
import axios from 'axios'
const TotalList = () => {

    const [image, setimage] = useState("")
    const [title, settitle] = useState("")
    const [price, setprice] = useState("")


  


    const postListImages = (e) => {
        e.preventDefault()
        axios.post("http://localhost:4000/vegitableList", { image, title, price })
            .then(() => {
                alert("item details are saved successfully")
                setimage("")
                settitle("")
                setprice("")
            })
    }

    const [imageData, setimageData] = useState([])
    useEffect(() => {

        axios.get("http://localhost:4000/vegitableList")
            .then((res) => setimageData(res.data))
            .catch((err) => console.log(err))
    })
    return (
        <div className='total-items'>
            <div className='container p-5 '>
                <div className='row'>
                    {imageData.map((item) => {
                        return (
                            <div className='col-12 col-sm-8 col-md-4 col-lg-3 col-xl-3 veg-list'>
                                <div className='card'>
                                    <img src={item.image} alt={item.title} />
                                    <div className='card-body text-center'>
                                        <p>{item.title}</p>
                                        <h4 className='card-title'>{item.price}</h4>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='col-6 mx-auto'>
                <form onSubmit={postListImages}>
                    <input type='file' name='image' className='form-control mb-3' accept='Images/' value={image}  onChange={(e) => setimage(e.target.files[0])} />
                    <input type='text' name='title' className='form-control mb-3' value={title} onChange={(e) => settitle(e.target.value)} />
                    <input type='text' name='price' className='form-control mb-3' value={price} onChange={(e) => setprice(e.target.value)} />
                    <input type='submit' />
                </form>
            </div>
        </div>
    )
}

export default TotalList