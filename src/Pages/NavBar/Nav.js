import React from 'react'
import './nav.css'
import {useNavigate } from "react-router-dom"

const Nav = () => {

  const navigate = useNavigate();

  return (
    
    <nav>
      <div class="header"v type="button" onClick={() => navigate("/homepage")} >Home</div>
      <div class="header" type="button" onClick={() => navigate("/new")} >New Arrivals</div>
      <div class="header" type="button" onClick={() => navigate("/apparel")} >Apparel</div>
      <div class="header" type="button" onClick={() => navigate("/footwear")} >Footwear</div>
      <div class="header" type="button" onClick={() => navigate("/accessories")} >Accessories</div>
      <div class="header" type="button" id="sale" onClick={() => navigate("/sale")} >Sale</div>
    </nav>
       
    
  )
}

export default Nav
