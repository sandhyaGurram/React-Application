import axios from 'axios'
import React, { useState } from 'react'

const Enquiries = () => {
    const [username,setusername]=useState("")
    const [email,setemail]=useState("")
    const [phone,setphone]=useState("")
    const [message,setmessage]=useState("")

    const postdetails=(e)=>{
        e.preventDefault()
        const name=document.getElementById("name").value;
    const mail=document.getElementById("mail").value;
    const phone=document.getElementById("phone").value;
    const nameExp=/^[a-zA-Z]+$/;
    const mailExp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phoneExp=/^[0-9]+$/;
    let ns=false;
    let ms=false;
    let ps=false;

    if(name===""){
        document.getElementById("n-note").innerHTML="Please enter name";
    }
    else{
        if(name.match(nameExp)){
            document.getElementById("n-note").innerHTML="";
            ns=true;
        }
        else{
            document.getElementById("n-note").innerHTML="Enter only characters";
        }
    }

    if(mail===""){
        document.getElementById("m-note").innerHTML="Please enter mail";
    }
    else{
        if(mail.match(mailExp)){
            document.getElementById("m-note").innerHTML="";
            ms=true;
        }
        else{
            document.getElementById("m-note").innerHTML="Invalid email Ex: abcd@gmail.com";
        }
    }

    if(phone===""){
        document.getElementById("p-note").innerHTML="Please enter phone number";
    }
    else{
        if(phone.match(phoneExp)){
            if(phone.length===10){
                document.getElementById("p-note").innerHTML="";
                ps=true;
            }
            else{
                document.getElementById("p-note").innerHTML="Enter 10 digits only";
            }
        }
        else{
            document.getElementById("p-note").innerHTML="Enter digits only";
        }
    }
    // axios.post("http://localhost:4000/contact",{username,email,phone,message})
    // .then(()=>{
    //     alert("Contact details saved successfully")
    //     setusername("")
    //     setemail("")
    //     setphone("")
    //     setmessage("")
    // })

    if(ns===true && ms===true && ps===true){
        axios.post("http://localhost:4000/contact",{username,email,phone,message})
    .then(()=>{
        alert("Contact details saved successfully and you will recieve mail on full detail about this course")
        setusername("")
        setemail("")
        setphone("")
        setmessage("")
    })
        return true;
    }
    else{
        return false;
    }
   
      

    }

  return (
    <div className='container p-5'>
        <h4 className='text-danger text-center'>Register For Demo</h4>
        <form onSubmit={postdetails}>
        <input type="text" id='name' name="username" className="form-control mb-3" placeholder="Username" value={username} onChange={(e) => setusername(e.target.value)} /><p id="n-note"></p>
        <input type="text" id='mail' name="email" className="form-control mb-3" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} /><p id="m-note"></p>
        <input type="text" id='phone' name="phone" className="form-control mb-3" placeholder="Phone no." value={phone} onChange={(e) => setphone(e.target.value)} /><p id="p-note"></p>
        <textarea type="text" name="message" className="form-control mb-3" placeholder="Message :" value={message} onChange={(e) => setmessage(e.target.value)} />
        <div className='text-center'><input type='submit'/> </div>      
        </form>
    </div>
  )
}

export default Enquiries