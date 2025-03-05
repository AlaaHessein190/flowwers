import { createContext, useContext, useState } from "react";

const ShoppingcartContext = createContext({});

export const ShoppingcartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const getItemsQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
    });
  };

  const decreaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      const item = currItems.find((item) => item.id === id);
      if (!item) return currItems;
      if (item.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  };

  return (
    <ShoppingcartContext.Provider
      value={{ cartItems, getItemsQuantity, increaseCartQuantity, decreaseCartQuantity }}
    >
      {children}
    </ShoppingcartContext.Provider>
  );
};

export const useShoppingCart = () => {
  return useContext(ShoppingcartContext);
};

export default ShoppingcartContext;
