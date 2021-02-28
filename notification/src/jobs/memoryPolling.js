const schedule = require('node-schedule');

const sendNotification = require('../utils/sendNotification');
const todosListFactory = require('../utils/todosList');

module.exports ={
    job : () => schedule.scheduleJob('0 * * * *', async function(){
        const todayTodos = Object.keys(todosListFactory.get());
        const HOURS_IN_ADVANCE = 3;
        const currentHour = new Date().getHours();
        const targetHour = currentHour + HOURS_IN_ADVANCE;
        if(!todayTodos[targetHour]){
            return;
        }
        todosListFactory.get()[targetHour].map(todo =>{
            sendNotification(`Your todo: ${todo.description} ends in ${HOURS_IN_ADVANCE} hours!`);
        }) 
      })
}





