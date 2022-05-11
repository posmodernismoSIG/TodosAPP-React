import React from "react";
import { todoContext } from "../TodoContext";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTd, setOpenModal } = React.useContext(todoContext);
  const aborTodo = () => {
    //jes jes jes
  };
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const submiTodo = (event) => {
    event.preventDefault();
    addTd(newTodoValue);
    setOpenModal(false);
  };
  const onSubmit = () => {
    //jes jes jes
  };

  return (
    <form onSubmit={onSubmit}>
      <label>...</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="jesjes jes toc toc toc "
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
