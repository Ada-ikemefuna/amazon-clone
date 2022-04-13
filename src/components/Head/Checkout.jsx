import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Checkout.css';
import Subtotal from './Subtotal';
import StateProvider  from '../StateProvider';
import { useContext } from 'react';

const Checkout = () => {
  const {items} = useContext(StateProvider);
  return (
    <div className="checkout">
        <div className="checkout_left">
        <img src="https://thumbs.dreamstime.com/b/
              environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" alt="ad" className='checkout_ad'/>
            <div>
              <h2 className="checkout_title">Your Shopping Basket</h2>
              
            </div>     
        </div>


        <div className="checkout_right">
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout;