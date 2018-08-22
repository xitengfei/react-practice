import { ADD_TODO } from '../constants/actionTypes'
import AppDispatcher from '../dispatch/AppDispatcher'

/**
 * Dispatcher.dispatch
 * add dispatcher
 */
export const TodoActions = {
    addTodo(text){
        AppDispatcher.dispatch({
            type: ADD_TODO,
            payload:{
                text,
            }
        })
    }
}