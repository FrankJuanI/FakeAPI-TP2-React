import { NavItem } from "./NavItem.jsx";
import { SearchBar } from "./SearchBar.jsx";
function NavBar({ setSearch }) {
  return (
    <ul
      className="navBar"
      style={{
        display: "flex",
        flexDirection: "row",
        width: "500px",
        gap: "1em",
        justifyContent: "center",
        boxSizing: "content-box",
        margin: "0 auto",
        backgroundColor: "#efefef",
        padding: "10px",
        borderRadius: "10px",
        fontFamily: "Helvetica",
        fontSize: "12px",
        alignItems: "center",
      }}
    >
      <NavItem image={"./src/assets/home.png"} title={"Home"} />
      <SearchBar setSearch={setSearch} />
      <NavItem image={"./src/assets/magnifying-glass.png"} title={"Search"} />
      <NavItem image={"./src/assets/shopping-cart.png"} title={"Cart"} />
      <NavItem image={"./src/assets/user.png"} title={"User"} />
    </ul>
  );
}

export { NavBar };
