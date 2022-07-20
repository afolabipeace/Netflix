import React from "react";
import img from '../asset/imges/images.jpg'
import imgg from '../asset/imges/images (2).jpg'
import igg from '../asset/imges/images (1).jpg'

const Carol=()=>{

    return(
        <>
                        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                <img src={imgg} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                <img src={imgg} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={igg} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </>
    )
}

export default Carol