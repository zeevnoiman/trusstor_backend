const axios = require('axios');

module.exports = async (req, res) => {
        const {id} = req.params;
        const {done} = req.query;

        if(!id || !done){
            res.status(400).send('You must send an id and status to update...');
            return;
        }
        let todo = await axios.put(`http://data_layer:3333/todo/${id}`,{}, {
            params:{
                done
            }
        });
        res.send(todo.data);
    }