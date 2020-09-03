import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

const Wrap = styled.div`
  width: 500px;
  padding-bottom: 20px;
  margin: 0 auto;
  border: 1px solid #111;
  border-radius: 10px;
  background: #fff;
`;

function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onClick = (newTodo) => {
    if (newTodo === "") {
      alert("입력하세요.");
      return;
    }
    const todo = {
      id: todos.length + 1,
      text: newTodo,
      checked: false,
    };
    setTodos([...todos, todo]);
    setValue("");
  };
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      if (e.target.value === "") {
        alert("입력하세요.");
        return;
      }
      const todo = {
        id: todos.length + 1,
        text: e.target.value,
        checked: false,
      };
      setTodos([...todos, todo]);
      setValue("");
    }
  };
  const chageTodoChecked = (id) => {
    const updateTodo = todos.map((todo) => {
      if (todo.id === Number(id)) {
        todo.checked === false ? (todo.checked = true) : (todo.checked = false);
      }
      return todo;
    });
    setTodos(updateTodo);
    console.log(todos);
  };
  return (
    <Wrap>
      <Header
        onChange={onChange}
        onKeyDown={onKeyDown}
        onClick={onClick}
        text={value}
      />
      <TodoList todos={todos} chageTodoChecked={chageTodoChecked} />
    </Wrap>
  );
}

export default App;
