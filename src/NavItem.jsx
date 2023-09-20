import "./NavItem.css";

function NavItem({ image, title, handleclick }) {
  return (
    <li
      className="nav-item"
      style={{
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "64px",
      }}
      onClick={handleclick}
    >
      <img style={{ width: "32px" }} src={image} alt="" />
      <h3 style={{ margin: "4px" }}>{title}</h3>
    </li>
  );
}

export { NavItem };
