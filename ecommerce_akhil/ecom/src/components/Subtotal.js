import React from 'react';
import "./Subtotal.css";
import CurrencyFormart from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getCarttotal } from './reducer';

function Subtotal() {
    const[{cart}] = useStateValue();
    return (
        <div className="subtotal">

            <CurrencyFormart
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({cart?.length} items): <strong>{value}</strong>
                        </p>

                        <small className="subtotal_gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}

                decimalScale={2}
                value={getCarttotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}

            />
            <button>Proceed to Checkout</button>

        </div>
    )
}

export default Subtotal
