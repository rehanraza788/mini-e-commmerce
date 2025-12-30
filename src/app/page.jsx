"use client";
import { ProductContext } from "@/context/ProductContext";
import React, { useContext, useEffect } from "react";

const page = () => {
  // const [products, setProducts] = useState([]);
  // console.log(product);

  const { product, addToCart } = useContext(ProductContext);

  // const handleClick = (id) => {
  //   console.log(id);
  // };

  return (
    <div>
      {/* title  */}
      <h1>product list</h1>
      {/* product Cards  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
        {product.map((product, index) => {
          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Product Image */}
              <div className="w-full h-72 bg-gray-200 flex items-center justify-center">
                <img
                  src={product.img}
                  alt="product-img"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "/placeholder-product.jpg";
                  }}
                />
              </div>

              {/* Product Info */}
              <div className="p-4">
                {/* Category Badge */}
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mb-2">
                  {product.category}
                </span>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                  {product.description}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">
                    ₹ {product.price}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-2xl text-sm font-medium transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
