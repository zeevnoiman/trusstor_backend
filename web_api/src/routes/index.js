const express = require('express');

const addTodo = require('./addTodo');
const getTodo = require('./getTodos');
const updateTodo = require('./updateTodo');
const deleteTodo = require('./deleteTodo');

const routes = express.Router();

routes.get('/', (req, res) => {res.send('Hello web api')})
routes.get('/todos/:id', getTodo.index)
routes.get('/todos', getTodo.show)
routes.post('/todo', addTodo)
routes.put('/todo/:id', updateTodo)
routes.delete('/todo/:id', deleteTodo)

module.exports = routes;