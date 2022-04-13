import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import StateProvider  from '../StateProvider';
import { useContext } from 'react';

const Subtotal = () => {
    const { items } = useContext(StateProvider);
  return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        Subtotal({items.length} items): <strong>$0</strong>
                    </p>
                    <small className="subtotal_gift">
                        <input type="checkbox" /> This order contains a gift.
                    </small>
                    <button>Proceed To Checkout</button>
                </>
            )}

            decimalScale={2}
            value={0}
            displayType={"text"}
            thousandSeparator={true}
            // prefix={$}
        />
    </div>
  )
}

export default Subtotal;