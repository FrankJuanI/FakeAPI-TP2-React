import { Card } from "./ProductCard";
import { useState, useEffect } from "react";

function CardsView({ info }) {
  const [infoo, setInfoo] = useState();
  useEffect(() => {
    setInfoo(info);
  }, [info]);
  return (
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
      {infoo &&
        infoo.map((product, index) => {
          return (
            <Card
              key={`${index}`}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          );
        })}
    </div>
  );
}

export { CardsView };
