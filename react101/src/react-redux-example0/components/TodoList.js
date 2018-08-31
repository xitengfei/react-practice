import React from 'react'
import Todo from './Todo'

const TodoList = ({todos}) => (
    <div>
        <h1>Todo List</h1>
        <ul>
            {todos.map( (todo, i) => (
                <Todo
                    key={i}
                    {...todo}
                />
            ))}
        </ul>
    </div>
)

export default TodoList