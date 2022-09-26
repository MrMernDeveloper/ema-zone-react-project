import React, { useEffect, useState } from 'react';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storeCart = getStoreCart()
        console.log(storeCart);
        const saveCart = [];
        for (const id in storeCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storeCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);

            }
        }

        setCart(saveCart);
      
    }, [products]);

    const handelAddToCart = (selectedProduct) => {
        let newCart = [];

        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart =[...rest,exists]
        }

        setCart(newCart);
        addToDb(selectedProduct.id);

        
    }
    // console.log(products)
    
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    
                    products.map(product => <Product product={product}
                        key={product.id}
                        handelAddToCart={handelAddToCart}

                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
}

export default Shop;