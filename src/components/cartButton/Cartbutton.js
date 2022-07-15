import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./cartbutton.css"
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Cartbutton = () => {

    const navigate = useNavigate();

    return (
        <div>
            <div className="cart_btn" type="button" onClick={() => navigate("/cart")} title="Go to Cart">
                <div><AiOutlineShoppingCart /></div>
            </div>
        </div>
    )
}

export default Cartbutton
