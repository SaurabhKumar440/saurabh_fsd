import React from "react";
import "./css/Card.css";

function Card({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <span>${product.price}</span>
    </div>
  );
}

export default Card;
