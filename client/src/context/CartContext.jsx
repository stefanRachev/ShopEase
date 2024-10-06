//CartContext.jsx

import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setTotalAmount((prevAmount) => prevAmount + product.price * product.quantity);
  };

  const removeFromCart = (productId) => {
    // Първо намираш премахнатия продукт
    const removedItem = cartItems.find(item => item.id === productId);
    
    if (removedItem) {
      // След това актуализираш сумата и кошницата
      setTotalAmount((prevAmount) => prevAmount - removedItem.price * removedItem.quantity);
      setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, totalAmount }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

