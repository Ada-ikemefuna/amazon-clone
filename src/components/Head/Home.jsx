import React from 'react';
import './Home.css';
import Product from './Product';


const Home = () => {
  return (
    <div className='home'>
        <div className="home_container">
            <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/306B/production/_118559321_hi063112836.jpg" alt= "home" style={{width: "1800px"}} className="home_img"/>
        

            <div className="home_row">
                <Product 
                    id="123"
                    title="The new Unified Harness shoulder straps are crazy comfortable — 
                    making it that much easier to walk across the city with your laptop. "
                    price={11.96}
                    rating={3}
                    image={"https://m.media-amazon.com/images/I/41l6VFfhYAL.jpg"}

                />
                <Product 
                    id="702"
                    title="The new Unified Harness shoulder straps are crazy comfortable — 
                    making it that much easier to walk across the city with your laptop. "
                    price={37.96}
                    rating={5}
                    image={"https://m.media-amazon.com/images/I/71rpVhSCeRL._AC_UY395_.jpg"}
                />
                
            </div>

            <div className="home_row">
                <Product 
                    id="499"
                    title="The new Unified Harness shoulder straps are crazy comfortable — 
                    making it that much easier to walk across the city with your laptop. "
                    price={269.09}
                    rating={4}
                    image={"https://cdn.shopify.com/s/files/1/0281/4984/products/2021206179_700x.jpg?v=1636932328"}
                />
                <Product 
                    id="012"
                    title="The new Unified Harness shoulder straps are crazy comfortable — 
                    making it that much easier to walk across the city with your laptop. "
                    price={11.96}
                    rating={2}
                    image={"https://cdn.shopify.com/s/files/1/0281/4984/products/2021206179_700x.jpg?v=1636932328"}/>
                <Product 
                    id="608"
                    title="The new Unified Harness shoulder straps are crazy comfortable — 
                    making it that much easier to walk across the city with your laptop. "
                    price={199.99}
                    rating={4}
                    image={"https://cdn.shopify.com/s/files/1/0281/4984/products/2021206179_700x.jpg?v=1636932328"}/>
            </div>

            <div className="home_row">
                <Product 
                    id="356"
                    title="The new Unified Harness shoulder straps are crazy comfortable — 
                    making it that much easier to walk across the city with your laptop. "
                    price={56.96}
                    rating={3}
                    image={"https://cdn.shopify.com/s/files/1/0281/4984/products/2021206179_700x.jpg?v=1636932328"}/>
                
            </div>
        </div>
    </div>
  )
}

export default Home;