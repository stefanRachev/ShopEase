//CartContext.jsx

// import PropTypes from "prop-types";
// import { createContext, useState } from "react";

// export const CartContext = createContext(null);

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [totalAmount, setTotalAmount] = useState(0);

//   const addToCart = (product) => {
//     setCartItems((prevItems) => [...prevItems, product]);
//     setTotalAmount((prevAmount) => prevAmount + product.price * product.quantity);
//   };

//   const removeFromCart = (productId) => {
//     // Първо намираш премахнатия продукт
//     const removedItem = cartItems.find(item => item.id === productId);

//     if (removedItem) {
//       // След това актуализираш сумата и кошницата
//       setTotalAmount((prevAmount) => prevAmount - removedItem.price * removedItem.quantity);
//       setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
//     }
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, totalAmount }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// CartProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

//-----------------------------------------------------------

// import PropTypes from "prop-types";
// import { createContext, useState, useEffect } from "react";

// export const CartContext = createContext(null);

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState(() => {

//     const savedCartItems = localStorage.getItem("cartItems");
//     return savedCartItems ? JSON.parse(savedCartItems) : [];
//   });

//   const [totalAmount, setTotalAmount] = useState(() => {
//     const savedTotalAmount = localStorage.getItem("totalAmount");
//     return savedTotalAmount ? JSON.parse(savedTotalAmount) : 0;
//   });

//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//     localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
//   }, [cartItems, totalAmount]);

//   const addToCart = (product) => {
//     setCartItems((prevItems) => [...prevItems, product]);
//     setTotalAmount((prevAmount) => prevAmount + product.price * product.quantity);
//   };

//   const removeFromCart = (productId) => {
//     const removedItem = cartItems.find(item => item.id === productId);
//     if (removedItem) {
//       setTotalAmount((prevAmount) => prevAmount - removedItem.price * removedItem.quantity);
//       setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
//     }
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, totalAmount }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// CartProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

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

  // Функция за изчисляване на тотала
  const calculateTotal = (items) => {
    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return total;
  };

  // Когато cartItems се промени, преизчисли тотала
  useEffect(() => {
    const newTotalAmount = calculateTotal(cartItems);
    setTotalAmount(newTotalAmount);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("totalAmount", JSON.stringify(newTotalAmount));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // Ако продуктът вече съществува, увеличи количеството му
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        // Ако не съществува, добави нов продукт
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
        // Намали количеството, ако е повече от 1
        return prevItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        // Премахни продукта, ако количеството е 1
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
      value={{ cartItems, addToCart, removeFromCart, totalAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
