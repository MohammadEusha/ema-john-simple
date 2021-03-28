import React from 'react';

const ReviewItem = (props) => {

    const { name, quantity, img, key } = props.product
    const reviewItemStyle = {
        borderBottom: '1px solid gray',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '200px'
    }
    return (
        <div style={reviewItemStyle} className="text-primary">
            <img src={img} alt="" />
            <h1 className="product-name">Product Name : {name}</h1>
            <h3>Quantity : {quantity}</h3>
            <br />
            <button onClick={() => props.removeProduct(key)} className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItem;