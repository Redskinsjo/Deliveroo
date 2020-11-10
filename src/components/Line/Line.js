import React from "react";
import "./line.css";

const Line = ({ setEmptyCart, title, amount }) => {
  return (
    <div className="cart-divs">
      <span>{title}</span>
      <div>
        {" "}
        <span>{amount}</span>
        <i className="fas fa-euro-sign"></i>
      </div>
    </div>
  );
};

export default Line;
