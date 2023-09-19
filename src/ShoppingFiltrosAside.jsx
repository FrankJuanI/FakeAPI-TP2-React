function FiltrosAside() {
  return (
    <div
      className="filtros-aside"
      style={{
        width: "15%",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        padding: "20px",
      }}
    >
      <h3>Filters</h3>
      <h4>Price</h4>
      <input
        type="text"
        style={{ width: "40px", height: "20px", marginRight: "60px" }}
      />
      <input type="text" style={{ width: "40px", height: "20px" }} />
      <h4>Category</h4>
      <select name="Categoria" style={{ width: "100px", height: "30px" }}>
        <option>Mochila</option>
        <option>Campera</option>
        <option>Remera</option>
      </select>
    </div>
  );
}

export { FiltrosAside };
