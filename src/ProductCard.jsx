import { useState } from "react";
import "./ProductCard.css";

function Card({ image, title, description, price, initView }) {
  // const [view, setView] = useState("card");

  return (
    <div className={initView} onClick={() => alert("Hola")}>
      <img className={`img-${initView}`} src={image} alt="" />
      <h3 className={`title-${initView}`}>{title}</h3>
      <p className={`description-${initView}`}>{description}</p>
      <p>${price}</p>
      <div className="buttons">
        <button className={`button-${initView}`}>Recomendar</button>
        <button className={`button-${initView}`}>Comprar</button>
      </div>
    </div>
  );
}

export { Card };
