const express = require('express');
// const cors = require('cors'); 
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 5000;

// app.use(cors());
app.use(bodyParser.json());

let todos = [];

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.post('/api/todos', (req, res) => {
  const { task } = req.body;
  const newTodo = { id: uuidv4(), task, done: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.delete('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(todo => todo.id !== id);
  res.sendStatus(204);
});

app.patch('/api/todos/:id/toggle', (req, res) => {
  const { id } = req.params;
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, done: !todo.done } : todo
  );
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
