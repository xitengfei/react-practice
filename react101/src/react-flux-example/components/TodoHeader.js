import React from 'react'
import { TodoActions } from '../actions/todoActions'

class TodoHeader extends React.Component {
    constructor(props){
        super(props)

        this.onChange = this.onChange.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.state = {
            text: '',
            editing: false,
        }
    }
    onChange(ev){
        this.setState({
            text: ev.target.value,
        })
    }
    addTodo(){
        TodoActions.addTodo(this.state.text)
        this.setState({
            text:'',
        })
    }
    render(){
        return (
            <div>
                <h1>TodoFlux</h1>
                <div>
                    <input
                      value={this.state.text}
                      type="text"
                      placeholder="请输入待办事项"
                      onChange={this.onChange}
                    />
                    <button
                      onClick={this.addTodo}
                    >添加</button>
                </div>
            </div>
        )
    }
}

export default TodoHeader