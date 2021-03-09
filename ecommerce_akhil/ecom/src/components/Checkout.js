import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {

    const [{cart,user}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_Left">
                <img className="checkout_ad" src="https://i1.fnp.com/images/cat/m/Axis-bank-banner.jpg"
                    alt="" />

                <div>

                    {/*<h3> Hello, {user?.email}</h3>*/}
                    <h2 className="checkout_title"> Your Cart Items</h2>

                    {cart.map(item =>(
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                    {/* Cart items added by user */}
                    {/* Cart items added by user */}
                    {/* Cart items added by user */}
                    {/* Cart items added by user */}

                </div>
            </div>

            <div className="checkout_Right">

               <Subtotal/>

            </div>
        </div>
    )
}

export default Checkout
