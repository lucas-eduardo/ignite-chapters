const express = require('express');

const app = express();

app.use(express.json());

app.get('/courses', (req, res) => {
  const query = req.query;

  console.log(query);

  return res.json(['Curso 1', 'Curso 2', 'Curso 3']);
});

app.post('/courses', (req, res) => {
  const { course } = req.body;

  return res.json(['Curso 1', 'Curso 2', 'Curso 3', course]);
});

app.put('/courses/:id', (req, res) => {
  const { id } = req.params;

  console.log(id);

  return res.json(['Curso Teste', 'Curso 2', 'Curso 3']);
});

app.patch('/courses/:id', (req, res) => {
  const { id } = req.params;

  console.log(id);

  return res.json(['Curso Teste', 'Curso Teste 2', 'Curso 3']);
});

app.delete('/courses/:id', (req, res) => {
  const { id } = req.params;

  console.log(id);

  return res.json(['Curso Teste']);
});

app.listen(3333);