import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
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
    useEffect(()=>{
        const storedCard = getShoppingCart()
        console.log(storedCard)
    },[])
    function handelId (product){
        // console.log('added item',product, cart)
        let newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
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
            <div className='summary'>
                <Cart carts={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;