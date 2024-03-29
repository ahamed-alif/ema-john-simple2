import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css'

const Product = (props) => {
   const {img, name, price, seller, ratings} = props.product

  console.log(props)
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'> 
            <p className='product-name'>{name}</p>
              <p>Price: ${price}</p>
              <p><small>Seller: {seller}</small></p>
              <p><small>Ratings: {ratings}</small></p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;