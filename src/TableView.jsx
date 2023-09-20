import { Row } from "./Row";

function TableView({ product }) {
  return (
    <div
      className="catalogo"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "85%",
        justifyContent: "space-evenly",
      }}
    >
      {product &&
        product.map((product, index) => {
          return (
            <Row
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

export { TableView };
