import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([
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

    ]);
        return(
            <ProductContext.Provider value = {[products, setProducts]}>
                {props.children}
            </ProductContext.Provider>
        );
}
