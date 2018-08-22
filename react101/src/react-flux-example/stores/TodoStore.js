import { EventEmitter } from 'events'
import { ADD_TODO } from '../constants/actionTypes'

const store = {
    todos: [],
    editing: false,
}

class TodoStoreClass extends EventEmitter {
    addChangeListener(callback){
        this.on( ADD_TODO, callback )
    }
    removeChangeListener(callback){
        this.removeListener( ADD_TODO, callback )
    }
    getTodos(){
        return store.todos
    }
    addTodo(payload){
        store.todos.push(payload.text)
        this.emit(ADD_TODO)
    }
}

const TodoStore = new TodoStoreClass();

export default TodoStore
