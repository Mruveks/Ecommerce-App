import React from 'react'
import Nav from '../NavBar/Nav'
import ScrollUp from '../../components/scrollButton/ScrollUp'
import Footer from '../Footer/Footer'
const Sale = () => {
    return (
        <div>
            <h1>Existential crisis</h1>
            <Nav/>

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

