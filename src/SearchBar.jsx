import "./SearchBar.css";

function SearchBar({ setSearch }) {
  return (
    <input
      className="input"
      type="input"
      placeholder="Search"
      onChange={(event) => setSearch(event.target.value)}
    />
  );
}

export { SearchBar };
