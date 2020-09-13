import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Header from "./components/Header/index";
import TodoList from "./components/TodoList/index";

function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onClick = useCallback(
    (newTodo) => {
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
    },
    [todos] // 없으면 처음 랜더링 할때만 생성
  );
  const onSubmit = (e) => {
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
  };
  const chageTodoChecked = (id) => {
    const updateTodo = todos.map((todo) => {
      if (todo.id === Number(id)) {
        todo.checked === false ? (todo.checked = true) : (todo.checked = false);
      }
      return todo;
    });
    setTodos(updateTodo);
    // console.log(todos);
  };
  const todoDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== Number(id)));
  };
  return (
    <Form onSubmit={onSubmit}>
      <Header onChange={onChange} onClick={onClick} text={value} />
      <TodoList
        todos={todos}
        chageTodoChecked={chageTodoChecked}
        todoDelete={todoDelete}
      />
    </Form>
  );
}

export default App;

const Form = styled.form`
  width: 500px;
  padding-bottom: 20px;
  margin: 0 auto;
  border: 1px solid #111;
  border-radius: 10px;
  background: #fff;
`;
