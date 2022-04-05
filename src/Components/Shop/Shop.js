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
            {/* question answers for bonus mark  */}
            <div className='question-answers text-center mt-5'>
                <h2>Q1. How React Works?</h2>
                <p>Ans: React is a JavaScript library. It basically maintains a tree which is able to do efficient diff computations on the node.It works in asynchronous way and does all the work in a first come first serve manner. It defines the logical structure of documents and the way a document is accessed and manipulated.To make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. </p>
                <h2>Q2. How useState Works?</h2>
                <p>Ans: useState is a Hook that allows you to have state variables in functional components. It basically lets you to add state to function components. useState generates a single piece of state in and function associated with it. It can contain any type of data such as object, array, boolean etc.</p>
            </div>
        </div>
    );
};

export default Shop;