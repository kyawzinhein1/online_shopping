import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export const Nav = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <section className="bg-gray-400 h-12 flex items-center justify-between px-4">
      <NavLink to={"/"}>
        <h1 className="text-2xl font-bold">Online Shop</h1>
      </NavLink>
      <NavLink to={"/cart"} className="text-white cursor-pointer relative">
        <ShoppingCartIcon width={30} />
        <div className="w-5 h-5 rounded-full flex items-center justify-center bg-blue-600 text-center absolute -top-2 -right-2">
          {cartItems.items.length}
        </div>
      </NavLink>
    </section>
  );
};
