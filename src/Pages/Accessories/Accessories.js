import React from 'react'
import Nav from '../NavBar/Nav'
import './accessories.css'
import ScrollUp from '../../components/scrollButton/ScrollUp'
import Footer from '../Footer/Footer'
import Cartbutton from '../../components/cartButton/Cartbutton'

const Accessories = () => {
    return (
        <div>
            <h1>Static Workshop</h1>
            <Nav />
            <Cartbutton />
            <div className="accessories_container">
            
            <div className="accessories_component">
                accessories
            </div>
            <div className="accessories_component">
            accessories
            </div>
            <div className="accessories_component">
            accessories
            </div>
            <div className="accessories_component">
            accessories
            </div>
            <div className="accessories_component">
            accessories
            </div>
            <div className="accessories_component">
            accessories
            </div>
        </div>

            <ScrollUp />
            <Footer />
        </div>
    )
}

export default Accessories
