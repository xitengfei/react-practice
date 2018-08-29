import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import TodoList from './components/TodoList'

const store = 

const store2 = {
  todos: [
    {
        text: 'Eat food',
        completed: true
    }, 
    {
        text: 'Exercise',
        completed: false
    }
  ],
  visibilityFilter: 'SHOW_COMPLETED'
}

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            todos: store2.todos
        }
    }
    render() {
        return (
            <div>
                <TodoList todos={this.state.todos} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))