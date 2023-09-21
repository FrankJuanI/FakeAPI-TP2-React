import { useState, useEffect } from "react";
import { FiltrosAside } from "./ShoppingFiltrosAside.jsx";
import { ChangeView } from "./ChangeView.jsx";
import { CardsView } from "./CardsView.jsx";
import { TableView } from "./TableView.jsx";

function ShoppingSection({ info }) {
  const [view, setView] = useState("card");

  useEffect(() => {
    if (info ?? undefined) {
      return;
    }
  }, [info]);

  return (
    <>
      <ChangeView view={view} setView={setView} />
      <div
        className="separator"
        style={{ height: "40px", width: "100vw" }}
      ></div>
      <div
        className="shopping-section"
        style={{ flexDirection: "row", position: "relative", display: "flex" }}
      >
        <FiltrosAside />

        {view === "card" ? (
          <CardsView info={info} />
        ) : (
          <TableView info={info} />
        )}
      </div>
    </>
  );
}

export { ShoppingSection };
