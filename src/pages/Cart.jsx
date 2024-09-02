import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlicer";

export const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const calculateTotalAmount = () => {
    return cartItems
      .reduce((total, item) => {
        return total + item.price * item.length; // Correctly calculates total based on item price and quantity
      }, 0)
      .toFixed(2); // Keeps total amount to two decimal places
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleAddToCart = (id) => {
    dispatch(addToCart({ id }));
  };

  if (cartItems.length === 0) {
    return (
      <p className="text-red-600 text-center text-2xl font-medium mt-10">
        Your cart is empty.
      </p>
    );
  }

  return (
    <div className="max-w-[440px] sm:max-w-[800px] mx-auto">
      <h2 className="text-xl font-bold mb-4">Cart</h2>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b-2 py-2"
        >
          <div className="flex items-center gap-4">
            <img src={item.image} alt={item.title} className="w-16" />
            <div>
              <p className="font-semibold">{item.title}</p>
              <p>Price: {(item.price * item.length).toFixed(2)} USD</p>
              <p>No: {item.length}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => handleAddToCart(item.id)} // Remove item from cart on click
              className="bg-blue-600 text-white font-bold px-4 py-2 rounded-md"
            >
              +
            </button>
            <button
              onClick={() => handleRemoveFromCart(item.id)} // Remove item from cart on click
              className="bg-red-600 text-white font-bold px-4 py-2 rounded-md"
            >
              -
            </button>
          </div>
        </div>
      ))}
      <div className="flex items-center justify-between mt-3">
        <p>Total Amount : {calculateTotalAmount()} USD</p>
        <button
          type="button"
          className="bg-green-500 text-white px-2 py-2 rounded-md hover:bg-green-600 transition-all"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};
