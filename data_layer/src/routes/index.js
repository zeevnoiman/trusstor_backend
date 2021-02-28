const express = require('express');

const add = require('./add');
const get = require('./get');
const update = require('./update');
const deleteTodo = require('./delete');

const routes = express.Router();

routes.get('/', (req, res) => {res.send('Hello data layer')})
routes.get('/todos/:id', get.index)
routes.get('/todos', get.show)
routes.get('/active_todos', get.showActiveTodos)
routes.post('/todo', add)
routes.put('/todo/:id', update)
routes.delete('/todo/:id', deleteTodo)

module.exports = routes;