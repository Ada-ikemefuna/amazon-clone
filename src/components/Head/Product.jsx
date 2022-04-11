import { FaStar } from 'react-icons/fa';
import React from 'react';
import './Product.css';
//import { useStateValue } from '../StateProvider';

const Product = ({ id, title, price, rating, image}) => {
    // const [state, dispatch] = useStateValue();

    // const addToBasket = () => {
    //     dispatch({
    //         type: "ADD_TO_BASKET",
    //         item: {
    //             id: id,
    //             image: image,
    //             price: price,
    //             rating: rating,
    //         },
    //     });
    // }

  return (
            <div className="product" > 
                <div className="product_info">
                    <p>{title}</p>
                    <p className="product_price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="product_rating">
                        {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p><FaStar style={{color: "yellow"}}/></p>
                        ))
                        }
                        </div>
                </div>

                    <img src={image} alt="img" />
               
                    <button>Add To Basket</button>
                  
            </div>
  )
}

export default Product;