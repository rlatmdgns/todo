import React from "react";

function TodoItem({ text, id }) {
  console.log({ text });
  return <li id={id}>{text}</li>;
}

export default TodoItem;
