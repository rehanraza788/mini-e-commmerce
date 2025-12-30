"use client";

import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  const [cartItem, setCartItem] = useState([]);
  console.log(cartItem);

  //   fetch GET product from api
  const fetchProduct = async () => {
    const res = await fetch("api/products");
    const data = await res.json();
    setProduct(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  // add to cart function

  const addToCart = (product) => {
    setCartItem([...cartItem, product]);
  };

  return (
    <ProductContext.Provider
      value={{ product, setProduct, addToCart, cartItem }}
    >
      {children}
    </ProductContext.Provider>
  );
};
