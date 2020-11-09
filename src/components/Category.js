import React, { useState, useEffect } from "react";
import Axios from "axios";
import Dish from "./Dish";

const Category = ({ name, index }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await Axios.get(
      "https://lereacteur-backend-deliveroo.herokuapp.com/"
    );
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  let renderDishes;
  if (!isLoading) {
    renderDishes = data.categories[index].meals.map((dish, index) => {
      return (
        <Dish
          key={index}
          name={dish.title}
          description={dish.description}
          price={dish.price}
          isPopular={dish.popular}
          picture={dish.picture}
        />
      );
    });
  }

  return (
    <>
      <h2 style={{ margin: "25px 0", fontSize: "26px", fontWeight: "bold" }}>
        {name}
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {renderDishes}
      </div>
    </>
  );
};

export default Category;
