import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shop.css'
const Shop = () => {
    let [products, setProducts] = useState([])
    let [cart, setCart] = useState([])
    useEffect(()=> {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    function handelId (product){
        // console.log('added item',product, cart)
        let newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        key={product.id} 
                        product={product}
                        handelId={handelId}
                        ></Product>)
                }
            </div>
            <div>
                <h2>This is Order summary</h2>
                <h3>Order summary : {cart.length}</h3>
            </div>
        </div>
    );
};

export default Shop;