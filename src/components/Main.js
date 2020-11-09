import React, { useState, useEffect } from "react";
import Axios from "axios";
import Category from "./Category";

const Main = () => {
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

  let renderCategories;
  if (!isLoading) {
    renderCategories = data.categories.map((categ, index) => {
      if (categ.meals.length === 0) return;
      else return <Category key={index} name={categ.name} index={index} />;
    });
  }
  return (
    <div style={{ width: "100%", backgroundColor: "#f1eded" }}>
      <div className="container">
        <div style={{ display: "flex" }}>
          <div style={{ width: "calc(100% - 385px)", marginRight: "35px" }}>
            {renderCategories}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
