import { Dispatcher } from 'flux'
import { ADD_TODO } from '../constants/actionTypes'
import TodoStore from '../stores/TodoStore'

// class DispatcherClass extends Dispatcher {
//     handleAction(action){
//         this.dispatch({
//             type: action.type,
//             payload: action.payload,
//         })
//     }
// }

// const AppDispatcher = new DispatcherClass()
const AppDispatcher = new Dispatcher()

AppDispatcher.register((action) => {
    switch (action.type) {
        case ADD_TODO:
            TodoStore.addTodo(action.payload)
            break
        default:
            return true
    }
    return true
})

export default AppDispatcher