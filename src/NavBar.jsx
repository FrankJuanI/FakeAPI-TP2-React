import { NavItem } from "./NavItem.jsx";

function NavBar() {
  return (
    <ul
      className="navBar"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "300px",
        margin: "0 auto",
        backgroundColor: "#efefef",
        padding: "10px",
        borderRadius: "10px",
        justifyItems: "space-between",
        fontFamily: "Helvetica",
        fontSize: "12px",
      }}
    >
      <NavItem image={"./src/assets/home.png"} title={"Home"} />
      <NavItem image={"./src/assets/magnifying-glass.png"} title={"Search"} />
      <NavItem image={"./src/assets/shopping-cart.png"} title={"Cart"} />
      <NavItem image={"./src/assets/user.png"} title={"User"} />
    </ul>
  );
}

export { NavBar };
