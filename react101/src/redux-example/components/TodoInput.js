import React from 'react'
import {addTodo} from '../actions'
import store from '../store'

class TodoInput extends React.Component{
    constructor(props){
        super(props)

        this.onChange = this.onChange.bind(this)
        this.onClick = this.onClick.bind(this)
        this.state = {
            text:''
        }
    }

    onChange(ev){
        this.setState({
            text: ev.target.value
        })
    }

    onClick(){
        console.log(this.state)
        store.dispatch(addTodo(this.state.text))
        console.log(store.getState())
    }

    render(){
        return (
            <div>
                <label>Add Todo</label>
                <input value={this.state.text} onChange={this.onChange} />
                <button onClick={this.onClick} >Add</button>
            </div>
        )
    }
}

export default TodoInput