import React from 'react'
import Nav from '../NavBar/Nav'
import './footwear.css'
import ScrollUp from '../../components/scrollButton/ScrollUp'
import Footer from '../Footer/Footer'

const Footwear = () => {
    return (
        <div className="container_footwear">
            <h1>Existential crisis</h1>
            <Nav/>

            <div className="footwear_container">
            
            <div className="footwear_component">
                loremipsum
            </div>
            <div className="footwear_component">
                loremipsum
            </div>
            <div className="footwear_component">
            loremipsum
            </div>
            <div className="footwear_component">
            loremipsum
            </div>
            <div className="footwear_component">
            loremipsum
            </div>
            <div className="footwear_component">
            loremipsum
            </div>
        </div>

        <ScrollUp />
            <Footer />
        </div>
    )
}

export default Footwear
