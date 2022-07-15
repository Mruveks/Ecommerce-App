import React from 'react'
import Nav from '../NavBar/Nav'
import ScrollUp from '../../components/scrollButton/ScrollUp'
import Footer from '../Footer/Footer'
import Cartbutton from '../../components/cartButton/Cartbutton'

const Sale = () => {
    return (
        <div>
            <h1>Static Workshop</h1>
            <Nav/>
            <Cartbutton />
            <div className="blog_container">
            
            <div className="blog_component">
                loremipsum
            </div>
            <div className="blog_component">
                loremipsum
            </div>
            <div className="blog_component">
            loremipsum
            </div>
            <div className="blog_component">
            loremipsum
            </div>
            <div className="blog_component">
            loremipsum
            </div>
            <div className="blog_component">
            loremipsum
            </div>
        </div>

        <ScrollUp />
            <Footer />
        </div>
    )
}

export default Sale

