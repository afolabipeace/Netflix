import React from 'react'
import "./style.css"
import netflx from '../asset/imges/Netflix-Logo.wine.png'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
const MyNavbar =() => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <img src={netflx} alt="" id='img1'/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#"> HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">TV SHOWS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">MOVIES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">NEWS&POPULAR</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">MY LIST</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">AUDIO & SUBTITTLES</a>
        </li>
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>  
    </>
  )
}

export default MyNavbar