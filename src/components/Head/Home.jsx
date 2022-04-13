import React from 'react';
import './Home.css';
import Product from './Product';



const Home = () => {
    const products = [
        {
            id:1,
            title: "The new Unified Harness shoulder straps are crazy comfortable making it that much easier to walk across the city with your laptop.",
            price: "11.96",
            rating: 3,
            image: "https://m.media-amazon.com/images/I/41l6VFfhYAL.jpg",
        },
        {
            id: 2,
            title: "The new Unified Harness shoulder straps are crazy comfortable making it that much easier to walk across the city with your laptop.",
            price: "299.8",
            rating: 4,
            image: "https://m.media-amazon.com/images/I/41l6VFfhYAL.jpg",
        },
        {
            id:3,
            title: "The new Unified Harness shoulder straps are crazy comfortable making it that much easier to walk across the city with your laptop.",
            price: "34.96",
            rating: 5,
            image: "https://m.media-amazon.com/images/I/41l6VFfhYAL.jpg",
        },
        {
            id: 4,
            title: "The new Unified Harness shoulder straps are crazy comfortable making it that much easier to walk across the city with your laptop.",
            price: "7.50",
            rating: 4,
            image: "https://m.media-amazon.com/images/I/41l6VFfhYAL.jpg",
        },
        {
            id:5,
            title: "The new Unified Harness shoulder straps are crazy comfortable making it that much easier to walk across the city with your laptop.",
            price: "311.96",
            rating: 3,
            image: "https://m.media-amazon.com/images/I/41l6VFfhYAL.jpg",
        },
        {
            id:6,
            title: "The new Unified Harness shoulder straps are crazy comfortable making it that much easier to walk across the city with your laptop.",
            price: "40.96",
            rating: 3,
            image: "https://m.media-amazon.com/images/I/41l6VFfhYAL.jpg",
        },

    ]
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