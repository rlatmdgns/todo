import styled from "styled-components";

export const TodoTitle = styled.h1`
  font-size: 40px;
  text-align: center;
`;

export const InputArea = styled.div`
  padding: 0 20px;
`;

export const Input = styled.input.attrs({
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

export const InputButton = styled.button`
  display: inline-block;
  width: 10%;
  height: 40px;
  background: #fff;
  border: 1px solid #ccc;
  vertical-align: top;
`;
