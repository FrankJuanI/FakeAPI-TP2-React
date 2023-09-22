import { NavItem } from "./NavItem.jsx";
import { SearchBar } from "./SearchBar.jsx";

function NavBar() {
  return (
    <ul
      className="navBar"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "500px",

        margin: "0 auto",
        backgroundColor: "#efefef",
        padding: "10px",
        borderRadius: "10px",
        fontFamily: "Helvetica",
        fontSize: "12px",
        gap: "1.2em",
      }}
    >
      <NavItem image={"./src/assets/home.png"} title={"Home"} />
      <NavItem image={"./src/assets/shopping-cart.png"} title={"Cart"} />
      <NavItem image={"./src/assets/user.png"} title={"User"} />
    </ul>
  );
}

export { NavBar };
