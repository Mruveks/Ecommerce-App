import React from 'react'
import Nav from '../NavBar/Nav'
import './newArrivals.css'
import ScrollUp from '../../components/scrollButton/ScrollUp'
import Footer from '../Footer/Footer'
const NewArrivals = () => {
    return (
        <div>
            <h1>Existential crisis</h1>
            <Nav/>

            <div className="NewArrivals_container">
            
            <div className="NewArrivals_component">
                loremipsum
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
