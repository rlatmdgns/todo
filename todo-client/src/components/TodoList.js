import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, chageTodoChecked }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          todo={todo}
          chageTodoChecked={chageTodoChecked}
        />
      ))}
    </ul>
  );
}

export default TodoList;
