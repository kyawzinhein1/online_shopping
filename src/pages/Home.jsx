import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./../components/Loading";

export const Home = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    try {
      const url = "https://fakestoreapi.com/products";
      const response = await fetch(url);
      const data = await response.json();
      setCards(data);
      setLoading(false);
    } catch (err) {
      console.error("fail to fetch data from api", err);
    }
  };

  useEffect((_) => {
    getProducts();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-wrap gap-14 mt-10 mx-auto">
      {cards.map((card) => (
        <div
          key={card.id}
          className="w-60 p-4 bg-white shadow-md rounded-lg overflow-hidden relative mx-auto hover:bg-gray-100 transition-all"
        >
          <Link to={`/products/${card.id}`}>
            <div className="w-full h-40 mx-auto mb-4">
              <img
                src={card.image}
                alt={card.id}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="text-center">
              <p className="font-bold text-lg mb-2">{card.title}</p>
              <p>{card.rating.rate}</p>
              <p className="font-semibold text-blue-600 mb-10">
                {card.price} USD
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md absolute bottom-4 left-1/2 transform -translate-x-1/2">
                Add to Cart
              </button>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
