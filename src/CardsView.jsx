import { Card } from "./ProductCard";

function CardsView({ info }) {
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
      {info &&
        info.map((product, index) => {
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
