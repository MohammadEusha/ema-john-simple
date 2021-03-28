import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Cart = (props) => {
    const cart = props.cart
    //  ShortCut of Showing Price
    // const price = cart.reduce((total, product)=> total + product.price, 0)

    //  Showing Price using For LOOP
    let price = 0
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        price = price + product.price * product.quantity || 1;

    }
    let shipping = 0;
    if (price > 80) {
        shipping = 0;
    }
    else if (price > 30) {
        shipping = 10;
    }
    else if (price > 10) {
        shipping = 5;
    }

    const tax = (price * 0.1 + shipping * 0.1).toFixed(2);
    const grandTotal = (price + shipping + Number(tax)).toFixed(2);
    return (
        <div>
            <h2 className="text-primary">Order Summary</h2>
            <h3>Items Ordered : {cart.length} </h3>
            <p><small>Items Price :{Number((price).toFixed(2))} </small></p>
            <p><small>Shipping $ Handling : {shipping}</small></p>
            <p><small>Total Before Tax :{(price + shipping).toFixed(2)}</small></p>
            <p><small>Estimated Tax {tax} </small></p>
            <h3>Order Total : {Number(grandTotal)} </h3>
            {
                props.children
            }
        </div>
    );
};

export default Cart;