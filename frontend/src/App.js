// GPT 사용

import './App.css';
import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const loadTodos = async () => {
    const res = await fetch('api/todos');
    const data = await res.json();
    setTodos(data);
  };

  const addTodo = async () => {
    if (task.trim() === '') return;
    await fetch('api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task })
    });
    setTask('');
    loadTodos();
  };

  const deleteTodo = async (id) => {
    await fetch(`api/todos/${id}`, { method: 'DELETE' });
    loadTodos();
  };

  const toggleDone = async (id) => {
    await fetch(`api/todos/${id}/toggle`, { method: 'PATCH' });
    loadTodos();
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>TODO List</h1>
      <input
        type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="할 일 입력"
      />
      <button onClick={addTodo}>추가</button>
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={() => deleteTodo(todo.id)}
            onToggle={() => toggleDone(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
