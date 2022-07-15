import React from 'react'
import Nav from '../NavBar/Nav'
import './newArrivals.css'
import ScrollUp from '../../components/scrollButton/ScrollUp'
import Footer from '../Footer/Footer'
import Cartbutton from '../../components/cartButton/Cartbutton'
import img from '../../Assets/img/pexels-chris-wölfer-1561011.jpg'
import img2 from '../../Assets/img/pexels-spencer-selover-428311.jpg'
import img3 from '../../Assets/img/pexels-wendy-wei-1656684.jpg'

const NewArrivals = () => {
    return (
        <div>
            <h1>Static Workshop</h1>
            <Nav/>
            <Cartbutton />
            <div className="NewArrivals_container">
            
            <div className="NewArrivals_component">
                <img src={img} alt=""/>
                <div className="NewArrivals_component_text">
                <h2>MXCII T-SHIRT</h2>
                <span>Limited edition out of space marble t-shirt signed by Italian artist Merido Giovanni</span>
                </div>
            </div>
            <div className="NewArrivals_component">
                <img src={img2} alt=""/>
                <h2>CH FIT SHIRT</h2>
            </div>
            <div className="NewArrivals_component">
                <img src={img3} alt=""/>
            </div>
            <div className="NewArrivals_component">
            loremipsum
            </div>
            <div className="NewArrivals_component">
            loremipsum
            </div>
            <div className="NewArrivals_component">
            loremipsum
            </div>
        </div>

        <ScrollUp />
            <Footer />
        </div>
    )
}

export default NewArrivals
