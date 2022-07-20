import React from "react";
// import bootstrap from "bootstrap";
import './style.css'
import view from '../asset/imges/school.jpg';
import MyCard from "./MyCard";
const Middle = ()=>{

    return(
        <>
           <img src={view} alt="" id="img2"/>
           <div className="d-flex flex-wrap justify-content-evenly">
               <MyCard/>
           </div>
        </>
    )
}

export default Middle