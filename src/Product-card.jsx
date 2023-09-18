import "./Product-card.css";

function Card({ image, title, description, price }) {
  return (
    <div
      className="card"
      style={{
        width: "250px",
        height: "auto",
        minHeight: "500px",
        backgroundColor: "#eee",
        position: "relative",
        margin: "10px",
        borderRadius: "10px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={() => alert("Hola")}
    >
      <img style={{ width: "100%", margin: "0 auto" }} src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>${price}</p>
      <div className="buttons">
        <button>Recomendar</button>
        <button>Comprar</button>
      </div>
    </div>
  );
}

export { Card };
