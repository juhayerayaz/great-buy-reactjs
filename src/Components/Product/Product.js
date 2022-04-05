import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, img, price, } = props.product;

    return (
        <div className='product'>
            <img className='img-fluid rounded' src={img} alt=""></img>
            <div className='product-info'>
                <h3 className='product-name mt-3'>{name}</h3>
                <p className='fs-5 mt-3'>Price: <span className='text-warning'>${price}</span></p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn btn-primary p-3 mt-3'>
                <p className='btn-text m-0'>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>

            </button>
        </div>
    );
};

export default Product;