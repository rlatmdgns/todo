import React from "react";
import styled from "styled-components";

const Item = styled.li`
  cursor: pointer;
`;
const checkedStyle = {
  textDecoration: "line-through",
  color: "#ccc",
};
function TodoItem({ todo, text, id, chageTodoChecked }) {
  const itemToggle = (e) => {
    const id = e.target.dataset.id;
    chageTodoChecked(id);
  };
  if (todo.checked === false) {
    return (
      <Item data-id={id} onClick={itemToggle}>
        {text}
      </Item>
    );
  } else {
    return (
      <Item data-id={id} style={checkedStyle} onClick={itemToggle}>
        {text}
      </Item>
    );
  }
}

export default TodoItem;
