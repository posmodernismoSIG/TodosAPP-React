import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const todoContext = React.createContext();
//el consumer almacena toda la informacion de funciones de la app, mientras que el consumer se usa para recibir cosas del provider
function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("test", []);
  const [searchValue, setSearch] = React.useState("");
  const [openModal, setopenModal] = React.useState(false);

  const completedTd = todos.filter((i) => i.completed === true).length;
  const totalTd = todos.length;

  let searchedTodos = [];
  //console.log(todosBackend);
  if (searchValue.length < 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todomin = todo.text.toLowerCase();
      const srcvmin = searchValue.toLowerCase();
      return todomin.includes(srcvmin);
    });
  }
  //const addTd = (text) {

  const addTd = (text) => {
    let listTodos = [...todos];
    listTodos.push({
      completed: false,
      text,
    });
    saveTodos(listTodos);
  };

  const deleteTd = (text) => {
    let listTodos = [...todos];
    const listTodosF = listTodos.filter((txt) => {
      return txt.text !== text;
    });
    saveTodos(listTodosF);
  };

  const completeTd = (text) => {
    const tIndex = todos.findIndex((todo) => todo.text === text);
    let listTodos = [...todos];
    listTodos[tIndex].completed = true;
    saveTodos(listTodos);
  };

  return (
    <todoContext.Provider
      value={{
        loading,
        error,
        completeTd,
        completedTd,
        totalTd,
        searchValue,
        setSearch,
        searchedTodos,
        deleteTd,
        openModal,
        setopenModal,
        addTd,
      }}
    >
      {props.children}
    </todoContext.Provider>
  );
}
export { todoContext, TodoProvider };
