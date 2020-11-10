import React from "react";
import "./item.css";

const Item = ({ quantity, name, price, cart, setCart }) => {
  return (
    <>
      {quantity === 0 ? null : (
        <div className="cart-item">
          <div className="cart-item-plus-minus">
            <i
              onClick={() => {
                const newObj = [...cart];
                const item = newObj.find((item) => item.name === name);
                item.quantity--;
                const itemIndex = newObj.findIndex(
                  (item) => item.name === name
                );
                if (item.quantity === 0) {
                  newObj.splice(itemIndex, 1);
                }
                setCart(newObj);
              }}
              className="far fa-minus-square"
            ></i>
            <span>{quantity}</span>
            <i
              onClick={() => {
                const newObj = [...cart];
                const item = newObj.find((item) => item.name === name);
                item.quantity++;
                setCart(newObj);
              }}
              className="far fa-plus-square"
            ></i>
            <span>{name}</span>
          </div>
          <div className="cart-item-price">
            <span>{price}</span>
            <i className="fas fa-euro-sign"></i>
          </div>
        </div>
      )}
    </>
  );
};

export default Item;
