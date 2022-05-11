import React from "react";
import { todoContext } from "../TodoContext";
import "./todoForm.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTd, setopenModal, openModal } = React.useContext(todoContext);
  const aborTodo = () => {
    setopenModal(false);
    console.log(openModal);
  };
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTd(newTodoValue);
    setopenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label className="formCaption">Inserta tu TODO </label>
      <textarea
        className="formInput"
        value={newTodoValue}
        onChange={onChange}
        placeholder="TODO... "
      />
      <div>
        <button type="button" onClick={aborTodo}>
          cancelar
        </button>
        <button type="submit">Añadir</button>
      </div>
    </form>
  );
}

export { TodoForm };
