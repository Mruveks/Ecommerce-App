import React from 'react'
import './homepage.css'
import Nav from '../NavBar/Nav'
import Blog from '../Blog/Blog'
import ScrollUp from '../../components/scrollButton/ScrollUp'
import Footer from '../Footer/Footer'

const Homepage = () => {
    return (
        <div className="container">
            <h1>Existential crisis</h1>
            <Nav />
            <Blog/>
            
            <ScrollUp />
            <Footer />
        </div>
    )
}

export default Homepage
