import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import './Shop.css'
const Shop = () => {
    let [products, setProducts] = useState([])
    let [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    useEffect(() => {
        const storedCard = getShoppingCart()
        let savecart = []
        for (let id in storedCard) {
            // console.log('id', id)
            let saveProducts = products.find(product => product.id === id)
            console.log(saveProducts)
            if (saveProducts) {
                let quantity = storedCard[id]
                saveProducts.quantity = quantity
                savecart.push(saveProducts)
            }
            setCart(savecart)

        }
        // console.log(storedCard)
    }, [products])
    function handelId(product) {
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