import { useState } from "react";
import "./ProductCard.css";

function Card({ image, title, description, price, initView }) {
  return (
    <div className="card" onClick={() => alert("Hola")}>
      <img className={`img-card`} src={image} alt="" />
      <h3 className={`title-card`}>{title}</h3>
      <p className={`description-card`}>{description}</p>
      <p>${price}</p>
      <div className="buttons">
        <button className={`button-card`}>Recomendar</button>
        <button className={`button-card`}>Comprar</button>
      </div>
    </div>
  );
}

export { Card };
