import React from "react";

import Images from "./assets/Images";

function Carousel(){
    return (
        <section className="container-fluid p-0">
        <div className="carousel slide" id="myslideshow" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button data-bs-target="#myslideshow" data-bs-slide-to="0" className="active"></button>
            <button data-bs-target="#myslideshow" data-bs-slide-to="1"></button>
            <button data-bs-target="#myslideshow" data-bs-slide-to="2"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Images.banner1} className="w-100" alt=""/>
            </div>
            <div className="carousel-item">
              <img src={Images.banner2} className="w-100" alt=""/>
            </div>
            <div className="carousel-item">
              <img src={Images.banner3} className="w-100" alt=""/>
            </div>
          </div>
          <button className="carousel-control-prev" data-bs-target="#myslideshow" data-bs-slide="prev"><span
              className="carousel-control-prev-icon"></span></button>
          <button className="carousel-control-next" data-bs-target="#myslideshow" data-bs-slide="next"><span
              className="carousel-control-next-icon"></span></button>
        </div>
      </section>
    )
}

export default Carousel;