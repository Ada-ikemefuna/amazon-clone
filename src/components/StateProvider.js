import React, { createContext, useState } from 'react';

const StateContext = createContext();
export function StateProvider({children}) {
    const [items, setItems] = useState([])
    console.log(items)

    const addToCart = (title, price, rating, image) =>{
        setItems((prevItems) => [...prevItems, title, price, rating, image ])
    }

    return(
    <StateContext.Provider value={{items, addToCart}}>
        {children}
    </StateContext.Provider>
    );
}

export default StateContext;

