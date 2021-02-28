const axios = require('axios');

module.exports = async (req, res) => {
    const {description, date, done = false} = req.body;

    if(!description || !date){
        res.status(400).send('You must send description and date...')
        return;
    }
    let todo = await axios.post('http://data_layer:3333/todo', {
       description,
       date, 
       done
    });
    console.log(todo.data);
    res.send(todo.data);
};