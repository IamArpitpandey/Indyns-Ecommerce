import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // 🛒 Add to Cart
  const addToCart = (product) => {
    console.log("Adding product:", product); // 👀 Debug log
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        console.log("Increasing quantity of", product.name);
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        console.log("Adding new product:", product.name);
        return [...prevCart, { ...product, qty: 1 }];
      }
    });
  };

  // ❌ Remove from Cart
  const removeFromCart = (id) => {
    console.log("Removing product ID:", id);
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // 🔁 Update Quantity
  const updateQuantity = (id, qty) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, qty: qty > 0 ? qty : 1 } : item
      )
    );
  };

  // 🧹 Clear Cart
  const clearCart = () => {
    console.log("Clearing cart");
    setCart([]);
  };

  // 💰 Calculate Total
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  // 🔍 Debug check
  console.log("Current Cart State:", cart);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
