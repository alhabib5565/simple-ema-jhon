import React from 'react';
import './Cart.css'
const Cart = (props) => {
    // console.log(props.carts)
    let products = props.carts
    let totalPrice = 0 
    let totalShipping = 0
    for (let product of products){
        totalPrice+= product.price
        totalShipping += product.shipping
        // console.log(product)
    }
    let totalTax = totalPrice*10 / 100
    let grandTotal = totalPrice + totalShipping + totalTax
    // console.log(price)
    return (
        <div className='order-details'>
            <h5>Order summary</h5>
            <p>Selected Item: {props.carts.length} </p>
            <p>Total Price: ${totalPrice} </p>
            <p>Total Shipping Carge: ${totalShipping} </p>
            <p>Tax: ${totalTax} </p>
            <h6>Grand Total: ${grandTotal}</h6>
        </div>
    );
};

export default Cart;