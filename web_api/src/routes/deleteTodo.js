const axios = require('axios');

module.exports = async (req, res) => {
        const {id} = req.params;
        if(!id){
            res.status(400).send('You must send an id to search...')
            return;
        }
        let todo = await axios.delete(`http://data_layer:3333/todo/${id}`);
        res.send(todo.data);
    }