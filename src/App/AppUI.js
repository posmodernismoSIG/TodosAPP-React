import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoBottom } from "../TodoBottom";
import { todoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../todoForm";

function AppUI() {
  const { completeTd, openModal, setopenModal, searchedTodos, deleteTd } =
    React.useContext(todoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => {
              completeTd(todo.text);
            }}
            onDelete={() => deleteTd(todo.text)}
          /> //1) llaman al componente todo item y le meten
        ))}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <TodoBottom setopenModal={setopenModal} />
      <div>Asdf</div>
    </React.Fragment>
  ); //retornar todos los elementos de app
}

export { AppUI };
