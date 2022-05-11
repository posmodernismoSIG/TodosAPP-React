import React from "react";
import { todoContext } from "../TodoContext";
import "./TodoCss.css";

function TodoCounter() {
  const { completedTd, totalTd } = React.useContext(todoContext);
  return (
    <h2 className="tituloTC">
      {" "}
      HAS COMPLETADO {completedTd} tareas de {totalTd}{" "}
    </h2>
  );
}

export { TodoCounter };
