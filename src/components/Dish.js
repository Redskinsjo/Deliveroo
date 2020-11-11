import React from "react";
import NotImage from "../assets/not-image.jpg";

const Dish = ({
  cart,
  setCart,
  name,
  description,
  price,
  isPopular,
  picture,
}) => {
  let desc = "";
  for (let i = 0; i < description.length; i++) {
    if (i <= 49) desc = desc + description[i];
    else break;
  }

  const handleClick = (e) => {
    const newObj = [...cart];
    if (newObj.length > 0) {
      const item = newObj.find((item) => item.name === name);
      if (item) item.quantity++;
      else newObj.push({ quantity: 1, name, description, price, isPopular });
    } else {
      newObj.push({ quantity: 1, name, description, price, isPopular });
    }
    setCart(newObj);
  };

  return (
    <div
      style={{
        display: "flex",
        padding: "10px",
        width: "350px",
        backgroundColor: "white",
        marginBottom: "35px",
        borderRadius: "5px",
        justifyContent: "space-between",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginRight: "10px",
          justifyContent: "space-between",
        }}
      >
        <h4 style={{ margin: "none", fontSize: "19px" }}>{name}</h4>
        <p style={{ fontSize: "15px" }}>{desc}</p>
        <div
          style={{ fontSize: "18px", display: "flex", alignItems: "center" }}
        >
          <span style={{ padding: "5px" }}>{price}</span>
          <i className="fas fa-euro-sign"></i>

          {isPopular ? (
            <i
              style={{
                color: "#FF8000",
                fontSize: "14px",
                paddingLeft: "10px",
              }}
              className="fas fa-star"
            ></i>
          ) : null}
          <span style={{ color: "#FF8000", fontSize: "14px" }}>
            {isPopular ? "Populaire" : null}
          </span>
        </div>
      </div>
      <img
        style={{
          height: "130px",
          width: "130px",
          borderRadius: "5px",
          objectFit: "cover",
          objectPosition: "center",
        }}
        src={picture ? picture : NotImage}
        alt=""
      />
    </div>
  );
};

export default Dish;
