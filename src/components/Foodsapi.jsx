import React, { useEffect, useState } from "react";
import Container from "./Container";
import Popular from "./Popular";
import Recomended from "./Recomended";

const Foodsapi = () => {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const MealApi = async () => {
    try {
      const res = await fetch(
        "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
      );
      if (!res.ok) {
        throw new Error("Network error is");
      }
      const data = await res.json();
      console.log(data.Items.IsPopular);
      setData(data.Items);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    MealApi();
  }, []);

  return (
    <div className="mt-16">
      <Container>
        {error && <p>{error}</p>}

        <div className="popular mb-4 px-24">
          <div className="flex justify-between">
            <div>
              <h2 className="text-2xl">Popular</h2>
            </div>
            <div className="text-2xl">
              <span className="text-orange-400">Addmore</span>
              <span className="text-gray-400">&lt;</span>
              <span className="text-orange-400">&gt;</span>
            </div>
          </div>
        </div>
        <div className="main">
          {data.map((el) => (
            <Popular key={el.Id} el={el} />
          ))}
        </div>
        <div className="recomended mb-4 px-24 mt-14">
          <div className="flex justify-between">
            <div>
              <h2 className="text-2xl">Recomended</h2>
            </div>
            <div className="text-2xl">
              <span className="text-orange-400">Addmore</span>
              <span className="text-gray-400">&lt;</span>
              <span className="text-orange-400">&gt;</span>
            </div>
          </div>
        </div>
        <div className="main">
          {data.map((el) => (
            <Recomended key={el.Id} el={el} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Foodsapi;
