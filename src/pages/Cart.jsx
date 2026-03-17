import React from 'react';
import { useSelector } from 'react-redux';

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  console.log(cartItems);

  return (
    <div className=" py-10 px-4">
      {/* Container */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
        {/* 🛍 Left Side - Cart Items */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

          {/* Single Cart Item */}
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b pb-4 mb-4">
              {/* Product Info */}
              <div className="flex items-center gap-4">
                <img
                  src={item.thumbnail}
                  alt="product"
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-500 text-sm">${item.price}</p>
                </div>
              </div>

              {/* Quantity Control */}
              <div className="flex items-center gap-3">
                <button className="px-3 py-1 bg-gray-200 rounded">-</button>
                <span className="font-semibold">{item.quantity}</span>
                <button className="px-3 py-1 bg-gray-200 rounded">+</button>
              </div>

              {/* Remove */}
              <button className="text-red-500 font-medium hover:underline">Remove</button>
            </div>
          ))}
        </div>

        {/* 💳 Right Side - Summary */}
        <div className="bg-white p-6 rounded-2xl shadow h-fit">
          <h2 className="text-xl font-bold mb-4">{cartItems.length} Items</h2>

          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>$200</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>$10</span>
          </div>

          <div className="flex justify-between font-bold text-lg mt-4 border-t pt-4">
            <span>Total</span>
            <span>$210</span>
          </div>

          <button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
