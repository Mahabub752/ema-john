import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    // const total = cart.reduce( (total, prd) => total + prd.price , 0)

    let total = 0;
    for(let i = 0; i < cart.length; i++){
            const product = cart[i];
            total = total + product.price;
    }

    let shipping = 35.99;
    if( total > 56){
        shipping = 0;
    };

    

    return (
        <div>
            <h2>Order Summary</h2>
            <h4>Items Order : {cart.length} </h4>
            <p>Shipping Cot : {shipping}</p>
            <h3>Total Price : {total} </h3>
        </div>
    );
};

export default Cart;