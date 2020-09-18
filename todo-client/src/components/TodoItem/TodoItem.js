import React from "react";
import { Item, DeleteButton, checkedStyle } from "./TodoItemStyles";

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

//memo 훔수가 바뀌지 않으면 리렌더링을 하지 않음
export const MemoizedTodoItem = React.memo(TodoItem);
