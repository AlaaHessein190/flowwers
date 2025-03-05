import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(product => product.id === item.id);
            if (existingItem) {
                
                return prevCart.map(product =>
                    product.id === item.id ? { ...product, quantity: product.quantity + 1 } : product
                );
            }
            
            return [...prevCart, { ...item, quantity: 1 }];
        });
    };

    const increaseQuantity = (id) => {
        setCart(prevCart =>
            prevCart.map(product =>
                product.id === id ? { ...product, quantity: product.quantity + 1 } : product
            )
        );
    };

    const decreaseQuantity = (id) => {
        setCart(prevCart => {
            return prevCart.map(product => {
                if (product.id === id) {
                    if (product.quantity > 1) {
                        return { ...product, quantity: product.quantity - 1 };
                    }
                    
                    return null;
                }
                return product;
            }).filter(Boolean); 
        });
    };

    const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(product => product.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);