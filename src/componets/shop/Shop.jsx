import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shop.css'
const Shop = () => {
    let [products, setProducts] = useState([])
    useEffect(()=> {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        key={product.id} 
                        product={product}
                        ></Product>)
                }
            </div>
            <div>
                <h2>This is Order summary</h2>
            </div>
        </div>
    );
};

export default Shop;