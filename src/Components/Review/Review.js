import React, { useEffect, useState } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItems/ReviewItem';
import happyImage from '../../images/giphy.gif'
import { useHistory } from 'react-router';

const Review = () => {
    const [cart, setCart] = useState([])
    const [orderPlaced, setOrderPlaced] = useState(false);
    const history = useHistory()

    const handleProceedCheckout = () => {
        history.push('/shipment')
    }

    const removeProduct = (product) => {
        const newCart = cart.filter(pd => pd.key !== product)
        setCart(newCart);
        removeFromDatabaseCart(product)
    }
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        //fetching many data keys from database:
        fetch('http://localhost:5000/productsByKeys', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productKeys)
        })
            .then(res => res.json())
            .then(data => setCart(data))
    }, [])

    let thankYouCart;
    if (orderPlaced) {
        thankYouCart = <img src={happyImage} alt="" />

    }
    return (
        <div className="twin-container d-flex">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem removeProduct={removeProduct} key={product.key} product={product}></ReviewItem>)
                }

                {
                    thankYouCart
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
                <button onClick={handleProceedCheckout} className="main-button">Proceed Checkout</button>
            </div>
        </div>
    );
};

export default Review;