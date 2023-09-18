import { Card } from "./Product-card.jsx";

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
  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {PRODUCTS.map((product, index) => {
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

export { ShoppingSection };
