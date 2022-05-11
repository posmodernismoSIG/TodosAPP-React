import React from 'react';
import './TodoItem.css';
//lienas 7, 10 con classeName condicional   


function TodoItem(props) {
  const complete = () => {
    alert('Completaste la tarea'+  props.text)
  };
  
  const deleteT = () => {
    alert('Borraste la tarea'+ props.text)
  }
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={props.onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
      >
        {props.text}
      </p>
      <span className="Icon Icon-delete"
      onClick={props.onDelete}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };