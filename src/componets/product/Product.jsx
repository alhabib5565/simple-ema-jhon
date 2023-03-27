import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props)
    let {img, name, price, quantity} = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="details">
            <h6>{name}</h6>
            <p>Price: {price}</p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;