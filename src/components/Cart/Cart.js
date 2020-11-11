import React, { useState } from "react";
import Item from "../Item/Item";
import Line from "../Line/Line";
import "./cart.css";

const Cart = ({ cart, setCart }) => {
  const renderItems = cart.map((item, index) => {
    return (
      <Item
        key={index}
        quantity={item.quantity}
        name={item.name}
        price={Number(item.price)}
        cart={cart}
        setCart={setCart}
      />
    );
  });

  let subtotal;
  if (cart.length > 0) {
    subtotal = 0;
    cart.forEach((item) => {
      return (subtotal = subtotal + item.price * item.quantity);
    });
  }
  const zero = 0;
  const delivery = 2.5;

  return (
    <div className="cart-container">
      <button className={cart.length === 0 ? "emptyCart" : "notEmptyCart"}>
        Valider mon panier
      </button>
      {cart.length === 0 ? null : (
        <div>
          <div className="cart-items">{renderItems}</div>

          <Line
            style={{ paddingBottom: "10px" }}
            title="Sous-total"
            amount={subtotal ? subtotal.toFixed(2) : zero.toFixed(2)}
          />
          <Line
            style={{ paddingTop: "10px" }}
            title="Frais de livraison"
            amount={delivery.toFixed(2)}
          />
          <Line title="Total" amount={(subtotal + delivery).toFixed(2)} />
        </div>
      )}
    </div>
  );
};

export default Cart;
