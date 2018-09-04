import React from 'react'
import ReactDOM from 'react-dom'

import {addTodo} from './actions'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import store from './store'

// const store = createStore(reducers)

store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))



class App extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            todos: store.getState().todos
        }

        store.subscribe(function(){
            this.setState({
                todos: store.getState().todos
            })
        }.bind(this))
    }
    render() {
        return (
            <div>
                <TodoList todos={this.state.todos} />
                <TodoInput />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))