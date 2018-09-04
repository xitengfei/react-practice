import React from 'react'
import Footer from './components/Footer'
import AddTodo from './components/AddTodo'
import TodoListContainer from './components/TodoListContainer'

const App = () => {
    
    return (
        <div>
            <AddTodo />
            <TodoListContainer />
            <Footer />
        </div>
    )
}

export default App