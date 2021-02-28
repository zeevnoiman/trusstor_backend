const schedule = require('node-schedule');
const axios = require('axios');

const todosListFactory = require('../utils/todosList');

module.exports ={
    job : () => schedule.scheduleJob('50 */3 * * *', async function(){
        try{
            const {data : todos} = await axios.get('http://data_layer:3333/active_todos');
            todosListFactory.erase();
            todos.map(todo => {
                let currentDate = new Date();
                const todoDate = new Date(todo.date);
    
                if(todoDate.toLocaleDateString() == currentDate.toLocaleDateString("en-US", {timeZone: 'Asia/Jerusalem'})){
                    todosListFactory.add(todoDate.getHours(), todo)
                }
            })
        } catch{
            return;
        }
    })
}


