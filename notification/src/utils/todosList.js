const todosListFactory = (function(){
    var todoList;
    
    add = function(key, todo){
        if(todoList[key]){
            todoList[key] = [...todoList[key], todo]
            return;
        }
        todoList[key] = [todo]
    };

    erase =  function(){
        todoList = {}
    };

    get = function(){
        return todoList;
    }

    createTodoList = function(){
        if(!todoList){
            todoList = new Object();
        }
        return todoList;
    };

    return {
        add,
        erase,
        get,
        createTodoList
    } 
})()
module.exports = todosListFactory; 