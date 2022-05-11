import React from "react";
import { todoContext } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const { searchValue, setSearch, searchedTodos } =
    React.useContext(todoContext);
  const searchV = (event) => {
    setSearch(event.target.value);
    console.log(event.target.value);
    console.log(searchedTodos);
  };
  return (
    <input
      className="bottom"
      placeholder="Cebolla"
      onChange={searchV}
      value={searchValue}
    />
  );
}

export { TodoSearch };
