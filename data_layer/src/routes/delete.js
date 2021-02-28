const Todos = require('../models/Todos');

module.exports = async (req, res) => {
        const {id} = req.params;
        let todo = await Todos.deleteOne({_id: id});
        res.send(todo);
    }