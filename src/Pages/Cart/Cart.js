import React from 'react'
import Nav from '../NavBar/Nav'
import Footer from '../Footer/Footer'
import './cart.css'

const Cart = () => {

    function Checkout(e){

    }

    return (
        <div>
            <h1>Static Workshop</h1>
            <Nav/>
            <div className="cart_container">
                 <div className="cart_row" id="cart_header">
                        <div className="cart-item">
                            ITEM
                        </div>
                        <div className="cart-price">
                            PRICE
                        </div>
                        <div className="cart-quantity">
                            QUANTITY
                        </div>
                        <div className="cart-total">
                            TOTAL
                        </div>
                        <div className="cart-remove">
                            REMOVE
                        </div>
                   
                    </div><div className="cart">
                    <div className="cart_row">test</div>
                    <div className="cart_row">test</div>
                    <div className="cart_row">test</div>
                    <div className="cart_row">test</div>
                </div>

                <div className="checkout_buttons">
                    <input type="text" className="checkout-btn" placeholder="Promo code?"></input>
                    <button className="checkout-btn" onClick={Checkout}>Checkout</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart
