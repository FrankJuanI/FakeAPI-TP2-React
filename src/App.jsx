import "./App.css";
import { NavBar } from "./NavBar";
import { ShoppingSection } from "./ShoppingSection";
import { Cart } from "./Cart";
import { useState, useEffect } from "react";

function App() {
  const [info, setInfo] = useState();

  const getInfo = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (response.ok) {
        const data = await response.json();
        console.log("Full data: ", data);
        setInfo(data);
      }
    } catch {
      console.log(error);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);


  return (
    <>
      <Cart state={"hidden"} />
      <NavBar setSearch={setSearch} />
      <div
        className="separator"
        style={{ height: "40px", width: "100vw" }}
      ></div>
      <ShoppingSection info={info} />

    </>
  );
}

export default App;
