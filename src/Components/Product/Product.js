import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    
    // ShortCut
    // const {img, name, seller, price, stock } = props.product
    return (
        <div className="product">
            <div>
                <img src={props.product.img} alt=""/>
            </div>
            <div className="information">
             <h3>{props.product.name}</h3>
             <p><small>by : {props.product.seller}</small></p>
             <p><small>${props.product.price}</small></p>
             <p><small>only {props.product.stock}</small></p>
             <button  className="main-button" onClick={()=>props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} />Add To Curt</button>
            </div>
            
        </div>
    );
};

export default Product;