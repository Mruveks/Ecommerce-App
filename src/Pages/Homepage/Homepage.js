import React from 'react'
import './homepage.css'
import Nav from '../NavBar/Nav'
import Blog from '../Blog/Blog'
import ScrollUp from '../../components/scrollButton/ScrollUp'
import Footer from '../Footer/Footer'
import Cartbutton from '../../components/cartButton/Cartbutton'

const Homepage = () => {
    return (
        <div className="container">
            <h1>Static Workshop</h1>
            <Nav />
            <Cartbutton/>
            <Blog/>
            
            <ScrollUp />
            <Footer />
        </div>
    )
}

export default Homepage
