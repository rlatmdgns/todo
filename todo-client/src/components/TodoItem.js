import React from "react";
import styled from "styled-components";

const Item = styled.li`
  cursor: pointer;
`;
const DeleteButton = styled.button`
  margin-left: 20px;
`;
const checkedStyle = {
  textDecoration: "line-through",
  color: "#ccc",
};
function TodoItem({ todo, text, id, chageTodoChecked, todoDelete }) {
  const itemToggle = (e) => {
    e.stopPropagation();
    id = e.target.dataset.id;
    chageTodoChecked(id);
  };
  const deleteTodoHandle = (e) => {
    e.stopPropagation();
    id = e.target.parentNode.dataset.id;
    todoDelete(id);
  };
  if (todo.checked === false) {
    return (
      <>
        <Item data-id={id} onClick={itemToggle}>
          {text}
          <DeleteButton type="button" onClick={deleteTodoHandle}>
            삭제
          </DeleteButton>
        </Item>
      </>
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
