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
    <div
      className="shopping-section"
      style={{ display: "felx", flexDirection: "row", position: "relative" }}
    >
      <div
        className="filtros-aside"
        style={{ width: "30%", display: "flex", flexDirection: "column" }}
      >
        <h3>Filters</h3>
        <h4>Price</h4>
        <input
          type="text"
          style={{ width: "40px", height: "20px", marginRight: "60px" }}
        />
        <input type="text" style={{ width: "40px", height: "20px" }} />
        <h3>Category</h3>
        <select name="Categoria" style={{ width: "100px", height: "30px" }}>
          <option>Mochila</option>
          <option>Campera</option>
          <option>Remera</option>
        </select>
      </div>
      <div
        className="catalogo"
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
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
    </div>
  );
}

export { ShoppingSection };
