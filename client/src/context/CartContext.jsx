//CartContext.jsx

import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  const [totalAmount, setTotalAmount] = useState(() => {
    const savedTotalAmount = localStorage.getItem("totalAmount");
    return savedTotalAmount ? JSON.parse(savedTotalAmount) : 0;
  });

  const [isCartActive, setIsCartActive] = useState(false); // Ново състояние за активност

  const calculateTotal = (items) => {
    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return total;
  };

  useEffect(() => {
    const newTotalAmount = calculateTotal(cartItems);
    setTotalAmount(newTotalAmount);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("totalAmount", JSON.stringify(newTotalAmount));
  }, [cartItems]);

  useEffect(() => {
    if (cartItems.length > 0) {
      setIsCartActive(true);
      const timeout = setTimeout(() => {
        setIsCartActive(false); // Върни обратно след 1 секунда
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prevItems, product];
      }
    });

    setTotalAmount(
      (prevAmount) => prevAmount + product.price * product.quantity
    );
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const itemToRemove = prevItems.find((item) => item.id === productId);

      if (itemToRemove.quantity > 1) {
        return prevItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prevItems.filter((item) => item.id !== productId);
      }
    });

    const removedItem = cartItems.find((item) => item.id === productId);
    if (removedItem) {
      setTotalAmount((prevAmount) => prevAmount - removedItem.price);
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, totalAmount, isCartActive }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
