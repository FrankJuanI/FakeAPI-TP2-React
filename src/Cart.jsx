import { useState, useEffect } from "react";
import "./Cart.css";

function Cart({ estado }) {
  const [state, SetState] = useState("hidden");

  useEffect(() => SetState(estado), []);

  if (state === "hidden") {
    return (
      <div className="card-cart">
        <div className="card-cart-header">
          <h3>Shopping Cart</h3>
          <p>Remove All</p>
        </div>
        <div
          className="cart-products-list"
          style={{ height: "40px", width: "100%" }}
        ></div>
        <div className="cart-footer">
          <div className="subtotal-y-cantdeproductos">
            <h4>Sub Total</h4>
            <p>Nº items</p>
          </div>
          <div className="total">
            <h3>$631</h3>
          </div>
        </div>
        <button>CheckOut</button>
      </div>
    );
  }
}

export { Cart };
