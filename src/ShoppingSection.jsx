import { useState, useEffect } from "react";
import { FiltrosAside } from "./ShoppingFiltrosAside.jsx";
import { ChangeView } from "./ChangeView.jsx";
import { CardsView } from "./CardsView.jsx";
// import { ListView } from "./ListView.jsx";

function ShoppingSection() {
  const [info, setInfo] = useState();
  const [view, setView] = useState("card");

  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (response.ok) {
          const data = await response.json();
          setInfo(data);
        }
      } catch {
        console.log(error);
      }
    };
    getInfo();
  }, []);

  return (
    <>
      <ChangeView view={view} setView={setView} />
      <div
        className="shopping-section"
        style={{ flexDirection: "row", position: "relative", display: "flex" }}
      >
        <FiltrosAside />
        <CardsView product={info} />
      </div>
    </>
  );
}

export { ShoppingSection };
