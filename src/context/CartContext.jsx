import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

// Create the CartContext
const CartContext = createContext();

// CartContext Provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add a product to the cart
  const addToCart = (newProduct) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === newProduct.id);
      if (existingProduct) {
        // Update quantity if product already exists in the cart
        return prevCart.map((item) =>
          item.id === newProduct.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Add new product to the cart
      return [...prevCart, { ...newProduct, quantity: 1 }];
    });
  };

  // delete a product from the cart
  const deleteFromCart = (id) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === id);
      if (existingProduct.quantity > 1) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return prevCart.filter((item) => item.id !== id);
    });
  };


  // Get the total number of items in the cart
  const getCartItemCount = () => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, getCartItemCount, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom hook to use the CartContext
// Custom hook to use the CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
