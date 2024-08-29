import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetail } from "../store/productDetailSlicer";

export const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productDetail);

  useEffect(
    (_) => {
      dispatch(fetchProductDetail(id));
    },
    [dispatch, id]
  );

  return (
    <section className="max-w-[300px] sm:max-w-[800px] mx-auto">
      <div className="flex items-center justify-between mt-4 mb-4">
        <p className="text-3xl font-bold">Product Detail</p>
        <NavLink className="bg-black px-2 py-1 text-white rounded-md" to={"/"}>
          Back
        </NavLink>
      </div>
      {data.isLoading ? (
        <h1 className="mx-auto">Loading...</h1>
      ) : (
        <div className="flex items-center justify-center gap-20 flex-col">
          <div>
            <img src={data.data.image} alt={data.data.id} className="w-32" />
          </div>
          <div>
            <h1 className="text-2xl font-normal">{data.data.title}</h1>
            <p>Price - {data.data.price}USD</p>
            <p>Category - {data.data.category}</p>
            <p>Details - {data.data.description}</p>
          </div>
        </div>
      )}
      {
        <>
          {/* <div className="flex items-center justify-center gap-20 flex-col">
            <div>
              <img src={data.image} alt={data.id} className="w-32" />
            </div>
            <div>
              <h1 className="text-2xl font-normal">{data.title}</h1>
              <p>Price - {data.price}USD</p>
              <p>Category - {data.category}</p>
              <p>Details - {data.description}</p>
            </div>
          </div> */}
        </>
      }
    </section>
  );
};
