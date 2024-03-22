import { render } from '@testing-library/react';
import React, { Component } from 'react';
import GetContact from '../Hooks/GetContact';




export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courseName: "",
            training: "",
            studentName: "",
            email: "",
            phone: "",
            courses: "",
            message: ""
        }
    }


    changeData = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    changeName = (e) => {
        this.setState({
            studentName: e.target.value
        })

    }
    changeMobile = (e) => {
        this.setState({
            mobile: e.target.value
        })

    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state);
        const nameExp = /^[a-zA-Z]+$/;
        const phoneExp = /^\d{10}$/;
        const emailExp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (this.state.email === "") {
            document.getElementById("email-status").innerHTML = "please enter mail id";
        }
        else {
            if(this.state.email.match(emailExp)){
                document.getElementById("email-status").innerHTML = "";
               
            }
            else{
                document.getElementById("email-status").innerHTML = "Invalid email Ex: abcd@gmail.com";
            }
            
        }

        if (this.state.studentName === "") {
            document.getElementById("name-status").innerHTML = "enter name"
        }
        else {
            if (this.state.studentName.match(nameExp)) {
                document.getElementById("name-status").innerHTML = ""
            }
            else {
                document.getElementById("name-status").innerHTML = "Enter Chars only"
            }

        }



        if (this.state.phone === "") {
            document.getElementById("phone-status").innerHTML = "Enter Mobile number"
        }
        else {
            if (this.state.phone.match(phoneExp)) {
                if (this.state.phone.length === 10) {
                    document.getElementById("phone-status").innerHTML = ""
                }
            }
            else {
                document.getElementById("phone-status").innerHTML = "Enter digits only"
            }
        }

        if(this.state.courseName===""){
            document.getElementById("select-status").innerHTML="Please select one"
        }
        else{
            document.getElementById("select-status").innerHTML=""
        }

        if(this.state.courseName===""){
            document.getElementById("select-status2").innerHTML="Please select one"
        }
        else{
            document.getElementById("select-status2").innerHTML=""
        }
    }
    render() {
        const { courseName, training, email, courses, studentName, phone, message } = this.state
        return (
            <div>
                <GetContact/>
                {/* <section className="container ">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-xl-8 text-center p-5 student-form">
                            <form onSubmit={this.submitHandler}>
                                <h1 className="ms-4 mb-5">Student Registration Form</h1>
                                <div className="row m-3">
                                    <div className="col">
                                        <input type="text" name='courseName' className="form-control" placeholder="Course name" aria-label="First name" value={courseName} onChange={this.changeData} />
                                    </div>
                                    <div className="col">

                                        <select name="training" id="" className="form-select" value={training} onChange={this.changeData}>
                                            <option value="" hidden>Training Type </option>
                                            <option value="class">Classroom Training</option>
                                            <option value="online">Online Training</option>
                                        </select>
                                        <p id='select-status'></p>
                                    </div>
                                </div>
                                <div className="row m-3">
                                    <div className="col">
                                        <input type="text" name='studentName' className="form-control" placeholder="Name" aria-label="First name" value={studentName} onChange={this.changeData} />
                                        <p id='name-status'></p>
                                    </div>
                                    <div className="col">
                                        <input type="text" name='email' className="form-control" placeholder="Email" aria-label="Last name" value={email} onChange={this.changeData} />
                                        <p id='email-status'></p>
                                    </div>
                                </div>
                                <div className="row m-3">
                                    <div className="col">
                                        <input type="text" name='phone' className="form-control" placeholder="Phone" aria-label="First name" value={phone} onChange={this.changeData} />
                                        <p id='phone-status'></p>
                                    </div>
                                    <div className="col">
                                        <select name="courses" id="" className="form-select" value={courses} onChange={this.changeData}>
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
                                        <p id='select-status2'></p>
                                    </div>
                                </div>
                                <div className="row m-4">
                                    <textarea className="form-control" placeholder="Message" name='message' id="" cols="30"
                                        rows="5" value={message} onChange={this.changeData}></textarea>
                                </div>
                                <div className="row m-3 text-center px-5">
                                    <div className="col-1">
                                        <input className="form-check-input text-end" type="checkbox" value="" id="flexCheckDefault" />
                                    </div>
                                    <div className="col-4">
                                        <label className="form-check-label text-start" for="flexCheckDefault">
                                            Accept Terms & Conditions
                                        </label>
                                    </div>
                                </div>

                                <input className="btn btn-danger ms-3" type="submit" />
                            </form>
                        </div>
                    </div>
                </section> */}
            </div>


        )
    }
}








