"use client";

import { ProductContext } from "@/context/ProductContext";
import React, { useContext } from "react";

const page = () => {
  const { product, setProduct } = useContext(ProductContext);

  return (
    <div>
      <h1>this is card comp {product.length} </h1>
    </div>
  );
};

export default page;
