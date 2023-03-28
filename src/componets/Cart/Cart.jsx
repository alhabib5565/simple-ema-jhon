import React from 'react';
import './Cart.css'
const Cart = (props) => {
    console.log(props.carts)
    let products = props.carts
    let total = 0 
    for (let product of products){
        total+= product.price
    }
    // console.log(price)
    return (
        <div className='order-details'>
            <h5>Order summary</h5>
            <p>Selected Item: {props.carts.length} </p>
            <p>Total Price: {total} </p>
            <p>Total Shipping Carge: </p>
            <p>Tax: </p>
            <h6>Grand Total:</h6>
        </div>
    );
};

export default Cart;