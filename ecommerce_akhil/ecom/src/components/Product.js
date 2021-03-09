
import "./Product.css"
import { useStateValue } from './StateProvider'

function Product({id, title, image, price, rating }) {


    const [{cart},dispatch]= useStateValue();

        console.log("this is your cart", cart );
    const btnclkaddtoCart = () =>{

       // console.log("add to cart clicked");
        //dispach item to data layer/ reducer
        dispatch({

            type: 'ADD_TO_CART',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        });
    }
    return (

        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>

                <div className="produc_rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>

            </div>

            <img src={image}alt="" />

            <button onClick={btnclkaddtoCart}>Add to Cart</button>
        </div>

    )
}

export default Product
