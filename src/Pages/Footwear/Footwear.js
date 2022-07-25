import React from 'react'
import Nav from '../NavBar/Nav'
import './footwear.css'
import ScrollUp from '../../components/scrollButton/ScrollUp'
import Footer from '../Footer/Footer'
import Cartbutton from '../../components/cartButton/Cartbutton'

const Footwear = () => {
    return (
        <div className="container_footwear">
            <h1>Static Workshop</h1>
            <Nav/>
            <Cartbutton />
            <div className="footwear_container">
            
            <div className="footwear_component">
            footwear
            </div>
            <div className="footwear_component">
            footwear
            </div>
            <div className="footwear_component">
            footwear
            </div>
            <div className="footwear_component">
            footwear
            </div>
            <div className="footwear_component">
            footwear
            </div>
            <div className="footwear_component">
            footwear
            </div>
        </div>

        <ScrollUp />
           <Footer />
        </div>
    )
}

export default Footwear
