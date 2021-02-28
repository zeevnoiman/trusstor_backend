const schedule = require('node-schedule');
const axios = require('axios');

const sendNotification = require('../utils/sendNotification');
const todosListFactory = require('../utils/todosList');

module.exports ={
    job : () => schedule.scheduleJob('55 23 * * *', async function(){

        try{
            const {data : todos} = await axios.get('http://data_layer:3333/active_todos');
            todosListFactory.erase();
            const DAYS_IN_ADVANCE = 1;
            todos.map(todo => {
                let tomorrowDate = new Date();
                tomorrowDate.setDate(tomorrowDate.getDate() + DAYS_IN_ADVANCE);
                const todoDate = new Date(todo.date);
    
                if(todoDate.toLocaleDateString() == tomorrowDate.toLocaleDateString("en-US", {timeZone: 'Asia/Jerusalem'})){
                    todosListFactory.add(todoDate.getHours(), todo)
                }
            })

            console.log(todosListFactory.get());
            const tomorrowTodos = Object.values(todosListFactory.get());
            tomorrowTodos.map(todosOnHour =>{
                for(let todo of todosOnHour){
                    sendNotification(`Your todo: ${todo.description} is until tomorrow!`);
                }
            }) 
        } catch{
            return;
        }
      })
}


