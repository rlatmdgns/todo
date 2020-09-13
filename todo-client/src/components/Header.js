import React, { useRef } from "react";
import styled from "styled-components";
const HeaderSection = styled.header``;

const TodoTitle = styled.h1`
  font-size: 40px;
  text-align: center;
`;
const InputArea = styled.div`
  padding: 0 20px;
`;
const Input = styled.input.attrs({
  type: "text",
})`
  display: inline-block;
  width: 90%;
  padding: 0 10px;
  height: 40px;
  border: 0;
  background: #ccc;
  font-size: 24px;
  box-sizing: border-box;
`;
const InputButton = styled.button`
  display: inline-block;
  width: 10%;
  height: 40px;
  background: #fff;
  border: 1px solid #ccc;
  vertical-align: top;
`;
function Header(props) {
  const { onChange, onClick, text } = props;
  const inputRef = useRef(false);
  const addTodo = (e) => {
    e.preventDefault();
    onClick(inputRef.current.value);
  };
  return (
    <HeaderSection>
      <TodoTitle>Todo App</TodoTitle>
      <InputArea>
        <Input
          onChange={onChange}
          value={text}
          ref={inputRef}
          placeholder="할 일 입력하세요."
        />
        <InputButton onClick={addTodo}>입력</InputButton>
      </InputArea>
    </HeaderSection>
  );
}

export default Header;
