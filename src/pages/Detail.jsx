import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Loading from "./../components/Loading";

export const Detail = () => {
  const { id } = useParams();

  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    try {
      const url = `https://fakestoreapi.com/products/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      const productDetails = data;
      setDetails(productDetails);
      setLoading(false);
    } catch (err) {
      console.error("fail to get products details", err);
    }
  };

  useEffect(
    (_) => {
      getProducts();
    },
    [id]
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="max-w-[800px] mx-auto">
      <div className="flex items-center justify-between mt-4 mb-4">
        <p className="text-3xl font-bold">Product Detail</p>
        <NavLink className="bg-black px-2 py-1 text-white rounded-md" to={"/"}>
          Back
        </NavLink>
      </div>
      {
        <>
          <div className="flex items-center justify-center gap-20 flex-col">
            <div>
              <img src={details.image} alt={details.id} className="w-32" />
            </div>
            <div>
              <h1 className="text-2xl font-normal">{details.title}</h1>
              <p>Price - {details.price}USD</p>
              <p>Category - {details.category}</p>
              <p>Details - {details.description}</p>
            </div>
          </div>
        </>
      }
    </section>
  );
};
