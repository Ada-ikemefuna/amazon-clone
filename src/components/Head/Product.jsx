//import { FaStar } from 'react-icons/fa';
import React from 'react';
import './Product.css';
// import StateProvider  from '../StateProvider';
// import { useContext } from 'react';



const Product = ({ id, title, price, rating, image}) => {
    
    
   
  return (
            <div className="product"> 
                <div className="product_info">
                    <p>{title}</p>
                    <p className="product_price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    {/* <div className="product_rating">
                        {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p><FaStar style={{color: "yellow"}}/></p>
                        ))
                        }
                        </div> */}
                </div>

                    <img src={image} alt="img" />
               
                    <button>
                    Add To Basket</button>
                  
            </div>
  )
}

export default Product;