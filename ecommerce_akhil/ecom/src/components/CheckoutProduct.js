import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'
export default function CheckoutProduct({ id, image, title, price, rating }) {

    const [{ cart }, dispatch] = useStateValue();
    const btnclkremovefrmbacket = () => {
        console.log(cart);

        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }


    return (
        <div className="checkoutproduct">
            <img className="checkoutProduct_img" src={image} alt="" />

            <div className="checkoutProduct_info">

                <p className="checkoutProduct_title" >{title} </p>

                <p className="checkoutProduct_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="produc_rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={btnclkremovefrmbacket} >Remove from Cart</button>

            </div>

        </div>
    )
}
