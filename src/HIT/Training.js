import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.json"
import Images from './assets/Images';

function Training() {
  return (
    <section className="container training-method">
      <h1 className="text-center p-3">Our Training <span className="text-danger">Approch</span></h1>
      <div className="row text-center">
        <div className="col-8 col-sm-8 mx-auto col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-5 text-center">
          <div className="card flex">
            <img src={Images.method1} className="w-50" alt="" />
            <div className="card-body">
              <p className="card-title">Theory</p>
            </div>  
          </div>
        </div>
        <div className="col-8 col-sm-8 mx-auto col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-5 ">
          <div className="card flex">
            <img src={Images.method2} className="w-50" alt="" />
            <div className="card-body">
              <p className="card-title">Project Work</p>
            </div>
          </div>
        </div>
        <div className="col-8 col-sm-8 mx-auto col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-5 ">
          <div className="card flex">
            <img src={Images.method3} className="w-50" alt="" />
            <div className="card-body">
              <p className="card-title">Assignments</p>
            </div>
          </div>
        </div>
        <div className="col-8 col-sm-8 mx-auto col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-5 ">
          <div className="card flex">
            <img src={Images.method4} className="w-50" alt="" />
            <div className="card-body">
              <p className="card-title">Certification</p>
            </div>
          </div>
        </div>
        <div className="col-8 col-sm-8 mx-auto col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-5 ">
          <div className="card flex">
            <img src={Images.method5} className="w-50" alt="" />
            <div className="card-body">
              <p className="card-title">Resume Preparation</p>
            </div>
          </div>
        </div>
        <div className="col-8 col-sm-8 mx-auto col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-5 ">
          <div className="card flex">
            <img src={Images.method6} className="w-50" alt="" />
            <div className="card-body">
              <p className="card-title">Interview Preparation</p>
            </div>
          </div>
        </div>
        <div className="col-8 col-sm-8 mx-auto col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-5 ">
          <div className="card flex">
            <img src={Images.method7} className="w-50" alt="" />
            <div className="card-body">
              <p className="card-title">Resume Marketing</p>
            </div>
          </div>
        </div>
        <div className="col-8 col-sm-8 mx-auto col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-5 ">
          <div className="card flex">
            <img src={Images.method8} className="w-50" alt="" />
            <div className="card-body">
              <p className="card-title">Placement Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Training;