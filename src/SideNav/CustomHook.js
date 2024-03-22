import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useCustomHook = (api) => {
    const [data,setdata]=useState([])
    useEffect(()=>{
        axios.get(api)
        .then((res)=>setdata(res.data))
        .catch((err)=>console.log(err))
    })
  return data
}

export default useCustomHook