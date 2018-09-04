import React from 'react'
import {createStore} from 'redux'

let initialState = {
    count: 0
}

/*
* Reducers: define the behavior to change state
* both two methods are not deep clone
*/
let reducers = (state = initialState, action) => {
    switch(action.type){
        case 'INCREMENT':
            return { ...state, count: ++state.count }
        case 'DECRTMENT':
            return Object.assign({}, state, {
                count: --state.count
            })
        default:
            return state
    }
}

/**
 * create store
 */
const store = createStore(reducers)


/**
 * Component
 * @param {count} param0 
 */
const Counter = ({count}) => (
    <div>
        <h1>{count}</h1>
        <button 
            onClick={ ()=> {
                store.dispatch({type:'INCREMENT'}) 
            }} 
        >+</button>
        <button
            onClick={()=>store.dispatch({type:'DECRTMENT'})}
        >-</button>
    </div>
)

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = store.getState()

        // listen to the store state change

        store.subscribe(()=>{
            console.log(store.getState())
            this.setState(store.getState())
        })
    }
    render(){
        return (
            <Counter
                count={this.state.count}
            />
        )
    }
}

export default App