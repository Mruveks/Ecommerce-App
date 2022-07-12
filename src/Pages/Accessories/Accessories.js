import React from 'react'
import Nav from '../NavBar/Nav'
import './accessories.css'
import ScrollUp from '../../components/scrollButton/ScrollUp'
import Footer from '../Footer/Footer'

const Accessories = () => {
    return (
        <div>
            <h1>Existential crisis</h1>
            <Nav />

            <div className="accessories_container">
            
            <div className="accessories_component">
                loremipsum
            </div>
            <div className="accessories_component">
                loremipsum
            </div>
            <div className="accessories_component">
            loremipsum
            </div>
            <div className="accessories_component">
            loremipsum
            </div>
            <div className="accessories_component">
            loremipsum
            </div>
            <div className="accessories_component">
            loremipsum
            </div>
        </div>

        <ScrollUp />
            <Footer />
        </div>
    )
}

export default Accessories
