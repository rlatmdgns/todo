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
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "테스트테스트",
      checked: true,
    },
    {
      id: 2,
      text: "테스트테스트",
      checked: true,
    },
    {
      id: 3,
      text: "테스트테스트",
      checked: true,
    },
  ]);
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onClick = (e) => {
    const todo = {
      id: 1,
      text: 111,
      checked: true,
    };
    setTodos([...todos, todo]);
  };
  return (
    <Wrap>
      <Header onChange={onChange} onClick={onClick} text={value} />
      <TodoList todos={todos} />
    </Wrap>
  );
}

export default App;
