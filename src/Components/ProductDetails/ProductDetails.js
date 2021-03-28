import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductDetails = () => {
    const { Key } = useParams()

    //load single data from mongodb 
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch('http://localhost:5000/product/' + Key)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [Key])//


    return (
        <div>
            <h1>Product Coming Soon</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetails;