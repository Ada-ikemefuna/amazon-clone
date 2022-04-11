import { FaStar } from 'react-icons/fa';
import React from 'react';
import './CheckoutProduct.css';

const CheckoutProduct = () => {
  return (
            <div className="checkoutProduct" > 
                <img src="https://m.media-amazon.com/images/I/41l6VFfhYAL.jpg" alt="" className="checkoutProduct_image" />

                <div className="checkoutProduct_info">
                    <p className='checkoutProduct_title'> The new Unified Harness shoulder straps are crazy comfortable — 
                        making it that much easier to walk across the city with your laptop.</p>
                    <p className="checkoutProduct_price">
                        <small>$</small>
                        <strong>20</strong>
                    </p>
                    <div className="checkoutProduct_rating">
                        <FaStar style={{color: "yellow"}}/>
                        <FaStar style={{color: "yellow"}}/>
                    </div>
                    <button>Remove from Cart</button>
                </div>
            </div>
  )
}

export default CheckoutProduct;