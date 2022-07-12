import React from 'react'
import Nav from '../NavBar/Nav'
import "./apparel.css"

const Apparel = () => {
    return (
        <div>
            <h1>Existential crisis</h1>
            <Nav/>
            <div className="apparel_container">
                <div className="apparel_content">
                    Woman
                </div>
                <div className="apparel_content">
                    Man
                </div>
            </div>
        </div>
    )
}

export default Apparel
