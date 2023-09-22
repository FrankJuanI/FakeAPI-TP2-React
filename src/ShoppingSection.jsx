import { useState, useEffect } from "react";
import { FiltrosAside } from "./ShoppingFiltrosAside.jsx";
import { ChangeView } from "./ChangeView.jsx";
import { CardsView } from "./CardsView.jsx";
import { TableView } from "./TableView.jsx";
import { SearchBar } from "./SearchBar.jsx";

function ShoppingSection({ info }) {
  const [search, setSearch] = useState("");
  const [view, setView] = useState("card");
  const [refresh, setRefresh] = useState(false);
  const [filter, setFilter] = useState(info);

  useEffect(() => {}, []);

  useEffect(() => {
    const filterBy = (search) => {
      setFilter(
        info.filter((item) => {
          if (search === "") {
            return item;
          } else if (item.title.toLowerCase().includes(search.toLowerCase())) {
            return item;
          }
        })
      );
    };
    console.log(!info);
    if (!info) {
      console.log("info undefined");
      setTimeout(() => setRefresh(!refresh), 2000);
      return;
    }
    filterBy(search);
    console.log("filter a: ", filter);
  }, [search]);

  return (
    <>
      <ChangeView view={view} setView={setView} />
      <div
        className="separator"
        style={{
          height: "40px",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
        }}
      ></div>
      <div
        className="shopping-section"
        style={{ flexDirection: "row", position: "relative", display: "row" }}
      >
        <SearchBar setSearch={setSearch} />

        {view === "card" ? (
          <CardsView info={filter ?? info} />
        ) : info ? (
          <TableView info={filter ?? info} />
        ) : null}
      </div>
    </>
  );
}

export { ShoppingSection };
