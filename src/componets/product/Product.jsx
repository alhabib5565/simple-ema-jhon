import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    // console.log(props)
    let {img, name, price,seller, ratings} = props.product
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="details">
            <h6>{name}</h6>
            <p>Price: {price}</p>
            <p className='mnfctrr'>Manufacturer: {seller}</p>
            <small>ratings: {ratings}</small>
            </div>
            <button onClick={()=>props.handelId(props.product)} className='btn-cart'>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;