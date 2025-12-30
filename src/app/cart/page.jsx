"use client";

import { ProductContext } from "@/context/ProductContext";
import { useContext } from "react";

const page = () => {
  const { cartItem } = useContext(ProductContext);
  const notify = () => toast("Wow so easy !");

  const totalPrice = cartItem.reduce(
    (sum, item) => sum + item.price * (item.quantity ?? 1),
    0
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8 text-center">
          Shopping Cart ({cartItem.length})
        </h1>

        {cartItem.length === 0 ? (
          <p className="text-center text-gray-500 py-8">Your cart is empty.</p>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItem.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded border flex gap-4"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.category}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">₹{item.price}</p>
                    {item.quantity && (
                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded border sticky top-4">
                <h2 className="font-semibold mb-4">Order Summary</h2>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>₹{(totalPrice * 0.18).toFixed()}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>₹{(totalPrice * 1.18).toFixed()}</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
