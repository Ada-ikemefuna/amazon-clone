import React, { useContext} from 'react';
import './Home.css';
import Product from './Product';
import {ProductContext} from '../ProductContext';



const Home = () => {
    const [products, setProducts] = useContext(ProductContext);
  return (
    <div className='home'>
        <div className="home_container">
            <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/306B/production/_118559321_hi063112836.jpg" alt= "home" style={{width: "1800px"}} className="home_img"/>
        

            <div className="home_row">

                {products.map((product) => (
                    <Product key={product.id} title={product.title} price={product.price} rating={product.rating} image={product.image} /> 
                ))}
            
            </div>
        </div>
    </div>
  )
}

export default Home;