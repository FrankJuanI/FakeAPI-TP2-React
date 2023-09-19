function ChangeView({ view, setView }) {
  const handleClick = () => {
    if (view === "card") {
      setView("list");
    } else {
      setView("card");
    }
  };

  return (
    <button
      style={{
        backgroundColor: "red",
        border: "none",
        padding: "1em",
        margin: "0 auto",
        display: "flex",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      Cambiar
    </button>
  );
}

export { ChangeView };
