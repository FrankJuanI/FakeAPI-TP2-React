import "./NavItem.css";

function NavItem({ image, title }) {
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
    >
      <img style={{ width: "32px" }} src={image} alt="" />
      <h3 style={{ margin: "4px" }}>{title}</h3>
    </li>
  );
}

export { NavItem };
