import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    return (
        <div className='cart'>
            <p>{cart.name}</p>
            <img className='w-25' src={cart.img} alt="" />
        </div>
    );
};

export default Cart;