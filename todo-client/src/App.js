import React, { useState, useCallback, useEffect } from "react";
import useFetch from "./components/useFetch";
import styled from "styled-components";
import Header from "./components/Header/index";
import TodoList from "./components/TodoList/index";

function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  // useEffect(async () => {
  //   try {
  //     const loadTodos = await axios.get("/api");
  //     setTodos(loadTodos.data);
  //   } catch (error) {
  //     alert("데이터를 못불러왔습니다.");
  //   }
  // }, []);

  // useEffect(async () => {
  //   try {
  //     await fetch("/api")
  //       .then((res) => res.json())
  //       .then((data) => setTodos(data));
  //   } catch (error) {
  //     alert("데이터를 못불러왔습니다.");
  //   }
  // }, []);

  const loading = useFetch(setTodos, "/api");

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onClick = useCallback(
    (newTodo) => {
      if (!newTodo) {
        alert("입력하세요.");
        return;
      }
      const todo = {
        id: todos.length + 1,
        text: newTodo,
        checked: false,
      };

      // axios.post("/api", todo).then((res) => {
      //   let todo = res.data;
      //   setTodos([...todos, todo]);
      //   setValue("");
      // });
    },
    [todos] // 없으면 처음 랜더링 할때만 생성
  );

  const chageTodoChecked = (id) => {
    const updateTodo = todos.map((todo) => {
      if (todo.id === parseInt(id)) {
        todo.checked === false ? (todo.checked = true) : (todo.checked = false);
      }
      return todo;
    });
    setTodos(updateTodo);
    // console.log(todos);
  };
  const todoDelete = (id) => {
    console.log(id);
    setTodos(todos.filter((todo) => todo.id !== parseInt(id)));

    // axios.delete("/api", id).then((res) => {
    //   console.log(res);
    // });
  };
  return (
    <Form>
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
