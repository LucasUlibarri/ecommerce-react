import React, { createContext, useContext, useState } from "react";


const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    
    const addToCart = (product, quantity) => {
        const existingProduct = cart.find((item) => item.id === product.id);
    
        if (existingProduct) {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                )
            );
        } else {
            setCart([
                ...cart,
                { ...product, quantity },
            ]);
        }
    };

    
    const removeFromCart = (id) => {
        setCart((prev) => prev.filter(item => item.id !== id));
    };


    const finalizePurchase = async () => {
        
        cart.forEach(async (item) => {
        });

        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, finalizePurchase }}>
            {children}
        </CartContext.Provider>
    );
};
