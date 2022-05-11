import "./App.css";
import React, { useEffect, useState } from "react";
import { todoContext, TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";
import { useLocalStorage } from "../TodoContext";
/*const todosD = [
  {text: 'Levantarse', completed:false},
  {text: 'comer', completed:false},
  {text:'llorar', completed:false},
  {text:'cantar', completed:false}
]*/
//creacion de un custom hook para la comunicacion con la bd en este caso el local storage

function App() {
  /*
  EJEMPLO DE CONEXION CON LA API DEL BACK
 React.useEffect(() => {
    try {
      // fetch("https://rickandmortyapi.com/api/character/231")
      fetch("http://localhost:5000/todos")
        .then((resp) => {
          return resp.json();
        })
        .then((resp) => {
          console.log(resp);
          setTodosBackend(resp);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);
  
  

  const [todosBackend, setTodosBackend] = useState();
  */

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
