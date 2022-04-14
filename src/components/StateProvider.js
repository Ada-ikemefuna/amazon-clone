import React, { createContext, useState } from 'react';

const StateContext = createContext();
export function StateProvider({children}) {
    const [items, setItems] = useState([])
    console.log(items)

    const addToCart = () =>{
        setItems()
    }

    return(
    <StateContext.Provider value={{items, addToCart}}>
        {children}
    </StateContext.Provider>
    );
}

export default StateContext;

