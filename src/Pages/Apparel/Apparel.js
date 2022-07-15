import React from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../NavBar/Nav'
import "./apparel.css"
import ScrollUp from '../../components/scrollButton/ScrollUp'
import Footer from '../Footer/Footer'
import Cartbutton from '../../components/cartButton/Cartbutton'

const Apparel = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Static Workshop</h1>
            <Nav/>
            <Cartbutton />
            <div className="apparel_container">
                <div className="apparel_content" onClick={() => navigate("/apparel/woman")}>
                    Woman
                </div>
                <div className="apparel_content" onClick={() => navigate("/apparel/man")}>
                    Man
                </div>
            </div>

            <ScrollUp />
            <Footer />
        </div>
    )
}

export default Apparel
