import React, { useState } from "react";
import Category from "./Category";
import Cart from "./Cart/Cart";

const Main = ({ data, isLoading }) => {
  const [cart, setCart] = useState([]);

  let renderCategories;
  if (!isLoading) {
    renderCategories = data.map((categ, index) => {
      if (categ.meals.length === 0) return;
      else
        return (
          <Category
            cart={cart}
            setCart={setCart}
            data={data}
            isLoading={isLoading}
            key={index}
            name={categ.name}
            index={index}
          />
        );
    });
  }
  return (
    <div style={{ width: "100%", backgroundColor: "#f1eded" }}>
      <div className="container">
        <div style={{ display: "flex" }}>
          <div style={{ width: "calc(100% - 385px)", marginRight: "35px" }}>
            {renderCategories}
          </div>
          <Cart cart={cart} setCart={setCart} />
        </div>
      </div>
    </div>
  );
};

export default Main;
