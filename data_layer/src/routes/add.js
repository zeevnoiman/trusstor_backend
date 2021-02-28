const Todos = require('../models/Todos');

module.exports = async (req, res) => {
    const {description, date, done = false} = req.body;
    let todo = await Todos.create({
       description,
       date, 
       done
    });
    todo = todo.toJSON();
    res.send(todo);
};