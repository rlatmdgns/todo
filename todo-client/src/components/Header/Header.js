import React, { useRef } from "react";

import { TodoTitle, InputArea, Input, InputButton } from "./HeaderStyles";

function Header(props) {
  const { onChange, onClick, text } = props;

  const inputRef = useRef(false);

  const addTodo = (e) => {
    e.preventDefault();
    onClick(inputRef.current.value);
  };

  return (
    <section>
      <TodoTitle>Todo App</TodoTitle>
      <InputArea>
        <Input
          onChange={onChange}
          value={text}
          ref={inputRef}
          placeholder="할 일 입력하세요."
        />
        <InputButton type="submit" onClick={addTodo}>
          입력
        </InputButton>
      </InputArea>
    </section>
  );
}

export { Header }; //객체안에 담아서 내보낸다.
