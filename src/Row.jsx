import { useState } from "react";
import "./Row.css";

function Row({ image, title, description, price }) {
  return (
    <div className="row-container" onClick={() => alert("Hola")}>
      <img className={`img-row`} src={image} alt="" />
      <h3 className={`title-row`}>{title}</h3>
      <p className={`description-row`}>{description}</p>
      <div className="options-row">
        <p>${price}</p>
        <div className="buttons">
          <button className={`button-row`}>Recomendar</button>
          <button className={`button-row`}>Comprar</button>
        </div>
      </div>
    </div>
  );
}

export { Row };
