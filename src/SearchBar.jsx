function SearchBar({ handleOnChange }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        justifyContent: "center",
        paddingBottom: "5px",
      }}
    >
      <input
        style={{ height: "3em", width: "14em" }}
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          handleOnChange(event.target.value);
        }}
      />
    </div>
  );
}

export { SearchBar };
