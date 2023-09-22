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
        console.log(info);
      }
    } catch {
      console.log(error);
    }
  };

  // const filterBy = async () => {
  //   const data = await getInfo();
  //   setInfo(
  //     data.filter((item) => {
  //       if (search === "") {
  //         return item;
  //       } else if (item.title.toLowerCase().includes(search.toLowerCase())) {
  //         return item;
  //       }
  //     })
  //   );
  // };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <>
      <Cart state={"hidden"} />
      <NavBar />
      <div
        className="separator"
        style={{ height: "40px", width: "100vw" }}
      ></div>
      <ShoppingSection info={info} />
    </>
  );
}

export default App;
