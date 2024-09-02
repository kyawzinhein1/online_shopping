import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../store/productSlicer";
import { addToCart } from "../store/cartSlicer";

export const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product);

  useEffect(
    (_) => {
      dispatch(fetchProduct());
    },
    [dispatch]
  );

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="flex flex-wrap gap-8 mt-10 mx-auto max-w-[220px] sm:max-w-[800px]">
      {data.isLoading ? (
        <h1 className="mx-auto">Loading...</h1>
      ) : (
        data.data.map((product) => {
          return (
            <div
              key={product.id}
              className="w-60 p-4 bg-white shadow-md rounded-lg overflow-hidden relative mx-auto"
            >
              <Link to={`/products/${product.id}`}>
                <div className="w-full h-40 mx-auto mb-4">
                  <img
                    src={product.image}
                    alt={product.id}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </Link>
              <div className="text-center">
                <p className="font-bold text-lg mb-2">{product.title}</p>
                <p>{product.rating.rate}</p>
                <p className="font-semibold text-blue-600 mb-10">
                  {product.price} USD
                </p>
                <button
                  onClick={() => {
                    handleAddToCart(product);
                  }}
                  className="bg-blue-600 text-white px-2 py-2 rounded-md absolute bottom-4 left-1/2 transform -translate-x-1/2"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
