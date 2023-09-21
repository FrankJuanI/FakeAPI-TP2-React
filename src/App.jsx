import "./App.css";
import { NavBar } from "./NavBar";
import { ShoppingSection } from "./ShoppingSection";
import { Cart } from "./Cart";
import { useState, useEffect } from "react";

function App() {
  const [info, setInfo] = useState();
  const [search, setSearch] = useState("mens");

  const getInfo = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (response.ok) {
        const data = await response.json();
        console.log("Full data: ", data);
        return data;
      }
    } catch {
      console.log(error);
    }
  };

  const handleOnChange = (value) => {
    setSearch(value);
    console.log("OnChange: ", value);
  };

  const filterBy = async () => {
    const data = await getInfo();
    setInfo(
      data.filter((item) => {
        if (search === "") {
          return item;
        } else if (item.title.toLowerCase().includes(search.toLowerCase())) {
          return item;
        }
      })
    );
    console.log(
      "filter: ",
      data.filter((item) => {
        if (search === "") {
          return item;
        } else if (item.title.toLowerCase().includes(search.toLowerCase())) {
          return item;
        }
      })
    );
  };

  useEffect(() => {
    setInfo(filterBy());
  }, [search]);

  return (
    <>
      <Cart state={"hidden"} />
      <NavBar handleOnChange={handleOnChange} />
      <div
        className="separator"
        style={{ height: "40px", width: "100vw" }}
      ></div>
      {info === !undefined ?? <ShoppingSection info={info} />}
    </>
  );
}

export default App;
