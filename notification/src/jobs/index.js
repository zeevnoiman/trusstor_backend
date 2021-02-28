const todosListFactory = require('../utils/todosList');
const {job : onceADay} = require('./onceADay');
const {job : onTheDay} = require('./onTheDay');
const {job : memoryPolling} = require('./memoryPolling');


function init(){
    todosListFactory.createTodoList()
    onceADay()
    onTheDay()
    memoryPolling()
}

module.exports = init;