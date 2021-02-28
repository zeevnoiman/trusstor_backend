const Todos = require('../models/Todos');

module.exports = { 
    show: async (req, res) => {
        const {past} = req.query;
        let todos;
        if(past == 'true'){
            todos = await Todos.find().exec();
        } else{
            todos = await Todos.find({date:{ $gte: new Date()}}).exec();
        }
        res.send(todos)
    },

    showActiveTodos: async (req, res) => {
        const todos = await Todos.find({date:{ $gte: new Date()}, done: false}).exec();

        res.send(todos);
    },

    index : async (req, res) => {
        const {id} = req.params;
        let todo = await Todos.findById(id);
        res.send(todo);
    }
}