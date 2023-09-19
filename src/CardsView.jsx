import { Card } from "./ProductCard";

function CardsView({ product }) {
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
      {product &&
        product.map((product, index) => {
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
