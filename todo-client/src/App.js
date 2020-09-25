import React, { useState, useCallback } from "react";
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
  // const onClick = useCallback(
  //   (newTodo) => {
  //     if (!newTodo) {
  //       alert("입력하세요.");
  //       return;
  //     }
  //     const todo = {
  //       id: todos.length + 1,
  //       text: newTodo,
  //       checked: false,
  //     };

  //     // axios.post("/api", todo).then((res) => {
  //     //   let todo = res.data;
  //     //   setTodos([...todos, todo]);
  //     //   setValue("");
  //     // });
  //   },
  //   [todos] // 없으면 처음 랜더링 할때만 생성
  // );
  const onClick = useCallback(async (newTodo) => {
    if (!newTodo) {
      alert("입력하세요.");
      return;
    }
    const todo = {
      text: newTodo,
      checked: false,
    };
    try {
      let response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });
      let result = await response.json();
      console.log(result);
      setTodos([...todos, result]);
      setValue("");
    } catch (error) {
      alert("전송을 못하였습니다.");
    }
  });

  const chageTodoChecked = async (id) => {
    try {
      let UpdatecheckedTodo;
      const updateTodo = todos.map((todo) => {
        if (todo.id === parseInt(id)) {
          // todo.checked === false
          //   ? (todo.checked = true)
          //   : (todo.checked = false);
          todo.checked = todo.checked === false ? true : false;
          UpdatecheckedTodo = todo;
        }
        return todo;
      });
      setTodos(updateTodo);
      let response = await fetch("/api", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(UpdatecheckedTodo),
      });
    } catch (error) {
      console.log(error);
      alert("변경을 실패하였습니다.");
    }
  };
  const todoDelete = async (id) => {
    const deleteTodo = {
      id: id,
    };
    try {
      let response = await fetch("/api", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(deleteTodo),
      });
      setTodos(todos.filter((todo) => todo.id !== parseInt(id)));
    } catch (error) {
      console.log(error);
      alert("삭제를 실패하였습니다.");
    }
  };
  return (
    <Form>
      <Header onChange={onChange} onClick={onClick} text={value} />
      <TodoList
        todos={todos}
        chageTodoChecked={chageTodoChecked}
        todoDelete={todoDelete}
        loading={loading}
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
