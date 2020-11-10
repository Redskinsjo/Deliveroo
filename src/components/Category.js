import React from "react";
import Dish from "./Dish";

const Category = ({ cart, setCart, data, isLoading, name, index }) => {
  let renderDishes;
  if (!isLoading) {
    renderDishes = data[index].meals.map((dish, index) => {
      return (
        <Dish
          cart={cart}
          setCart={setCart}
          key={index}
          name={dish.title}
          description={dish.description}
          price={Number(dish.price).toFixed(2)}
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
          justifyContent: "space-around",
        }}
      >
        {renderDishes}
      </div>
    </>
  );
};

export default Category;
