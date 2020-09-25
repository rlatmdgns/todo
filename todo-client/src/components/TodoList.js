import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, chageTodoChecked, todoDelete, loading }) {
  console.log(loading);
  let TodoList;
  if (loading) {
    TodoList = <div>로딩 중....</div>;
  } else {
    TodoList = todos.map((todo) => (
      <TodoItem
        key={todo.id}
        id={todo.id}
        text={todo.text}
        todo={todo}
        chageTodoChecked={chageTodoChecked}
        todoDelete={todoDelete}
      />
    ));
  }
  return <ul>{ToodoList}</ul>;
}

export default TodoList;
