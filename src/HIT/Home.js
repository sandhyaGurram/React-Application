import React from 'react'
import './style.css';
import Images from './assets/Images';
import { NavLink } from 'react-router-dom'

function Home() {
    return (
        <div>
            <section class="container-fluid learn ">
                <h1 class="text-center animate-heading">What <span class="text-danger">Skills you will Learn</span></h1>
                <p class="paragraph"></p>
                <p class="paragraph mb-5"></p>
                <div class="row">
                    <div class="col-12 col-sm-12 col-lg-4 col-xl-4 mb-3 animate-courses">
                        <div class="card ">
                            <p data-bs-target="#course1" data-bs-toggle="collapse" class="card-text"><i class="bi bi-arrow-90deg-right"></i> MERN Full Stack Developer course</p>
                        </div>
                        <div class="collapse text-start px-5" id="course1">
                            <p><i class="bi bi-arrow-90deg-right"></i> HTML & HTML5</p>
                            <p><i class="bi bi-arrow-90deg-right"></i> CSS & CSS3</p>
                            <p><i class="bi bi-arrow-90deg-right"></i> Bootstrap</p>
                            <p><i class="bi bi-arrow-90deg-right"></i> Java Script</p>
                            <p><i class="bi bi-arrow-90deg-right"></i> JQuery</p>
                            <p><i class="bi bi-arrow-90deg-right"></i> React JS</p>
                            <p><i class="bi bi-arrow-90deg-right"></i> Redux</p>
                            <p><i class="bi bi-arrow-90deg-right"></i> Express JS</p>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-lg-4 col-xl-4 mb-3 animate-courses">
                        <div class="card ">
                            <p data-bs-target="#course2" data-bs-toggle="collapse" class="card-text"><i class="bi bi-arrow-90deg-right"></i> MERN Full Stack Developer course</p>
                        </div>
                        <div class="collapse text-start px-5" id="course2">
                            <p><i class="bi bi-arrow-90deg-right"></i> HTML & HTML5</p>
                            <p><i class="bi bi-arrow-90deg-right"></i> CSS & CSS3</p>
                            <p><i class="bi bi-arrow-90deg-right"></i> Bootstrap</p>
                            <p><i class="bi bi-arrow-90deg-right"></i> Java Script</p>
                            <p><i class="bi bi-arrow-90deg-right"></i> JQuery</p>
                            <p><i class="bi bi-arrow-90deg-right"></i> React JS</p>
                            <p><i class="bi bi-arrow-90deg-right"></i> Redux</p>
                            <p><i class="bi bi-arrow-90deg-right"></i> Express JS</p>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-lg-4 col-xl-4 mb-3 animate-courses">
                        <div class="card ">
                            <p data-bs-target="#course3" data-bs-toggle="collapse" class="card-text"><i class="bi bi-arrow-90deg-right"></i> MERN Full Stack Developer course</p>
                        </div>
                        <div class="collapse text-start px-5" id="course3">
                            <p><i class="bi bi-arrow-90deg-right"></i> HTML & HTML5</p>
                            <p><i class="bi bi-arrow-90deg-right"></i> CSS & CSS3</p>
                            <p><i class="bi bi-arrow-90deg-right"></i> Bootstrap</p>
                            <p><i class="bi bi-arrow-90deg-right"></i> Java Script</p>
                            <p><i class="bi bi-arrow-90deg-right"></i> JQuery</p>
                            <p><i class="bi bi-arrow-90deg-right"></i> React JS</p>
                            <p><i class="bi bi-arrow-90deg-right"></i> Redux</p>
                            <p><i class="bi bi-arrow-90deg-right"></i> Express JS</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="container-fluid p-5 eligibility">
                <div class="row">
                    <div class="col-12 col-sm-12 col-xl-4 text-center mb-5">
                        <img src={Images.eligibility} class="w-50" alt="" />
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 px-5">
                        <h1 class="text-center mb-5 animate-h1">Course <span class="text-danger">Eligibility</span></h1>
                        <div class="row ">
                            <div class="col-6 animate-eligible1">
                                <p><i class="bi bi-check-circle-fill"></i> Any Degree - B. Tech, BSc, B.Com, BBA, etc.</p>
                            </div>
                            <div class="col-6 animate-eligible3">
                                <p><i class="bi bi-check-circle-fill"></i> Any Degree - B. Tech, BSc, B.Com, BBA, etc.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6 animate-eligible1">
                                <p><i class="bi bi-check-circle-fill"></i> Any Degree - B. Tech, BSc, B.Com, BBA, etc.</p>
                            </div>
                            <div class="col-6 animate-eligible3">
                                <p><i class="bi bi-check-circle-fill"></i> Any Degree - B. Tech, BSc, B.Com, BBA, etc.</p>
                            </div>
                        </div>
                        <p className='text-center mt-5'><NavLink to="/register" >ENROLL THIS COURSE</NavLink></p>


                    </div>
                </div>
            </section>


            <section class="container content p-5">
                <div class="row">
                    <div class="col-12 col-sm-12 col-lg-8 col-xl-8 p-5">
                        <h3>Course <span class="text-danger">Content</span></h3>
                        <div class="card mb-1 animate__animated animate__fadeInDown">
                            <p class="card-text text-start p-2" data-bs-target="#content1" data-bs-toggle="collapse"><i
                                className="bi bi-arrow-90deg-right"></i> MERN Full Stack Developer course</p>
                        </div>
                        <div class="collapse text-start px-5" id="content1">
                            <p><i className="bi bi-arrow-90deg-right"></i> HTML & HTML5</p>
                            <p><i className="bi bi-arrow-90deg-right"></i> CSS & CSS3</p>
                            <p><i className="bi bi-arrow-90deg-right"></i> Bootstrap</p>
                            <p><i className="bi bi-arrow-90deg-right"></i> Java Script</p>
                            <p><i className="bi bi-arrow-90deg-right"></i> JQuery</p>
                            <p><i className="bi bi-arrow-90deg-right"></i> React JS</p>
                            <p><i className="bi bi-arrow-90deg-right"></i> Redux</p>
                            <p><i className="bi bi-arrow-90deg-right"></i> Express JS</p>
                        </div>
                        <div class="card mb-1 animate__animated animate__fadeInLeft">
                            <p class="card-text text-start p-2" data-bs-target="#content2" data-bs-toggle="collapse"><i
                                className="bi bi-arrow-90deg-right"></i> Python Full Stack Developer course</p>
                        </div>
                        <div class="collapse text-start px-5" id="content2">
                            <p><i className="bi bi-arrow-90deg-right"></i> HTML & HTML5</p>
                            <p><i className="bi bi-arrow-90deg-right"></i> CSS & CSS3</p>
                            <p><i className="bi bi-arrow-90deg-right"></i> Bootstrap</p>
                            <p><i className="bi bi-arrow-90deg-right"></i> Java Script</p>
                            <p><i className="bi bi-arrow-90deg-right"></i> JQuery</p>
                            <p><i className="bi bi-arrow-90deg-right"></i> React JS</p>
                            <p><i className="bi bi-arrow-90deg-right"></i> Redux</p>
                            <p><i className="bi bi-arrow-90deg-right"></i> Express JS</p>
                        </div>
                        <div class="card mb-1 animate__animated animate__fadeInUp">
                            <p class="card-text text-start p-2" data-bs-target="#content3" data-bs-toggle="collapse"><i
                                className="bi bi-arrow-90deg-right"></i> Java Full Stack Developer course</p>
                        </div>
                        <div class="collapse text-start px-5" id="content3">
                            <p><i className="bi bi-arrow-90deg-right"></i> HTML & HTML5</p>
                            <p><i className="bi bi-arrow-90deg-right"></i> CSS & CSS3</p>
                            <p><i className="bi bi-arrow-90deg-right"></i> Bootstrap</p>
                            <p><i className="bi bi-arrow-90deg-right"></i> Java Script</p>
                            <p><i className="bi bi-arrow-90deg-right"></i> JQuery</p>
                            <p><i className="bi bi-arrow-90deg-right"></i> React JS</p>
                            <p><i className="bi bi-arrow-90deg-right"></i> Redux</p>
                            <p><i className="bi bi-arrow-90deg-right"></i> Express JS</p>
                        </div>
                        <div class="card mb-1 animate__animated animate__fadeInTopLeft">
                            <p class="card-text text-start p-2" data-bs-target="#content4" data-bs-toggle="collapse"><i
                                className="bi bi-arrow-90deg-right"></i> Other Features</p>
                        </div>
                        <div class="collapse text-start px-5" id="content4">
                            <p><i class="bi bi-arrow-right"></i> Live Projects</p>
                            <p><i class="bi bi-arrow-right"></i> Material Softcopy</p>
                            <p><i class="bi bi-arrow-right"></i> Course Complete Certificate</p>
                            <p><i class="bi bi-arrow-right"></i> Interview Questions</p>
                            <p><i class="bi bi-arrow-right"></i> Placement Assistance</p>
                        </div>


                    </div>
                    <div class="col-12 col-sm-12 col-lg-4 col-xl-4  demo ">
                        <form action="" >
                            <h3>BOOK A LIVE DEMO</h3>
                            <input type="text" id="name2" class="form-control" placeholder="Name" />
                            <p id="n2"></p>
                            <input type="text" id="email2" class="form-control" placeholder="Email" />
                            <p id="e2"></p>
                            <input type="text" id="phone2" class="form-control" placeholder="Phone" />
                            <p id="p2"></p>
                            <textarea class="form-control" placeholder="Message" id="message2" cols="30" rows="3"></textarea>
                            <p id="m2"></p>
                            <input class="form-control" type="submit" />
                        </form>

                    </div>
                </div>
            </section>


        </div>
    )
}

export default Home