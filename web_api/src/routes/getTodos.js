const axios = require('axios');

module.exports = { 
    show: async (req, res) => {
        const {past} = req.query;
        const todos = await axios.get('http://data_layer:3333/todos', {
            params:{
                past: past
            }
        });
        res.send(todos.data)
    },

    index : async (req, res) => {
        const {id} = req.params;
        if(!id){
            res.status(400).send('You must send an id to search...')
            return;
        }
        const todos = await axios.get(`http://data_layer:3333/todos/${id}`);
        res.send(todos.data);
    }
}