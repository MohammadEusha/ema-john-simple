import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';
const Product = (props) => {

    // ShortCut
    const { img, name, seller, price, stock, key } = props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="information">
                <h3 className="product-information"><Link to={"/product/" + key} >{name}</Link></h3>
                <p><small>by : {seller}</small></p>
                <p><small>${price}</small></p>
                <p><small>only {stock}</small></p>
                {props.showAddToCart && <button className="main-button" onClick={() => props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} />Add To Curt</button>}
            </div>

        </div>
    );
};

export default Product;