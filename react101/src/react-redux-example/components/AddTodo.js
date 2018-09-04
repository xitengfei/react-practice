import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

const AddTodo = ({dispatch}) => {
    let input

    const onClickHandler = (e) => {
        if( !input.value.trim() ){
            return
        }
        dispatch(addTodo(input.value))
        input.value = ''
    }

    return (
        <div>
            <input ref={node => input = node} />
            <p className="tips"></p>
            <button
                onClick={onClickHandler}
            >
                Add Todo
            </button>
        </div>
    )
}

export default connect()(AddTodo)