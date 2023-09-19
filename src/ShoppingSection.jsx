import { useState } from "react";
import { Card } from "./ProductCard.jsx";
import { FiltrosAside } from "./ShoppingFiltrosAside.jsx";
import { ChangeView } from "./ChangeView.jsx";

const GetInfo = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    }
  } catch {
    console.log(error);
  }
};

const PRODUCTS = await GetInfo();

function ShoppingSection() {
  const [view, setView] = useState("card");
  return (
    <>
      <ChangeView view={view} setView={setView} />
      <div
        className="shopping-section"
        style={{ flexDirection: "row", position: "relative", display: "flex" }}
      >
        <FiltrosAside />
        <div
          className="catalogo"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "85%",
            justifyContent: "space-evenly",
          }}
        >
          {PRODUCTS.map((product, index) => {
            return (
              <Card
                key={`${index}`}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
                initView={view}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export { ShoppingSection };
