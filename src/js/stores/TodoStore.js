import {EventEmitter} from "events";

class TodoStore extends EventEmitter{
    constructor(){
        super()
        this.todos = [
            {
                id:123456,
                text : "Learn React Now",
                complete : false

            },{
                id:123457,
                text : "Learn Express",
                complete : false
            },{
                id:123458,
                text : "Learn Flux",
                complete : false
            },
        ];
    
}
getAll(){
   return this.todos;
    }

}

const todoStore = new TodoStore;

export default todoStore;