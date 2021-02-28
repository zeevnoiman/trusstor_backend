const Todos = require('../models/Todos');

module.exports = async (req, res) => {
        const {id} = req.params;
        const {done} = req.query;
        let todo = await Todos.updateOne({_id: id}, {done: done});
        res.send(todo);
    }