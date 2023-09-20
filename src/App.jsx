import "./App.css";
import { NavBar } from "./NavBar";
import { ShoppingSection } from "./ShoppingSection";
import { Cart } from "./Cart";
import { ChangeView } from "./ChangeView";
import { useState, useEffect } from "react";

function App() {
  const [info, setInfo] = useState();
  const [search, setSearch] = useState("");
  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (response.ok) {
          const data = await response.json();
          setInfo(data);
          console.log("Successfully fetched");
        }
      } catch {
        console.log(error);
      }
    };
    getInfo();
  }, []);

  let INFO_FILTRADA = () => {
    info.filter((info) => info.title === search);
  };

  return (
    <>
      <Cart state={"hidden"} />
      <NavBar setSearch={setSearch} />
      <div
        className="separator"
        style={{ height: "40px", width: "100vw" }}
      ></div>
      <ShoppingSection INFO_FILTRADA={INFO_FILTRADA} />
    </>
  );
}

export default App;
