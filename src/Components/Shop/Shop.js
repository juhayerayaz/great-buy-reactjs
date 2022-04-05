import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // fetching data fom fakedb 
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    // adding items to cart 
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    // console.log(cart);
    // choosing 1 item randomly 
    const chooseForMe = () => {
        var myArray = cart;
        var rand = ~~(Math.random() * myArray.length);
        var rValue = myArray[rand];
        alert('You can try this one 👉  '
            + rValue.name)
    }
    // removing all items button 
    const removeItem = () => {
        setCart([]);

    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h3>Selected Items</h3>
                {
                    cart.map(product => <Cart
                        key={product.id}
                        cart={product}></Cart>)
                }
                <div>
                    <button onClick={() => chooseForMe()} className='btn btn-warning mb-3 mt-3'>Choose one For me</button>
                    <button onClick={removeItem} className='btn btn-danger'>Remove Items</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;