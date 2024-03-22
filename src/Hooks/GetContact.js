import axios from 'axios'
import React, { useState } from 'react'

const GetContact = () => {
    const [name,setName]=useState("")
    const [mobile,setMobile]=useState("")
    const [email,setEmail]=useState("")
    const [course,setCourse]=useState("")
    const [msg,setMsg]=useState("")
    const postContactData=(e)=>{
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
    if(ns===true && ms===true && ps===true){
        axios.post("http://localhost:5000/contact",{name,mobile,email,course,msg})
        .then(()=>{
            alert("Contact details saved successfully")
            setName("")
            setMobile("")
            setEmail("")
            setCourse("")
            setMsg("")
        })
        return true;
    }
    else{
        return false;
    }
        
    }
  return (
    <div>
        <div className="container p-5">
                <div className="col-8 col-lg-4 mx-auto">
                <form onSubmit={postContactData}>
                    <input id='name' type="text" name="studentName" className="form-control mb-3" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)} /><p id="n-note"></p>
                    <input id='phone' type="text" name="mobile" className="form-control mb-3" placeholder='Mobile Number' value={mobile} onChange={(e)=>setMobile(e.target.value)}/><p id="p-note"></p>
                    <input id='mail' type="text" name="email" className="form-control mb-3" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/><p id="m-note"></p>
                    <select name="courses" id="" className="form-select mb-3" value={course} onChange={(e)=>setCourse(e.target.value)}>
                                            <option value="" hidden>Interested Courses</option>
                                            <option value="pf">Python Fullstack</option>
                                            <option value="mern">MERN Full Stack Developer</option>
                                            <option value="ui">UI Development</option>
                                            <option value="rjs">React JS</option>
                                            <option value="ui ux">UI/UX Designing</option>
                                            <option value="njs">Node JS</option>
                                            <option value="web">Web Designing</option>
                                            <option value="php">PHP with MySQL</option>
                                            <option value="dm">Digital Marketing</option>
                                            <option value="p">Python</option>
                                        </select>
                    <textarea className="form-control mb-3" placeholder="Message" name='message' id="" cols="30"
                                        rows="5" value={msg} onChange={(e)=>setMsg(e.target.value)}></textarea>
                    <input type="submit" value="Add Batch" className="btn btn-success"/>
                </form>
                </div>
            </div>
    </div>
  )
}

export default GetContact