import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, chageTodoChecked, todoDelete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          todo={todo}
          chageTodoChecked={chageTodoChecked}
          todoDelete={todoDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
