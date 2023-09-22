import { useState, useEffect } from "react";
import { FiltrosAside } from "./ShoppingFiltrosAside.jsx";
import { ChangeView } from "./ChangeView.jsx";
import { CardsView } from "./CardsView.jsx";
import { TableView } from "./TableView.jsx";
import { SearchBar } from "./SearchBar.jsx";
import { Await } from "./Await.jsx";

function ShoppingSection({ info }) {
  const [search, setSearch] = useState("");
  const [view, setView] = useState("card");
  if (info === undefined) {
    console.log("info undefined");
  }

  const handleOnChange = (value) => {
    setSearch(value);
  };

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
        <SearchBar handleOnChange={handleOnChange} />

        {view === "card" && info === null ? (
          <Await />
        ) : view === "card" && info ? (
          <CardsView info={info} />
        ) : info ? (
          <TableView info={info} />
        ) : null}
      </div>
    </>
  );
}

export { ShoppingSection };
