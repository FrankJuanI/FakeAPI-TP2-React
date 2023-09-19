import "./App.css";
import { NavBar } from "./NavBar";
import { ShoppingSection } from "./ShoppingSection";
import { Cart } from "./Cart";
import { ChangeView } from "./ChangeView";

function App() {
  return (
    <>
      <Cart state={"hidden"} />
      <NavBar />
      <div
        className="separator"
        style={{ height: "40px", width: "100vw" }}
      ></div>
      <ShoppingSection />
    </>
  );
}

export default App;
