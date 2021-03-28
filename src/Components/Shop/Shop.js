import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"
const Shop = () => {
    // const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])


    //fetch data from mongo 
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])//

    useEffect(() => {
        fetch('/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

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

    const handleAddProduct = (product) => {
        const toBeAdded = product.key
        const sameProduct = cart.find(pd => pd.key === toBeAdded);

        let count = 1;
        let newCart
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const otherProduct = cart.filter(pd => pd.key !== toBeAdded)
            newCart = [...otherProduct, sameProduct]
        }

        else {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.length === 0 && <h1>Loading</h1>
                }

                {
                    products.map(product => <Product key={product.key} showAddToCart={true} handleAddProduct={handleAddProduct} product={product}></Product>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
                <Link to="/review"><button className="main-button"> <FontAwesomeIcon icon={faShoppingCart} />Review Your Order </button></Link>
            </div>
        </div>
    );
};

export default Shop;