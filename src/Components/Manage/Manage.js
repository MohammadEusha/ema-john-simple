import React from 'react';

const Manage = () => {
    const product = {}
    //post data to server :1 
    const handleProduct = () => {
        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
    }//1

    return (
        <div>
            <form action="">
                <p><span>Name :</span><input type="text" /></p>
                <p><span>Price :</span><input type="text" /></p>
                <p><span>Quantity :</span><input type="text" /></p>
                <p><span>Product Image </span><input type="file" /></p>
                <button onClick={handleProduct}>Add Product</button>
            </form>

        </div>
    );
};

export default Manage;