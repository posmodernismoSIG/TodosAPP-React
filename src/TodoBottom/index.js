import React from "react";
import "./TodoBottom.css";

function TodoBottom(props) {
  const ClickMe = () => {
    props.setopenModal((prevModal) => !prevModal);
    //console.log(props.openModal);
  };
  return (
    <button className="btn-inactive" type="button" onClick={ClickMe}>
      +
    </button>
  );
}

export { TodoBottom };
