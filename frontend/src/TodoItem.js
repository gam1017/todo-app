import React from 'react';

function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <li
      onClick={onToggle}
      style={{
        textDecoration: todo.done ? 'line-through' : 'none',
        color: todo.done ? 'gray' : 'black',
        cursor: 'pointer',
        marginBottom: 10
      }}
    >
      {todo.task}
      <button onClick={(e) => { e.stopPropagation(); onDelete(); }} style={{ marginLeft: 10 }}>
        삭제
      </button>
    </li>
  );
}

export default TodoItem;
